'use client'

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";


export default function SearchInput() {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const redirect = (e : React.EventHandler) => {
        e.preventDefault()
        const search = e.target.search.value
        setSearch(search)
        router.push(`/posts/search?q=${search}`,  )
    }
    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <>
        <form  onSubmit={redirect} className='flex  place-self-center justify-between align-center place-items-centers w-1/4 h-7' method="post" >
        <div className="flex flex-row bg-slate-600 rounded-lg px-3">
        <input  onChange={handleOnChange} value={search} type='text' id="search" className='text-teal-50  px-3 w-full bg-slate-600 h-7  text-base focus:border-none shadow-md placeholder:text-teal-300 ' placeholder='Buscar'/>
            <button type="submit">
            <BiSearchAlt className='text-teal-50'/>
            </button>
        </div>
        </form>  
        </>
    )
}