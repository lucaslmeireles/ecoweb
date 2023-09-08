import Link from "next/link";
import { GridCard } from "./gridcard";

export default function MyLikedPosts({likedPosts}){
    if (likedPosts.length == 0) return (
        < div>
        <p className="text-primary text-lg font-medium">Parece que você ainda não curtiu nenhum posts</p>
        </ div>
        )
        
    return (
        likedPosts.length!= 0 && likedPosts.map((post : any) => (
        <GridCard key={post.id} title={post.title} id={post.id} tags={post.tags}   cover_img={post.cover_img}/>
    )))
}
