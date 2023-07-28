'use client'
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import dynamic from "next/dynamic";
import MyEditor from "./myEditor";
import { EditorState, convertToRaw } from "draft-js";



export default function CreatePost() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState : EditorState) => {
        console.log(editorState)
        setEditorState(editorState)
    }
    const sendPost =  async (event: React.FormEvent) => {
        event.preventDefault()
        const title = event.target.title.value as string
        const content = editorState.getCurrentContent()
        const contentJson = JSON.stringify(convertToRaw(content))
        const body = {
            title,
            small_text: 'oi',
            content: contentJson
        }
        const res = await fetch('https://eco-api.vercel.app/post/create', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTAxMTc1OTYsImV4cCI6MTY5MDExODQ5Nn0.AXHN2bLh4qE0PjmME_boky0_tXsRFf6UavCruPaX0ww',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        const reponse = await res.json()
        console.log(reponse)
    }
    return (
        <main className="mx-5 px-3 my-3 py-2">
            <h1 className="text-2xl text-neutral-900 font-semibold py-1">Create your post</h1>
            <small className="text-teal-600 text-base font-normal  flex algin-middle items-center">Share with the world <BiWorld className="mx-1"/></small>

            <div className="flex flex-col mt-7">
                <form className="flex flex-col w-11/12 mx-auto space-y-3" method="post" onSubmit={sendPost}>
                    <label>Title</label>
                    <input name="title" id="title" className="bg-slate-100 text-neutral-950 w-1/4" type="text" />
                    <label>Tags</label>
                    <input name="tags" id="tags" className="bg-slate-100 text-neutral-950 w-1/4 " type="text" />
                    <label>Share your post</label>
                    <MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
                    <label>Cover photo</label>
                    <input className="bg-slate-100 text-neutral-950" type="file" name="" id="" />
                    <button type="submit" className="bg-teal-500 rounded-md w-1/4 h-10  text-neutral-950 self-center hover:bg-teal-900 hover:text-blue-50">Publish</button>
                </form>
            </div>
        </main>
    )
}
