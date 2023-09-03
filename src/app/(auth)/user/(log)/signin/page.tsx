'use client'

import { signIn } from "next-auth/react"
import { redirect,useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Signup(){
    const {push} = useRouter()
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const body = {
            email: email,
            password : password,

        }
        console.log(body)
        const res = await fetch('https://eco-api.vercel.app/auth/signup', { 
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })

        const data = await res.json()
        console.log(data.access_token)
        signIn('credentials', {
            email: email,
            password: password,
        })
    }
    

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <button type="submit">Enviar</button>

                <p>nao tenho conta<a>entre aqui</a></p>
            </form>
        </>
    )
}