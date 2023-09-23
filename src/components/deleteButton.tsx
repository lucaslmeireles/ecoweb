'use client'

import { useSession } from "next-auth/react"

export function DeleteButton({postId}){
    const {data : session} = useSession()
    const handleDelete = async() => {
        const res = await fetch(`https://eco-api.vercel.app/post/delete/${postId}`, {
            method: 'delete',
            headers: {
                "Authorization" : 'Bearer ' +  session?.access_token,
                "Content-Type": "application/json",
            }
        })
        console.log(res)
    }
    return (
        <div className="bg-red-200 m-auto w-fit self-start  rounded-md align-middle hover:bg-red-500">
               <button className="text-slate-900 p-2 text-xs hover:text-white" onClick={handleDelete} type="submit">
                   Deletar
               </button>
        </div>
    )
}