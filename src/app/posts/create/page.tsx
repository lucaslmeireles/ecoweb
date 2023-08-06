'use client'
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import MyEditor from "./myEditor";
import { EditorState, convertToRaw } from "draft-js";
import { useSession } from "next-auth/react";
import draftToHtml from 'draftjs-to-html';


function CreatePost() {
    const {data : session} = useSession()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState : EditorState) => {
        console.log(editorState)
        setEditorState(editorState)
    }
    const sendPost =  async (event: React.FormEvent) => {
        event.preventDefault()
        const title = event.target.title.value as string
        const rawContentState = convertToRaw(editorState.getCurrentContent())
        const hashConfig = {
            trigger: '#',
            separator: ' ',
          } 
        const contentHtml = draftToHtml(
            rawContentState, 
            hashConfig
          );
        const body = {
            title,
            small_text: 'oi',
            content: contentHtml,
            tags: ['oi'],
        }
        const res = await fetch('https://eco-api.vercel.app/post/create', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Authorization" : 'Bearer ' + session?.access_token,
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
                    <input name="title" id="title" className="bg-slate-100 text-neutral-950 w-1/4 rounded-sm" type="text" />
                    <label>Tags</label>
                    <input name="tags" id="tags" className="bg-slate-100 text-neutral-950 w-1/4 roundend-sm " type="text" />
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

export default CreatePost