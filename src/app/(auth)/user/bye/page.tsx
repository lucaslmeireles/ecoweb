'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Bye(){
    const {push} = useRouter()
    const {data: session} = useSession()
    const handleDelete  = async (e : ReactEventHandler) => {
        e.preventDefault()
        const res = await fetch('https://eco-api.vercel.app/users/delete/myaccount', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : 'Bearer ' +  session?.access_token,
            }
        })
        push('/')        
    }
    return (
        <div className=" flex-1 m-auto ">
            <h1>Até a proxima!</h1>
            <button onClick={handleDelete} className="bg-red-500  bg-opacity-40 w-full p-2 h-h-full my-3 hover:bg-opacity-100 text-white rounded">Deletar minha conta</button>
        </div>
    )    

}