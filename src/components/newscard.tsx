import { articleType } from "@/types/newsType"
import Link from "next/link"

type ArticleData = {
  article: articleType
}
const options = {
  action: "getArticles",
  articlesSortBy: "date",
  articlesCount: 5,
  articlesArticleBodyLen: -1,
  dataType: ["news", "pr"],
  apiKey: 'c8df12e0-ec4f-42df-829e-ee5e5d8f3def'
}
function NewsCard(articleData: ArticleData) {
  const {article} = articleData
        return (
          <div key={article.uri}className='flex flex-row mt-2 w-11/12 h-3/6 py-2 justify-around bg-neutral-300 items-center rounded-md hover:shadow-emerald-600'>
          <div className='flex self-start items-center mx-2 w-9/12'>
            <div className="w-14 h-14">
            <img src={article.image} className='object-contain w-full h-full mb-2 rounded-sm'/>
            <p className='text-normal text-ellipsis overflow-hidden whitespace-nowrap'>{article.source.uri}</p>
            </div>
          </div>
          <div className='w-9/12 h-11/12 mr-1.5'>
            <Link href={article.url}>
            <h2 className='text-base font-medium'>{article.title}</h2>
            <p className='text-xs mx-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap font-normal'>{article.body}</p>
            </Link>
          </div>
        </div>
        )
    }

export default NewsCard