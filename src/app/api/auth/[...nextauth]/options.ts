import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import Credentials from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "your email" },
                password: { label: "Password", type: "password" }
              },
            async authorize(credentials, req) {
                const payload = {
                    email: credentials?.email,
                    password: credentials?.password
                }
                const res = await fetch('https://eco-api.vercel.app/auth/signin', {
                    headers: {
                        'Content-Type': 'application/json'
                      },
                    method: 'POST',
                    body: JSON.stringify(payload),
                })
                const user = await res.json()
                if (!res.ok) {
                    throw new Error(user.message)
                }
                if( res.ok && user){
                    return user.access_token
                }

                return null
            },
            
        })
    ],    
    callbacks: {
        async jwt(token, user,) {
            if (user) {
                token.user = user.token
            }
            return token
        },
        async session(session, token) {
            session.accessToken = token.access_token
            return session
        }
    }
}

//here in pages i can make my own login page, i'll do it