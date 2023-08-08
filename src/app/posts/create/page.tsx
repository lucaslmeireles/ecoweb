'use client'
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import MyEditor from "./myEditor";
import { EditorState, convertToRaw } from "draft-js";
import { useSession } from "next-auth/react";
import draftToHtml from 'draftjs-to-html';
import { uploadImageCloudnary } from "@/app/data/cloudnaryService";
import CreatableSelect from 'react-select/creatable';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function CreatePost() {
    const {data : session} = useSession()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [modalVisible, setModalVisible] = useState(false)
    const [choices, setChoices] = useState([])
    const onEditorStateChange = (editorState : EditorState) => {
        setEditorState(editorState)
    }
    //https://www.cluemediator.com/how-to-get-selected-by-only-value-for-multi-select-in-react-select
    const onSelectedTag = (e) => {
        setChoices(Array.isArray(e) ? e.map(x => x.value.toLowerCase()) : [])
        console.log(choices)
    }
    const sendPost =  async (event: React.FormEvent) => {
        event.preventDefault()
        const title = event.target.title.value as string
        const small_text = event.target.small_text.value as string
        const tags = choices
        const rawContentState = convertToRaw(editorState.getCurrentContent())
        const imgurl = await uploadImageCloudnary(event.target.img.files[0])
        console.log(imgurl)
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
            small_text,
            content: contentHtml,
            tags,
            cover_img: imgurl
        }
        console.log(JSON.stringify(body))
        // da pra virar função , coloca a baseUrl
        const res = await fetch('https://eco-api.vercel.app/post/create', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Authorization" : 'Bearer ' +  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsImVtYWlsIjoidGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTE0MzAxMTAsImV4cCI6MTY5MTQzMTAxMH0.2VgNygjrWlzmgCbeHZ-4GtDhf2CUOubkGVdcl07MG5w',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        const reponse = await res.json()
        if (res.status == 200){
            setModalVisible(true)
        }
        
    }
    return (
        <>
        <main className="mx-5 px-3 my-3 py-2">
            <h1 className="text-2xl text-neutral-900 font-semibold py-1">Create your post</h1>
            <small className="text-teal-600 text-base font-normal  flex algin-middle items-center">Share with the world <BiWorld className="mx-1"/></small>
            <div className="flex flex-col mt-7">
                <form encType="multipart/form-data" className="flex flex-col w-11/12 mx-auto space-y-3" method="post" onSubmit={sendPost}>
                    <label>Title</label>
                    <input name="title" id="title" className="bg-slate-100 text-neutral-950 w-1/4 rounded-lg border-teal-400" type="text" />
                    <label>Description</label>
                    <input name="small_text" id="small_text" className="bg-slate-100 text-neutral-950 w-1/4 rounded-sm" type="text" />
                    <label>Share your post</label>
                    <MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
                    <label>Tags</label>
                    <CreatableSelect  onChange={(choice) => onSelectedTag(choice)} isMulti options={options} />
                    <label>Cover photo</label>
                    <input className="bg-slate-100 text-neutral-950" type="file" name="img" id="img" />
                    <button type="submit" disabled={modalVisible} className="bg-teal-500 rounded-md w-1/4 h-10  text-neutral-950 self-center hover:bg-teal-900 hover:text-blue-50">Publish</button>
                </form>
            </div>
        </main>
        </>
    )
}

export default CreatePost