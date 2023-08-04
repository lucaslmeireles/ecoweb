import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'

export type GridCardProps = {
        id:number;
        title: string;
        tags: string;
        cover_img: string;
}


export const GridCard = (data: GridCardProps) => {
    const {title, tags, cover_img,id} = data
    console.log(data)
    return (
        <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg hover:shadow-slate-600 transition-all'>
            <img src={cover_img} className='h-full w-full object-cover opacity-70'/>
            <div className=' flex justify-between align-middle items-center bottom-0 w-full h-16 absolute'>
                <div className=' flex flex-col'>
                    <p className='font-semibold ml-2 mt-1 '>
                    {title}
                    </p>
                    <small className='font-light text-xs ml-2 '>
                    {tags}
                    </small>
                </div>
                    
                <Link href={`/posts/${id}`} >
                <div className='w-20 h-5 bg-lime-100 rounded-md mr-2 mt-1 flex flex-row items-center '>
                    <p className="text-lime-700 text-xs px-1 font-bold">Ler Mais</p>
                    <AiOutlineArrowRight className='text-lime-900'/>
                </div>
                </Link>
        </div>
        </div>
    )
}
