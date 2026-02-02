'use server'

import axios from "axios";
import { cookies } from 'next/headers';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { parse } from 'date-fns';
import { findToValuesRecursive } from "./generalTools";
import { auth } from "./authTools"; 

/**
 * ENKRIPSI RSA - WAJIB DI SERVER
 */
export const encryptChunkRSA = async (payload: string) => {
    const chunkSize = 214;
    const chunks = payload.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
    const encryptedChunks = [];

    const pubKeyPath = path.join(process.cwd(), 'lib', 'key', 'public.pem');

    if (!fs.existsSync(pubKeyPath)) {
        const altPath = path.join(process.cwd(), 'apps', 'frontend', 'lib', 'key', 'public.pem');
        if (fs.existsSync(altPath)) {
            var pubKey = fs.readFileSync(altPath, 'utf8');
        } else {
            throw new Error(`Public key NOT FOUND. Terdeteksi di: ${pubKeyPath}`);
        }
    } else {
        var pubKey = fs.readFileSync(pubKeyPath, 'utf8');
    }

    // Proses enkripsi tetap sama...
    for (const chunk of chunks) {
        const encrypted = crypto.publicEncrypt(
            {
                key: pubKey,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            },
            Buffer.from(chunk)
        );
        encryptedChunks.push(encrypted.toString('base64'));
    }
    return encryptedChunks.join('||');
}
/**
 * LOGOUT ACTION
 */

export const logoutAction = async () => {
    const cookieStore = await cookies(); 
    cookieStore.delete("_A2R");
    cookieStore.delete("_A2F");
};

/**
 * ROUTE MIDDLEWARE & MENU CHECK
 */
export const routeMiddleware = async (searchUrl: string) => {
    const session = await auth();

    if (!session?.user) return '99'; // Not Logged In

    try {
        // 1. Cek Expiry Session
        const dSessionExp = parse(session.expires, 'yyyy-MM-dd HH:mm:ss', new Date());
        if (new Date().getTime() > dSessionExp.getTime()) return '99';

        if (!session.user.uniqueId) return '99';

        // 2. Fetch Menu dari Backend Perusahaan
        const resp = await axios.post(
            `${process.env.NEXT_PUBLIC_API_DIR_PATH}`,
            { UniqueId: session.user.uniqueId },
            {
                headers: {
                    'X-ENDPOINT': "/setup/nav/user-data",
                    'X-Level': "1",
                    'X-Timestamp': new Date().toISOString() 
                }
            }
        );

        const menu = resp.data.data;
        const urlFix = searchUrl.length > 1 ? searchUrl.replace(/\/$/, '') : searchUrl;

        // 3. Validasi Hak Akses Menu
        const res = findToValuesRecursive(menu, urlFix);
        return res.length < 1 ? '98' : '00'; // 98 = No Access, 00 = Authorized

    } catch (error: any) {
        console.error("Auth Middleware Error:", error.response?.data || error.message);
        return error.response?.status === 401 ? '99' : '500';
    }
};