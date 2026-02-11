import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      uniqueId?: string;
      role?: string;
      fullname?: string;
      username?: string;
    } & DefaultSession["user"];
  }

  interface User {
    uniqueId?: string;
    role?: string;
    fullname?: string;
    username?: string;
    accessToken?: string;
  }
}