// types/next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extend the Session interface
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      phone: string;
      userType: string;
    } & DefaultSession["user"];
  }
}

// Extend the JWT interface
declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    userType?: string;
  }
}
