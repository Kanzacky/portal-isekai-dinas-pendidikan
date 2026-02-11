import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

function parseJwt(token: string) {
  try {
    const base64Payload = token.split(".")[1];
    return JSON.parse(Buffer.from(base64Payload, "base64").toString());
  } catch {
    return null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        credential: { type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.credential) return null;

        const accessToken = String(credentials.credential);
        const payload = parseJwt(accessToken);

        if (!payload || !payload.uniqueId) return null;

        return {
          id: payload.uniqueId,
          uniqueId: payload.uniqueId,
          role: payload.role,
          fullname: payload.fullname, 
          username: payload.username,
          accessToken,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.uniqueId = user.uniqueId;
        token.role = user.role;
        token.fullname = user.fullname;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.accessToken = token.accessToken as string;
        session.user.uniqueId = token.uniqueId as string;
        session.user.role = token.role as string;
        session.user.fullname = token.fullname as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
});