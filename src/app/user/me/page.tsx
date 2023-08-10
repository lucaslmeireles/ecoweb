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
            <div className="flex flex-col place-self-center align-middle justify-center my-5">
                <img className="rounded-full my-2 w-28 border border-neutral-500" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                <p className="text-slate-900 text-lg font-semibold">Lucas Meireles</p>
                <p className="text-slate-700 text-base font-normal">lucas@meireles.com.br</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Meus posts</h2>
                <div>
                     
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-slate-900 my-3">Curtidos</h2>
                <div>
                    
                </div>
            </div>
        </main>
    )
}
