'use client'

import { PostData } from "@/app/(general)/posts/[id]/page";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useStore } from "@/app/store";
import { toast } from "react-toastify";

export default function LikedZone({post}) {
    const {data : session, status} = useSession()
    const [liked, setLiked] = useState(false);
    const isLiked = useStore(state => state.isLiked)
    const state = useStore(state => state.posts)
    
    useEffect(()=> {
        const posts = isLiked(post.id)
        console.log(state)
        setLiked(posts)
    },[post.id, isLiked])

    const addPost = useStore(state => state.addPost)
    const removePost = useStore(state => state.removePost)
    const handleLike = () => {
        const likePost =  async () => {
            const res = await fetch(`https://eco-api.vercel.app/post/${liked ? "des" : ""}like/${post.id}`, {
                method: 'post',
                headers: {
                    "Authorization" : 'Bearer ' +  session?.access_token,
                    "Content-Type": "application/json",
                },
                
            })
           
            liked ? addPost(post.id) : removePost(post.id)
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