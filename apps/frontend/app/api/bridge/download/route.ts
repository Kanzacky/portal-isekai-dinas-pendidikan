import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/tools/authTools';
import axios from 'axios';

export const POST = async (request: NextRequest) => {
    try {
        const session = await auth();
        if (!session) return NextResponse.json({ message: 'Unauthenticated' }, { status: 401 });

        const body = await request.json();
        const endpoint = request.headers.get('x-endpoint');

        const result = await axios.post(
            `${process.env.API_URL}${endpoint}`,
            body,
            {
                headers: {
                    'Authorization': `Bearer ${session?.user?.credential}`,
                },
                responseType: 'arraybuffer' // Penting: Menangani data biner (PDF/XLSX)
            }
        );

        // Ambil tipe konten dari backend (misal: application/pdf)
        const contentType = result.headers['content-type'];
        const contentDisposition = result.headers['content-disposition'];

        return new NextResponse(result.data, {
            status: 200,
            headers: {
                'Content-Type': contentType,
                'Content-Disposition': contentDisposition || 'attachment; filename="download"',
            },
        });
    } catch (error: any) {
        return NextResponse.json({ message: 'Download failed' }, { status: 500 });
    }
}