'use client'
import { Grid } from "@/components/grid";
import { GridCard } from "@/components/gridcard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";



export async function getMyPosts(user : string |undefined) {
    const res  = await fetch('https://eco-api.vercel.app/users/myposts', { headers: {
        "Authorization" : 'Bearer ' +  user,
        "Content-Type": "application/json",
    }},)
    const data =  await res.json()
    return data
}
export default  function UserMe() {
    const [myposts, setMyPosts] = useState([])
    const [likedPosts, setLikedPosts] = useState([])
    const [loading, setLoadign] = useState(false)
    const {data: session}=  useSession();
    
    useEffect(()=>{
        console.log(session)
        const getData = async () => {
            const data = await getMyPosts(session?.access_token)
            setMyPosts(data.myposts)
            setLikedPosts(data.likedposts)
            setLoadign(true)
            console.log(data.myposts)
        }
        session ? getData() : null
    },[session])
    return (
        <main className=" flex flex-col px-11 bg-slate-200">
            <div className="flex flex-col place-self-center align-middle justify-center my-5">
                <img className="rounded-full my-2 w-28 border border-neutral-500" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                <p className="text-slate-900 text-lg font-semibold">Lucas Meireles</p>
                <p className="text-slate-700 text-base font-normal">lucas@meireles.com.br</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Meus posts</h2>
                <div className="grid grid-cols-3 grid-rows-1">
                    {loading ? myposts.map((post : any) => (
                        <GridCard key={post.id} title={post.title} id={post.id} tags={post.tags}   cover_img={post.cover_img}/>
                    )) : <p>Carregando</p>}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Curtidos</h2>
                <div  className="grid grid-cols-3 grid-rows-1">
                {loading ? likedPosts.map((post : any) => (

                        <GridCard key={post.id}  status = {post.status } title={post.title} id={post.id} tags={post.tags}   cover_img={post.cover_img}/>
                    )) : <p>Carregando</p>}
                </div>
            </div>
        </main>
    )
}
