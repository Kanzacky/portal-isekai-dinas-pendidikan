import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const body = await req.json();
  const incomingHeaders = Object.fromEntries(req.headers.entries());

  const endpoint = incomingHeaders["x-endpoint"];
  const method =
    incomingHeaders["x-method"]?.toUpperCase() === "GET" ? "GET" : "POST";

  if (!endpoint) {
    return NextResponse.json(
      { message: "Missing X-ENDPOINT header" },
      { status: 400 }
    );
  }

  const allowedHeaders = [
    "authorization",
    "x-timestamp",
    "x-uniqueid",
    "content-type",
  ];

  const forwardHeaders = Object.fromEntries(
    Object.entries(incomingHeaders).filter(([k]) =>
      allowedHeaders.includes(k.toLowerCase())
    )
  );

  try {
    const backendUrl = `${process.env.API_URL}${endpoint}`;

    const response = await axios({
      url: backendUrl,
      method,
      data: method === "GET" ? undefined : body,
      headers: {
        ...forwardHeaders,
        accept: "application/json",
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      error.response?.data || { message: "Bridge error" },
      { status: error.response?.status || 500 }
    );
  }
}
