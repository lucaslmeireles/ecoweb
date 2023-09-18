'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function UserProfile() {
    const {data: session} = useSession()
    //isLoggedin
    if (session?.access_token){
        return (
            <Link href='/user/me'>
            <img src={session?.user.avatar} className="w-10 h-10 rounded"></img>
            </Link>
        )
    }
    return (
        <Link href="/api/auth/signin">
        <button>Entrar</button>
        </Link>
    )
}