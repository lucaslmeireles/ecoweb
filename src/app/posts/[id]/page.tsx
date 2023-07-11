const getPostById = async (id:string) => {
    const data = await fetch(`https://eco-api.vercel.app/post/${id}`)
    const post = await data.json()
    return post.data
}



export default async function PostDetail({params} : {params: {id: string}}) {
    const post = await getPostById(params.id)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='Container h-screen w-screen flex flex-col justify-center items-center'>
                <div className="Image w-full h-20 rounded-lg p-4">
                    <img src='https://images.unsplash.com/photo-1688821999533-b0b719348555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=954&q=80' className='object-cover w-full h-full'/>
                </div>
            </div>
            <div className="MetaData border-t-slate-700 border flex w-full justify-around ">
                <div className="AuthorName flex align midle w-10">
                    <img className="w-5 h-5 rounded-full"></img>
                    <p className="text-slate-700 font-semibold">{post.author.firstName}</p>
                </div>
            </div>
        </div>
    )
}