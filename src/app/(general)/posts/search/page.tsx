'use client'
import { getSearchResults } from "@/app/data"
import { GridCard } from "@/components/gridcard"
import { PostData } from "@/types/dataFunctions.type"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { use, useEffect, useState } from "react"

export default function SearchPage() {
    const [search, setSearch] = useState(false)
    const [post, setPost] = useState<PostData[]>([])
    const searchParams  = useSearchParams().get('q')
    
    useEffect(() => {
        async function fetcher() {
            const data = await getSearchResults(searchParams)
            setSearch(true);
            setPost(data)
            console.log(data)
        }
        fetcher()
    },[searchParams])
    
    const ShowPost = () => {
        if(!search) return <h1>Carregando...</h1>
        if(post.length === 0 ) return (<h1>Nenhum resultado encontrado</h1>)
        
        return (<> 
        {post.length != 0 && post.map(post => {
         return (
            <div key={post.id} className="flex flex-row place-items-center hover:shadow-md hover:shadow-slate-400 rounded-md">
            <GridCard key={post.id} cover_img={post.cover_img} id={post.id} title={post.title}/>
            <div className="flex flex-col">
            <p className="font-bold mx-2">Description</p>
            <p className="font-regular mx-2">{post.small_text}</p>
            </div>
            </div>
        )
        }
        )
        }
        </>)
    }
    return (
        <div className="mx-3 flex flex-col align-middle">
        <h2 className="font-regular text-xl text-primary ">Resultados da sua pesquisa: <span className="font-bold">{searchParams}</span></h2>
        <div className="my-4  ml-4 grid grid-cols-2 gap-2">
        <ShowPost/>
        </div>
        </div>
    )
}