import { NextResponse } from "next/server";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

async function fetcher() {
    const response = await fetch()
}

export default function SearchInput() {
    return (
        <>
        <form className='flex justify-between align-center place-items-centers w-1/4 h-7' >
        <input type='text' className='text-teal-50 bg-slate-600 px-3 w-full h-7 rounded-lg text-base focus:border-teal-300 shadow-md placeholder:text-teal-300 ' placeholder='Buscar'/>
        </form>
        </>
    )
}