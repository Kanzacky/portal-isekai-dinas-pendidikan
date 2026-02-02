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

        if (!payload?.uniqueId) {
          return null; 
        }

        return {
          id: payload.uniqueId,          
          uniqueId: payload.uniqueId,
          role: payload.role,
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
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.uniqueId = token.uniqueId as string;
      session.user.role = token.role as string;
      return session;
    },
  },
});
