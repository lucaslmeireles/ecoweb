import NextAuth from "next-auth/next";
import { decl } from "postcss";

declare module "next-auth" {
    interface Session {
        access_token: string
    }
}