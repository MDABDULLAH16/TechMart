import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const result = await axios.post(
            "https://techmart-server-gamma.vercel.app/users/sign-in",
            {
              email: credentials.email,
              password: credentials.password,
            },
          );
          return result.data.user;
        } catch (err) {
          console.error("Credentials login error:", err.response?.data);
          return null; // null হলে NextAuth নিজেই error handle করবে
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
       if (!account) return true;
      // ✅ শুধু Google login এর সময় sign-up call করবে
      if (account.provider === "google") {
        try {
         const result =  await axios.post(
            "https://techmart-server-gamma.vercel.app/users/sign-up",
            {
              email: user.email,
              name: user.name,
              image: user.image,
            },
          );
          console.log('google sign-up result',result);
        } catch (err) {
          // user already exists হলেও true return করবে — block করবে না
          console.error("Google sign-up error:", err.response?.data);
        }
        return true;
      }

      // Credentials provider — sign-up call 
      if (account.provider === "credentials") {
        return true;
      }

      return true;
    },

    async session({ session, token }) {
      // console.log('tokens',token);
      
      if (token) { 
        session.role = token.role || "user";
      }
      return session;
    },

    async jwt({ token, user, account }) {
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
