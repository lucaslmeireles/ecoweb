import React from "react"
import { GridCard, GridCardProps } from "./gridcard"
import { GridPosts, GridPostsProps } from "./gridPost"

type GridProps = {
    featuredCategory: string[];
    posts: GridCardProps[];
}

export const Grid = (data: GridProps) => {
    const {featuredCategory, posts} = data
    return (
        <div className=' flex flex-col w-full p-16'>
            {featuredCategory.map((category) => {
                return (
                    <div key={1+1} className=' flex flex-col w-full mb-8'>
                        <h2 key={1+1} className='text-2xl font-semibold pb-6'>{category}</h2>
                        <GridPosts posts={posts} key={1+1}/>
                    </div>
                )
            })}
        
        </div>
    )
}