import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        // Aqui definimos um usuário fixo
        if (
          credentials?.username === "admin" &&
          credentials?.password === "gurps123"
        ) {
          return {
            id: "1",
            name: "Administrador",
            email: "admin@gurps.com",
            role: "admin"
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    }
  },
  pages: {
    signIn: "/login"
  }
};

export default NextAuth(authOptions);
