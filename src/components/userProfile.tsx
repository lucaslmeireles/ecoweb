'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"

export default function UserProfile() {
    const {data: session} = useSession()
    //isLoggedin
    if (session?.access_token){
        return (
            <img src={session?.user.avatar}></img>
        )
    }
    return (
        <Link href="/api/auth/signin">
        <button>Entrar</button>
        </Link>
    )
}