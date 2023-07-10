export const getPostById = async (id:string) => {
    const data = await fetch(`https://eco-api.vercel.app/post/${id}`)
    const post = await data.json()
    return post.data
}



export default async function PostDetail({params} : {params: {id: string}}) {
    const post = await getPostById(params.id)
    return (
        <>
        <p>{post.title}</p>
        <p>{post.author.email}</p>
        <p>{post.small_text}</p>
        <p>{post.content}</p>
        </>
    )
}