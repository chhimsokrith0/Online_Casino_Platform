// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const users = [
//   { id: 1, username: "admin", password: "123", name: "Admin User" },
//   { id: 2, username: "testuser", password: "password", name: "Test User" },
// ];

// export default NextAuth({
//   secret: process.env.NEXTAUTH_SECRET || "my-secret-key",
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const user = users.find(
//           (u) =>
//             u.username === credentials?.username &&
//             u.password === credentials?.password
//         );

//         if (user) {
//           return {
//             id: user.id,
//             name: user.name,
//             username: user.username,
//           };
//         }

//         throw new Error("Invalid username or password");
//       },
//     }),
//   ],
//   jwt: {
//     encryption: true,
//     secret: process.env.NEXTAUTH_SECRET || "my-secret-key",
//   },
//   pages: {
//     signIn: "/auth/signin",
//     error: "/auth/error",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//         token.username = user.username;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user = {
//         id: token.id,
//         username: token.username,
//       };
//       return session;
//     },
//   },
// });


import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { id: 1, username: "admin", password: "123", name: "Admin User" },
  { id: 2, username: "testuser", password: "password", name: "Test User" },
];

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET || "my-secret-key",
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Ensure credentials exist
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing username or password");
        }

        const user = users.find(
          (u) =>
            u.username === credentials.username &&
            u.password === credentials.password
        );

        if (user) {
          // Return only required fields
          return {
            id: user.id,
            name: user.name,
            username: user.username,
          };
        }

        throw new Error("Invalid username or password");
      },
    }),
  ],
  jwt: {
    // encryption: true,
    secret: process.env.NEXTAUTH_SECRET || "my-secret-key",
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as number,
        username: token.username as string,
      };
      return session;
    },
  },
});
