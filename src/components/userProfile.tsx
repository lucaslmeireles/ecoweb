'use client'

import { useSession } from "next-auth/react"
import Link from "next/link"
import { TiDocumentAdd } from "react-icons/ti"

export default function UserProfile() {
    const {data: session} = useSession()
    //isLoggedin
    if (session?.access_token){
        return (
            <div className="flex flex-row gap-2">
            <Link href="/posts/create"> 
            <div className="w-32 h-10 bg-accent rounded-lg flex align-middle items-center justify-center flex-row">
            <p className="text-white text-base font-semibold">Add post</p>
            <TiDocumentAdd className='text-white w-5 h-5'/>
            </div>
            </Link>
            <Link href='/user/me'>
            <img src={session?.user.avatar} className="w-10 h-10 rounded"></img>
            </Link>
            </div>
        )
    }
    return (
        <Link href="/api/auth/signin">
        <button className="bg-accent p-2 ml-2 rounded text-white hover:shadow ">Entrar</button>
        </Link>
    )
}