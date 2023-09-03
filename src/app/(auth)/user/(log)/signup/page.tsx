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
            callbackUrl: '/user/edit',
            email: email,
            password: password,
        })
    }

    return (
        <div className=" flex flex-col justify-center align-middle place-content-center place-items-center" >
            <h1 className="font-semibold text-accent text-center text-lg">Entre agora!</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-96 px-5 m-auto bg-sky-700 rounded-md">
                <label htmlFor="" className="text-white">Seu email</label>
                <input type="email" name="email" id="email" className="rounded bg-slate-200" />
                <label htmlFor="" className="text-white">Sua senha super secreta</label>
                <input type="password" name="password" id="password" className="rounded bg-slate-200" />
                <button type="submit" className="rounded bg-green-200 my-4 py-2 " >Enviar</button>
            </form>

        </div>
    )
}