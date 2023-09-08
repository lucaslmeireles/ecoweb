'use client'
import { GridCard } from "@/components/gridcard";
import LikedZone from "@/components/likedZone";
import MyLikedPosts from "@/components/myLikedZone";
import Myposts from "@/components/myPostsZone";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";


async function getMyPosts(user : string) {
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
            data.myposts.length != 0 ? setMyPosts(data.myposts) : setMyPosts([])
            data.likedposts.length != 0 ? setLikedPosts(data.likedposts) : setLikedPosts([])
            setLoadign(true)
            console.log(data.myposts)
        }
        session ? getData() : null
    },[session])
    return (
        <main className=" flex flex-col px-11 bg-slate-200">
            <nav className="flex flex-row place-self-end">
                <ul className="flex flex-row gap-2">
                    <li>
                        <button className="bg-sky-500 w-full p-2 h-h-full my-3 text-white rounded">
                        <Link href={'/api/auth/signout'}>Logout</Link>
                        </button>
                        </li>
                    <li><button className="bg-accent w-full p-2 h-h-full my-3 text-white rounded"><Link href={'/user/edit'}>Editar meu perfil</Link></button></li>
                    <li><button className="bg-red-500  bg-opacity-40 w-full p-2 h-h-full my-3 hover:bg-opacity-100 text-white rounded"><Link href={'/user/bye'}>Excluir minha conta</Link></button></li>
                </ul>
            </nav>
            <div className="flex flex-col place-self-center align-middle justify-center my-5">
                <img className="rounded-full my-2 w-28 border border-neutral-500" src={session?.user.avatar}  alt="" />
                <p className="text-slate-900 text-lg font-semibold">{session?.user.firstName}</p>
                <p className="text-slate-700 text-base font-normal">{session?.user?.email}</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Meus posts</h2>
                <div className="snap-x w-full h-full my-2 flex flex-row gap-3 scroll-m-3 overflow-x-scroll scroll-smooth hover:scroll-auto ">
                    {loading ? <Myposts myposts={myposts}/> : <p>Carregando</p>}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Curtidos</h2>
                <div className="snap-x w-full h-full my-2 flex flex-row gap-3 scroll-m-3 overflow-x-scroll scroll-smooth hover:scroll-auto ">                
                {loading ? <MyLikedPosts likedPosts={likedPosts}/>: <p>Carregando</p>}
                </div>
            </div>
        </main>
    )
}
