import LikedZone from "@/components/likedZone";
import DisqusComments from "./DisqusComponent";
import moment from "moment";
import { getPostById } from "@/app/data";
import { PostData } from "@/types/dataFunctions.type";




const convertDate = (date: string) => {
     return moment(date).format('LL');    
}

const mapTags = (tags : {name:string}[]) => {
    return tags.map((tag: {name : string}) => (<span  key={tag.name} className="px-1 text-slate-900 font-medium">#{tag.name}</span>))
}

export default async function PostDetail({params} : {params: {id: string}}) {
    
    const post = await getPostById(params.id) as PostData

    if (!post.tags){
        return <div>Carregando</div>
    }

    return (
        <div className='flex flex-col align-middle items-center h-full bg-slate-100'>
            <div className='flex flex-col w-4/6'>
                <div className="Image w-full h-72 rounded-lg pt-4 pb-4 ">
                    <img src={post.cover_img || 'https://images.unsplash.com/photo-1690460550070-e73402127f11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80s'} className='object-cover w-full h-full rounded-xl'/>
                </div>
                <div className="flex flex-col">
                    <h1 className="font-semibold text-slate-900 text-3xl">{post.title}</h1>
                    <span className="pt-2 font-normal text-base text-slate-700">{mapTags(post.tags)}, {convertDate(post.createdAt)}</span>
                </div>
            
            <div className="MetaData pt-3 mt-3 flex flex-row justify-between align-middle items-center">
                <div className="AuthorName flex  items-center justify-normal">
                    <img className="w-12 h-12 rounded-full" src={post.author.avatar} alt={`profile-pic of ${post.author.firstName}`} ></img>
                    <p className="px-2 text-slate-700 font-normal">{post.author.firstName} {post.author.lastName}</p>
                </div>
                <LikedZone id={post.id as number}/>
            </div>
            <span className=" my-3 border-slate-950 border-[0.3px]"></span>
            <section dangerouslySetInnerHTML={{__html: post.content}} className="Content pt-6 my-5 px-5 text-slate-900 text-base justify-normal">
                
            </section>
            </div>
            <span className="w-9/12 h-1 bg-slate-700 mb-4"></span>
            <section className="Comments w-4/6">
                <DisqusComments id={post.id} title={post.title}/>
            </section>
        </div>
    )
}