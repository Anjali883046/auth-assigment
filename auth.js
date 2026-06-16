import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers,
  auth,
  signIn,
  signOut
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {

    // 1. Save role into token (JWT)
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;   // store role
        token.id = user.id;       // store user id
      }
      return token;
    },

    // 2. Send role to frontend session
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.id = token.id;
      return session;
    }
  }
});