import CredentialsProvider from "next-auth/providers/credentials";

const { default: prisma } = require("../../../../../prisma/prisma");

export const CustomUser = {
  id: null,
  name: null,
  email: null,
  role: null,
  avatar: null,
};

export const CustomSession = {
  user: CustomUser,
  expires: "",
};

export const authOptions = {
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const findUser = await prisma.users.findFirst({
          where: {
            email: user.email,
          },
        });

        if (findUser) {
          return true;
        }
        await prisma.users.create({
          data: {
            email: user.email,
            name: user.name,
            role: "user", // Set the role to 'User'
          },
        });

        return true;
      } catch (error) {
        console.log("The error is ", error);
        return false;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        user.role = user ? (user.role == null ? "user" : user.role) : "user";
        token.user = user;
      }
      return token;
    },

    async session({ session, token, user }) {
      session.user = token.user;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Welcome Back",
      type: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.users.findFirst({
          where: {
            email: credentials ? credentials.email : null,
          },
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            avatar: true,
          },
        });
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // ...add more providers here
  ],
};
