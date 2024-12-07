import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name?: string | null;
      username: string; // Add your custom properties
    };
  }

  interface User {
    id: number;
    name?: string | null;
    username: string; // Add your custom properties
  }

  interface JWT {
    id: number;
    username: string; // Add custom fields to JWT
  }
}
