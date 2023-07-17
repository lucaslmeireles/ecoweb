import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export type  PostData = {
    id: string;
    title: string;
    content: string;
    tags: string;
    createdAt: string;
    updatedAt: string;
    author: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
    };
    Comment: {
        id: string;
        postId: string;
        content: string;
    }

}

const getPostById = async (id:string) => {
    const data = await fetch(`https://eco-api.vercel.app/post/${id}`, {next : {revalidate : 60*10}})
    const post = await data.json()
    return post.data
}



export default async function PostDetail({params} : {params: {id: string}}) {
    const post = await getPostById(params.id)
    return (
        <div className='flex flex-col align-middle items-center bg-slate-100'>
            <div className='flex flex-col w-4/6'>
                <div className="Image w-full h-72 rounded-lg pt-4 pb-4 ">
                    <img src='https://images.unsplash.com/photo-1688821999533-b0b719348555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=954&q=80' className='object-cover w-full h-full rounded-xl'/>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-slate-900 text-3xl">{post.title}</h1>
                    <span className="pt-2 font-normal text-base text-slate-700">{post.tags}, {post.createdAt}</span>
                </div>
            
            <div className="MetaData pt-3 mt-3">
                <div className="AuthorName flex  items-center justify-normal">
                    <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"></img>
                    <p className="px-2 text-slate-700 font-normal">{post.author.email}</p>
                </div>
                <div>
                    <img></img>
                </div>
            </div>
            <span className=" my-3 border-slate-950 border-[0.3px]"></span>
            <section className="Content pt-6 my-5 px-5">
                <p className="text-slate-900 text-base justify-normal">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </p>
            </section>
            </div>
            <section className="Comments w-4/6">
                <p>disqus</p>
            </section>
        </div>
    )
}