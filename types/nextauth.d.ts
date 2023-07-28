import NextAuth from "next-auth/next";
import { decl } from "postcss";

declare module "next-auth" {
    interface Session {
        acess_token: string
    }
}