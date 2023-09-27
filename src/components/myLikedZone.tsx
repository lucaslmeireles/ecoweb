import Link from "next/link";
import { GridCard } from "./gridcard";
import { GridCardProps } from "@/types/dataFunctions.type";

export default function MyLikedPosts({likedPosts} : {likedPosts: GridCardProps[]}){
    if (likedPosts.length == 0) return (
        < div>
        <p className="text-primary text-lg font-medium">Parece que você ainda não curtiu nenhum posts</p>
        </ div>
        )
        
    return (
        likedPosts.length!= 0 && likedPosts.map((post : GridCardProps) => (
        <GridCard key={post.id} title={post.title} id={post.id}  cover_img={post.cover_img}/>
    )))
}
