'use client'
import { GridCard } from "@/components/gridcard";
import { useSessionHook } from "@/hooks";



export async function getMyPosts(user : string |undefined) {
    const res  = await fetch('https://eco-api.vercel.app/user/me')
    const data =  await res.json()
    return data
}
export default async function UserMe() {
    const session = useSessionHook()
    const myPosts = await getMyPosts(session?.access_token)
    return (
        <main className=" flex flex-col px-11 bg-slate-200">
            <div className="flex flex-col place-self-center my-5">
                <img className="rounded-full my-2 w-28 border border-neutral-500" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                <p className="text-slate-900 text-lg font-semibold">userName</p>
                <p className="text-slate-700 text-base font-normal">user email</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Meus posts</h2>
                <div>
                     {myPosts.map((post)=>{
                        <GridCard title={post.title} id={post.id} tags={post.tags} image={post.cover_img} key={post.id}/>
                     })}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Curtidos</h2>
                <div>
                    {myPosts.map((post)=>{
                        <GridCard title='teste' id={20} tags="oioi" image="" key={1}/>
                     })}
                </div>
            </div>
        </main>
    )
}
