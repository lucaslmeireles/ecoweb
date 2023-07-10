import React, { useState } from "react"
import { GridCard, GridCardProps } from "./gridcard"

type GridProps = {
    data: GridCardProps[]
}


export const Grid = (data: GridProps) => {
    //db pegar os posts daquela featured category
    return (
        <div className=' flex flex-col w-full p-16'>
            {data.data.map((post) => {
                return (
                    <div key={1+1} className=' flex flex-col w-full mb-8'>
                        <div className='grid-cols-4 grid col-span-4 gap-8 grid-flow-row'>
                            <GridCard title={post.title} category={post.category} image={post.image} key={post.id}/>
                        </div>
                    </div>
                )
            })}
        
        </div>
    )
}