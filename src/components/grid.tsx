import React, { useState } from "react"
import { GridCard, GridCardProps } from "./gridcard"

type GridProps = {
    data: GridCardProps[]
}


export const Grid = (data: GridProps) => {
    //db pegar os posts daquela featured category
    return (
        <div className=' flex flex-col w-full p-6'>
            {data.data.map((post) => {
                return (
                    <div key={post.id} className=' flex flex-col w-full mb-8'>
                        <div className='grid-cols-4 grid col-span-4 gap-8 grid-flow-row'>
                            <GridCard id={post.id}title={post.title} tags={post.tags} image={post.image} key={post.id}/>
                        </div>
                    </div>
                )
            })}
        
        </div>
    )
}