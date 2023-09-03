'use client'

import { useSession } from "next-auth/react"

export default function EditUser() {
    const {data: session} = useSession()
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()

        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const bio = e.target.bio.value

        const body = {
            firstName,
            lastName,
            bio

        }
        console.log(body)
        const res = await fetch('https://eco-api.vercel.app/user/edit', { 
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Authorization": "Bearer " +session?.access_token,
                "Content-Type": "application/json",
            }
        })

        const data = await res.json()
        console.log(data)
    }
    const test = () => {
        console.log(session)
    }
    return (
        <div className=" flex flex-col justify-center align-middle place-content-center place-items-center" >
        <h1 className="font-semibold text-accent text-center text-lg">Entre agora!</h1>
        <form onSubmit={handleSubmit} className="flex flex-col w-96 px-5 m-auto bg-sky-700 rounded-md" method="post">
            <label htmlFor="" className="text-white">Seu nome</label>
            <input type="text" name="firstName" id="firstName"  className="rounded bg-slate-200"/>
            <label htmlFor="" className="text-white">Seu sobrenome</label>
            <input type="text" name="lastName" id="lastName" className="rounded bg-slate-200" />
            <label htmlFor="" className="text-white">Sua BIO</label>
            <input type="text" name="bio" id="bio" className="rounded bg-slate-200" />

            <button type="submit" className="rounded bg-green-200 my-4 py-2">Enviar</button>
        </form>

    </div>

    )
}