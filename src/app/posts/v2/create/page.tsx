'use client'
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import MyEditor from "./myEditor";
import { EditorState, convertToRaw } from "draft-js";
import { useSession } from "next-auth/react";
import draftToHtml from 'draftjs-to-html';
import { uploadImageCloudnary } from "@/app/data/cloudnaryService";
import CreatableSelect from 'react-select/creatable';
import { createPost, getTags } from "@/app/data";
import { Modal } from "@/components/modalSucess";


const hashConfig = {
    trigger: '#',
    separator: ' ',
} 

function CreatePost() {
    const {data : session} = useSession()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [choices, setChoices] = useState([])
    const options =[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

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
                          "Authorization" : 'Bearer ' +  session?.access_token,
                          "Content-Type": "application/json",
                      },
                      body: JSON.stringify(body)
                  })
            const response = await res.json()
            return  response
        
    }
    return (
        <>
        <div className="m-4">
            <form>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <h1 className="text-neutral-950 font-semibold">Create your post</h1>
                    <p className="text-primary font-bold">Share with the world</p>
                </div>
            <button type="submit" className="bg-accent text-white w-1/12 h-8 rounded">Publisher</button>
            </div>
            <div className="flex flex-row w-full justify-between ">
                <div className="flex w-9/12 flex-col py-2  bg-backgorund border rounded border-border">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-2/5 x-3 mx-2">
                            <label htmlFor="" className="text-base font-semibold text-neutral-950">Title</label>
                            <input type="text" className="focus:outline-none focus:ring focus:border-[#5B8259] h-7 rounded bg-[#C6D8C5]" name="title" id="" />
                        </div>
                        <div className="flex flex-col w-3/5 px-3 mx-2">
                            <label htmlFor="" className="text-base font-semibold text-neutral-950">Description</label>
                            <input type="text" name="small_text" className="focus:outline-none focus:ring focus:border-[#5B8259] h-7 rounded bg-[#C6D8C5]" id="" />
                        </div>
                    </div>
                    <div className="my-2 py-4 mx-2 h-6/12">
                    <label className="text-base font-semibold text-neutral-950">Your text</label>
                    <MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
                    </div>
                    <div className="w-40 h-40 outline-dashed outline-primary">
                        <p>Cover image</p>
                    </div>
                </div>
                <div className="w-3/12 mx-3">
                    <div className="flex flex-row align-middle items-center">
                        <img className="w-12 h-12" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                        <p>AutorName</p>
                    </div>
                    <div className="my-4 py-2">
                    <label className="text-base font-semibold text-neutral-950">Tags</label>
                    <CreatableSelect  isMulti options={options} />
                    </div>
                    <switch className="text-base font-semibold text-neutral-950">Public</switch>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default CreatePost