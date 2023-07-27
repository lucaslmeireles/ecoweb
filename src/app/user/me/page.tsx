import { GridCard } from "@/components/gridcard";



export async function getMyPosts(user) {
<<<<<<< HEAD
    const res  = await fetch('https://eco-api.vercel.app/user/me')
=======
    const res  = await fetch('https://eco-api.vercel.app/post/myposts', {
        headers: {
            Authorization: ""
        }
    })
>>>>>>> 6a0dd900a1103d1d4ad2ee03be6744cf5cd471a4
    const data =  await res.json()
    return data
}
export default async function UserMe() {
    const user = '1'
    const myPosts = await getMyPosts(user)
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
                        <GridCard title='teste' id={20} tags="oioi" image="" key={1}/>
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
