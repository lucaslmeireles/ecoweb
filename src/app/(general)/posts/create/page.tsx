'use client'
import React, { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";
import MyEditor from "../create/myEditor";
import { EditorState, convertToRaw } from "draft-js";
import { useSession } from "next-auth/react";
import draftToHtml from 'draftjs-to-html';
import { uploadImageCloudnary } from "@/app/data/cloudnaryService";
import CreatableSelect from 'react-select/creatable';
import { createPost, getTags } from "@/app/data";
import { Modal } from "@/components/modalSucess";
import {FiUpload} from 'react-icons/fi'
import { FileUploader } from "react-drag-drop-files";
import { Toggle } from "@/components/toggle";

const hashConfig = {
    trigger: '#',
    separator: ' ',
} 

const fileTypes = ["JPG", "PNG", "GIF"];

function CreatePost() {
    const {data : session} = useSession()
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [choices, setChoices] = useState([])
    const [options, setOptions] = useState()
    const [file, setFile] = useState(null);
    const [publisher, setPublisher] = useState(false);
    const [modal, setModal] = useState(false);
    const handleChange = (file) => {
    setFile(file);
    };
    useEffect(() => {
        const getData = async () =>{
            const tagsList = await getTags()
            setOptions([...tagsList, {value: 'novidade', label: 'Novidade', isFixed: true}])
            
        }
        getData()
    },[])

    const onEditorStateChange = (editorState : EditorState) => {
        setEditorState(editorState)
    }
    const handleToggle = () => {
        console.log(publisher)
        setPublisher(!publisher)
    }
    //https://www.cluemediator.com/how-to-get-selected-by-only-value-for-multi-select-in-react-select
    const onSelectedTag = (e) => {
        setChoices(Array.isArray(e) ? e.map(x => x.value.toLowerCase()) : [])
    }
    const sendPost =  async (event: React.FormEvent) => {
        event.preventDefault()
        const title = event.target.title.value as string
        const small_text = event.target.small_text.value as string
        const tags = choices
        const rawContentState = convertToRaw(editorState.getCurrentContent())
        const imgurl = await uploadImageCloudnary(file)
        
        const contentHtml = draftToHtml(
            rawContentState, 
            hashConfig
          );
        const body = {
            title,
            small_text,
            content: contentHtml,
            tags,
            cover_img: imgurl,
            status: publisher ? 'true' : 'false'
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
            if (response.statusCode === 201) setModal(true) //Mudar para 201
            console.log(response.statusCode)
            return  response

        
    }
    return (
        <>
        {modal && <Modal setModal={setModal} modal={modal}/>}
        <div className="m-4">
            <form method="post" onSubmit={sendPost}> 
            <div className="flex flex-row justify-between">
                <div className="flex py-4 flex-col">
                    <h1 className="text-neutral-950 font-semibold">Create your post</h1>
                    <p className="text-primary font-bold">Share with the world</p>
                </div>
            <button type="submit" className="bg-accent text-white w-1/12 h-8 rounded">Publisher</button>
            </div>
            <div className="flex flex-row w-full justify-between ">
                <div className="flex w-9/12 flex-col py-2  bg-backgorund border rounded border-border">
                    <div className="flex flex-row">
                        <div className="flex flex-col w-2/5 x-3 mx-2">
                            <label htmlFor="" className="text-base font-medium text-neutral-950">Title</label>
                            <input type="text" className="focus:outline-none focus:ring focus:border-[#5B8259] h-7 rounded bg-[#d4d4d4]" name="title" id="" />
                        </div>
                        <div className="flex flex-col w-3/5 px-3 mx-2">
                            <label htmlFor="" className="text-base font-medium text-neutral-950">Description</label>
                            <input type="text" name="small_text" className="focus:outline-none focus:ring focus:border-[#5B8259] h-7 rounded bg-[#d4d4d4]" id="" />
                        </div>
                    </div>
                    <div className="my-2 py-4 mx-2 h-6/12">
                    <label className="text-base font-medium text-neutral-950">Your text</label>
                    <MyEditor editorState={editorState} onEditorStateChange={onEditorStateChange}/>
                    </div>
                    <div className="text-primary mt-4 flex flex-col pb-5 justify-center items-center">
                        <p className="text-neutral-950 text-base font-medium py-3">Cover image</p>
                        <FileUploader 
                          handleChange={handleChange} 
                          name="file" 
                          types={fileTypes} 
                          multiple={false}
                          classes="text-primary"
                          >
                        </FileUploader>
                    </div>
                </div>
                <div className="w-3/12 mx-3 bg-secondary  p-3 border rounded border-border">
                    <div className="flex space-x-2 flex-row align-middle items-center">
                        <img className="w-12 h-12" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                        <p>AutorName</p>
                    </div>
                    <div className="my-4 py-2 border rounded border-border px-2">
                    <label className="text-base font-semibold text-neutral-950">Tags</label>
                    <CreatableSelect isMulti options={options} onChange={onSelectedTag}/>
                    </div>
                    <div className="flex flex-col">
                    <label>Publisher</label>
                    <Toggle toggled={publisher} setToggled={handleToggle}/>
                    </div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default CreatePost