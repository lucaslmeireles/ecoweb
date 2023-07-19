'use client'
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

export default function SearchInput() {
    const [searchQuerry, setSearchQuerry] = useState('')
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }
    return (
        <>
        <form className='flex justify-between px-3 align-center place-items-centers w-1/4 h-7 bg-slate-600 rounded-lg'>
        <input type='text' value={searchQuerry} onChange={(e) => setSearchQuerry(e.target.value)} 
        className='text-teal-50 bg-slate-600 text-base focus:border-teal-300 shadow-md placeholder:text-teal-300 ' placeholder='Buscar'/>
        </form>
        </>
    )
}