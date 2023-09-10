import { getNews } from "@/app/data"
import NewsCard from "./newscard"
import { articleType } from "@/types/newsType"



export async function NewsGrid() {
    const results = await getNews()
    return results.splice(1,5).map((article: articleType) => {
        return (
            <NewsCard key={article.uri} article={article}/>
        )
    })
}