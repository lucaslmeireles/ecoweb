import Link from "next/link";
import { GridCard } from "./gridcard";
import { GridCardProps } from "@/types/dataFunctions.type";

export default function Myposts({myposts} : {myposts: GridCardProps[]}){
    if (myposts.length == 0) return (
        < div>
        <p>Parece que você ainda não tem nenhum pos, que tal criar um</p>
        <button className="bg-accent w-full p-2 h-h-full my-3 text-white rounded"><Link href={'/post/create'}>Criar um post</Link></button>
        </ div>
        )
        
    return (
        myposts.length!= 0 && myposts.map((post : GridCardProps) => (
        <GridCard key={post.id} title={post.title} id={post.id}  myposts cover_img={post.cover_img}/>
    )))
}
