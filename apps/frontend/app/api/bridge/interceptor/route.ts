import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/tools/authTools';
import axios from 'axios';

export const POST = async (request: NextRequest) => {
    try {
        const session = await auth();
        if (!session) {
            return NextResponse.json({ message: 'Unauthenticated' }, { status: 401 });
        }

        const body = await request.json();
        const endpoint = request.headers.get('x-endpoint');

        if (!endpoint) {
            return NextResponse.json({ error: 'Endpoint missing' }, { status: 400 });
        }

        const result = await axios.post(
            `${process.env.API_URL}${endpoint}`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.credential}`, 
                    'X-Timestamp': new Date().toISOString()
                }
            }
        );

        return NextResponse.json(result.data);

    } catch (error: any) {
        console.error("Bridge Error:", error.response?.data || error.message);
        return NextResponse.json(
            error.response?.data || { message: 'Internal Server Error' },
            { status: error.response?.status || 500 }
        );
    }
}