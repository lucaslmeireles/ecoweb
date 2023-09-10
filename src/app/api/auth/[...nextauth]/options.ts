import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Your beautiful email" },
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
                    console.log(user)
                    return user
                }

                return null
            },
            
        })
    ],    
    callbacks: {
        async jwt({token, user}){
            return {...token, ...user}
        },
        async session({session, token, user}){
            const userInfo = await fetch('https://eco-api.vercel.app/users/me', {headers: {
                "Authorization" : 'Bearer ' +  token.access_token,
                "Content-Type": "application/json",
            }})
            
            session.access_token = token.access_token as string
            session.expires = token.expires as string
            session.user = await userInfo.json()
            return session
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60 * 60
    }
}

//here in pages i can make my own login page, i'll do it