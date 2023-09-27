import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";
import { decl } from "postcss";

declare module "next-auth" {
    interface User {
        email: string
        firstName:string
        lastName:string
        bio:string
        avatar:string

    }
    interface Session extends DefaultSession {
        access_token: string
        user?: User
    }
    
}