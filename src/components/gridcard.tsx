import Image from "next/image";
import Link from "next/link";
import {AiOutlineArrowRight} from 'react-icons/ai'

export type GridCardProps = {
        id:number;
        title: string;
        tags: string;
        cover_img: string;
}


export const GridCard = (data: GridCardProps) => {
    const {title, tags,id} = data
    const cover_img = data.cover_img || 'https://images.unsplash.com/photo-1691525737402-e7a447ec2be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    return (
        <div className='flex flex-col overflow-hidden h-56 w-56 bg-slate-300 rounded-lg relative shadow hover:shadow-lg hover:shadow-slate-600 transition-all'>
            <Image src={cover_img} width={256} height={256} alt="" className='h-full w-full object-cover opacity-70'/>
            <div className=' flex justify-between align-middle items-center bottom-0 w-full h-16 absolute'>
                <div className=' flex flex-col'>
                    <p className='font-semibold ml-2 mt-1 text-neutral-950 '>
                    {title}
                    </p>
                    
                </div>
                    
                <Link href={`/posts/${id}`} >
                <div className='w-20 h-5 bg-accent rounded-md mr-2 mt-1 flex flex-row items-center '>
                    <p className="text-secondary text-xs px-1 font-bold">Ler Mais</p>
                    <AiOutlineArrowRight className='text-secondary'/>
                </div>
                </Link>
        </div>
        </div>
    )
}
