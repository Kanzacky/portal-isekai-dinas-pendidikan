import axios from "axios";

async function fetchAutoToken() {
  const clientKey = process.env.NEXT_PUBLIC_USER_KEY!;
  const clientSecret = process.env.NEXT_PUBLIC_USER_SECRET!;

  const authHeader = btoa(`${clientKey}:${clientSecret}`);

  const res = await axios.post(
    "/api/bridge/login",
    {},
    {
      headers: {
        "X-ENDPOINT": "/auth/token",
        "X-METHOD": "GET",
        "X-Timestamp": new Date().toISOString(),
        "x-uniqueid": "USR000001",
        Authorization: `Basic ${authHeader}`,
      },
    }
  );

  return res.data?.access_token;
}

export default async function postData(endpoint: string, data: any = {}) {
  let authHeaderValue = "";

  if (endpoint === "/auth/login") {
    const token = await fetchAutoToken();
    if (!token) {
      throw new Error("Base Token is missing - Check Backend Credentials");
    }
    authHeaderValue = `Bearer ${token}`;
  }

  return axios.post("/api/bridge/login", data, {
    headers: {
      "X-ENDPOINT": endpoint,
      "X-Timestamp": new Date().toISOString(),
      "x-uniqueid": "USR000001",
      Authorization: authHeaderValue,
      "Content-Type": "application/json",
    },
  });
}
