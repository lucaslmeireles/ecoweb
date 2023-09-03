'use client'
import { GridCard } from "@/components/gridcard"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import { use, useEffect, useState } from "react"

export default function SearchPage() {
    const [search, setSearch] = useState(false)
    const [post, setPost] = useState([])
    const searchParams  = useSearchParams().get('q')
    
    useEffect(() => {
        async function fetcher() {
            const response = await fetch(`https://eco-api.vercel.app/post/search?q=${searchParams}`)
            const data = await response.json()
            setSearch(true);
            setPost(data)
            console.log(data)
        }
        fetcher()
    },[searchParams])
    
    console.log(post.map(post => post.title))
    const ShowPost = () => {
        return <>
        
        {post.map(post => (<GridCard key={post.id} cover_img={post.cover_img} id={post.id} tags={post.tags} title={post.title}/>))}
        
        </>
    }
    return (
        <div className="my-4 ml-4 grid grid-cols-3 gap-4">
        <ShowPost/>
        </div>
    )
}