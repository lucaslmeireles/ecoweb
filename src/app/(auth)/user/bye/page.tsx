'use client'

import { deleteAccount } from "@/app/data"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Bye(){
    const {push} = useRouter()
    const {data: session} = useSession()
    const handleDelete  = async (e : ReactEventHandler) => {
        e.preventDefault()
        deleteAccount(session?.access_token)
        push('/')        
    }
    return (
        <div className=" flex  place-content-center flex-col place-items-center align-middle min-h-screen bg-slate-200">
            <h1>Até a proxima!</h1>
            <button onClick={handleDelete} className="bg-red-500  bg-opacity-40 w-36 p-2 h-h-full my-3 hover:bg-opacity-100 text-white rounded">Deletar minha conta</button>
        </div>
    )    

}