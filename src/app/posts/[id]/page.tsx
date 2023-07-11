const getPostById = async (id:string) => {
    const data = await fetch(`https://eco-api.vercel.app/post/${id}`)
    const post = await data.json()
    return post.data
}



export default async function PostDetail({params} : {params: {id: string}}) {
    const post = await getPostById(params.id)
    return (
        <div className="w-screen h-screen relative bg-white flex-col justify-start items-start inline-flex">
        <div className="w-screen h-screen relative">
            <div className="w-96 h-20 left-0 top-0 absolute bg-white shadow" />
            <div className="w-screen h-11 left-[17.41px] top-[13px] absolute text-teal-700 text-4xl font-medium">ECO</div>
        </div>
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/47x47" />
        <img className="w-96 h-72 rounded--2xl shadow" src="https://via.placeholder.com/1045x276" />
        <div className="text-black text-3xl font-semibold">{post.title}</div>
        <div>
            <span className="text-black text-base font-normal">{post.tags}</span>
            <span className="text-black text-base font-normal">{post.createdAt}</span>
            </div>
        <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/47x47" />
        <div className="w-7 h-6 relative">
            <img className="w-7 h-7 left-[-0.06px] top-[-0.04px] absolute" src="https://via.placeholder.com/28x26" />
        </div>
        <div className="text-black text-base font-normal">{post.author.name}</div>
        <div className="w-96 h-96 text-black text-xl font-normal">
            <p>{post.content}</p>
        </div>
</div>
    )
}