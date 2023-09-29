'use client'

import MyPostContext from "@/hooks/useContext"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"

export function DeleteButton({postId} : {postId: number}){
    const {data : session} = useSession()
    const [myposts, setMyPosts] = useContext(MyPostContext)
    const router = useRouter()
    const handleDelete = async() => {
        setMyPosts(() => myposts.filter((post) => post.id !== postId))
        const res = await fetch(`https://eco-api.vercel.app/post/delete/${postId}`, {
            method: 'delete',
            headers: {
                "Authorization" : 'Bearer ' +  session?.access_token,
                "Content-Type": "application/json",
            }
        })
        console.log(res)
    }
    const handleEdit = async() => {
        router.push(`/posts/edit/${postId}`,  )

    }
    return (
        <div className="bg-red-200 m-auto w-fit self-start  rounded-md align-middle hover:bg-red-500">
               <button className="text-slate-900 p-2 text-xs hover:text-white" onClick={handleDelete} type="submit">
                   <AiFillDelete/>
               </button>
               <button className="text-slate-900 p-2 text-xs hover:text-white" onClick={handleEdit} type="submit">
                   <AiFillEdit/>
               </button>
        </div>
    )
}