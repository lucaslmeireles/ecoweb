import { getTags } from "@/app/data";
import { Tag } from "@/types/dataFunctions.type";
import Link from "next/link";


export default async function Tags(){
    const tags = await getTags()
    return (
        <div className="flex flex-row gap-2">
        {tags?.length != 0 && tags?.map((tag: Tag) => {
            return (
                <div key={tag.value} className="w-fit p-2 rounded  bg-accent text-white">
                    <Link href={`/posts/search?q=${tag.value}`}>
                    <h3>#{tag.value}</h3>
                    </Link>
                </div>
            )
        })}
        </div>
    )
}