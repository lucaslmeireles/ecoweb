import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'

export type GridCardProps = {
        id:number;
        title: string;
        tags: string;
        image: string;
}


export const GridCard = (data: GridCardProps) => {
    const {title, tags, image,id} = data
    return (
        <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg'>
            <img src={image} className='h-full w-full object-cover'/>
            <div className=' flex justify-between align-middle items-center bottom-0 w-full h-16 absolute'>
                <div className=' flex flex-col'>
                    <p className='font-semibold ml-2 mt-1 '>
                    {title}
                    </p>
                    <small className='font-light text-xs ml-2 '>
                    {tags}
                    </small>
                </div>
                <div className='h-10 w-10 mr-2 hover:border rounded-full border-slate-300 shadow-inner flex items-center justify-center'>
                    <Link href={`/posts/${id}`} >
                    <AiOutlineArrowRight/>
                    </Link>
                    
                </div>
        </div>
        </div>
    )
}
