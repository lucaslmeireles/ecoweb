import { GridCardProps } from "@/types/dataFunctions.type"
import { GridCard } from "./gridcard"

type GridProps = {
    data: {
        id: string,
        name: string,
        posts: GridCardProps[]
    } []
}


export const Grid = (data: GridProps) => {
    //db pegar os posts daquela featured category
    if (data.data.length === 0) {
        <>
            <div className=' flex flex-col w-full mb-8'>
                <p>Wow, looks empty here....</p>
            </div>
        </>
    }
    return (
        <div className=' flex flex-col w-full p-6'>
            {data.data.map((tag) => {
                return (
                    <div key={tag.id} className=' flex flex-col w-full mb-8'>
                        <h2 className="text-3xl font-semibold pb-3">#{tag.name}</h2>
                        <div className='grid-cols-4 grid col-span-3 gap-10 grid-flow-row'>
                            {tag.posts.length!=0 && tag.posts.map((post) => {
                                return (
                                    <GridCard id={post.id}  title={post.title} cover_img={post.cover_img} key={post.id}/>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        
        </div>
    )
}

//como vamos fazer aqui, preciso que me retorne por tags agrupadas,
// e dps eu faço um map por tag e renderizo cada post com aquela tag