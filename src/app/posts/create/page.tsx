'use client'
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import dynamic from "next/dynamic";
import MyEditor from "./myEditor";


export default function CreatePost() {
    const sendPost =  async (e: React.FormEvent) => {
        e.preventDefault()
        const title = e.target.title.value
        const tags = e.target.tags.value
    
    }
    return (
        <main className="mx-5 px-3 my-3 py-2">
            <h1 className="text-2xl text-neutral-900 font-semibold py-1">Create your post</h1>
            <small className="text-teal-600 text-base font-normal  flex algin-middle items-center">Share with the world <BiWorld className="mx-1"/></small>

            <div className="flex flex-col mt-7">
                <form className="flex flex-col bg-slate-100 w-11/12 mx-auto space-y-3"action="" method="post" onSubmit={sendPost}>
                    <label>Title</label>
                    <input name="title"className="bg-slate-100 text-neutral-950" type="text" />
                    <label>Tags</label>
                    <input name="tags"className="bg-slate-100 text-neutral-950" type="text" />
                    <label>Share your post</label>
                    <MyEditor/>
                    <label>Cover photo</label>
                    <input className="bg-slate-100 text-neutral-950" type="file" name="" id="" />
                    <button type="submit" className="bg-teal-600 w-1/4 h-10 right-0 text-neutral-950">Publish</button>
                </form>
            </div>
        </main>
    )
}
