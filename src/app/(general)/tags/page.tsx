import { Grid } from "@/components/grid";
import { useSearchParams } from "next/navigation";


const getPostsFromTags = async () => {
    const data = await fetch('https://eco-api-lucaslmeireles.vercel.app/post/search')
    const res = data.json()
}

export default async function ViewTags(){
    const tag  = useSearchParams().get('q')
        
    return (
        <>
        <h1>{tag}</h1>
        <Grid data={posts}/>
        </>
    )
}