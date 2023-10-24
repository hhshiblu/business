import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/prisma";
import { authOptions } from "./options";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Next Auth",
//       credentials: {
       
//       },
//       async authorize(credentials, req) {
//         try {
//           const user = await prisma.users.findFirst({
//             where: {
//               email: credentials?.email,
//             },
//           });

//             if (user) {
//               console.log(user);
//             return user;
//           } else {
//             return null;
//           }
//         } catch (error) {
//           // Handle any errors here, e.g., log them or return an error object
//           console.error("Authorization error:", error);
//           return Promise.resolve(null);
//         }
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
// };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
