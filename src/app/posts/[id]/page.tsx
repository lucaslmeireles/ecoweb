const getPostById = async (id:string) => {
    const data = await fetch(`https://eco-api.vercel.app/post/${id}`)
    const post = await data.json()
    return post.data
}



export default async function PostDetail({params} : {params: {id: string}}) {
    const post = await getPostById(params.id)
    return (
        <div className="flex w-full h-full border bg-slate-300">
            <p>{post.title}</p>
        </div>
    )
}