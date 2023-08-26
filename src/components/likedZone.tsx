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
            const res = await fetch(`https://eco-api.vercel.app/post/like/${post.id}`, {
                method: 'post',
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
            <div>
                {liked ? <AiFillHeart color="red" width={'50px'} height={'50px'}/> : <AiOutlineHeart/>}
                <p>Like</p>
            </div>
        </button>
    </div>;
}