'use client'

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useStore } from "@/store";
import { toast } from "react-toastify";

export default function LikedZone({id}:{id: number}) {
    const {data : session, status} = useSession()
    const [liked, setLiked] = useState(false);
    const isLiked = useStore(state => state.isLiked)
    const state = useStore(state => state.posts)
    
    // resolver isso
    useEffect(()=> {
        console.log(isLiked(id))
    },[])

    const addPost = useStore(state => state.addPost)
    const removePost = useStore(state => state.removePost)
    const handleLike = () => {
        const likePost =  async () => {
            const res = await fetch(`https://eco-api.vercel.app/post/${liked ? "des" : ""}like/${id}`, {
                method: 'post',
                headers: {
                    "Authorization" : 'Bearer ' +  session?.access_token,
                    "Content-Type": "application/json",
                },
                
            })
            
            liked ? addPost(id) : removePost(id)
            setLiked(!liked)
        }
        likePost()
    }

    return <div>
            <button onClick={handleLike}>
                <div className='w-5 h-5'>
                    {liked ? <AiFillHeart color="red" className="text-lg"/> : <AiOutlineHeart className="text-lg"/>}
                </div>
            </button>
    </div>;
}