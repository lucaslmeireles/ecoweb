'use client'

import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function LikedZone({post}) {
    const {data : session} = useSession()
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        setLiked(!liked)
        const likePost =  async () => {
            const res = await fetch(`https://eco-api.vercel.app/post/${liked ? "des" : ""}like/${post.id}`, {
                method: 'post',
                mode: 'cors',
                headers: {
                    Authtentication: 'Bearer ' + session?.access_token,
                    "Content-Type": "application/json",
                    
                }

            })
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