import { GridCard, GridCardProps } from "./gridcard"

export type GridPostsProps = {
        posts: GridCardProps[];
}


export const GridPosts = (data: GridPostsProps) => {
    const {posts} = data
    console.log(posts)
    return (
            <div className='grid-cols-4 grid col-span-4 gap-8 grid-flow-row'>
                {posts.map((post => {
                    return (
                        <GridCard title={post.title} category={post.category} image={post.image} key={post.id}/>
                    )
                }))}
            </div>
    )
}