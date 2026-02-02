import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: DefaultSession["user"] & {
      uniqueId?: string;
      role?: string;
    };
  }

  interface User {
    accessToken?: string;
    uniqueId?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    uniqueId?: string;
    role?: string;
  }
}
