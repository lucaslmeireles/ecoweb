'use client'

import { useSession } from "next-auth/react"
import { FileUploader } from "react-drag-drop-files"
import { useState } from "react"
import { uploadImageCloudnary } from "@/app/data/cloudnaryService";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function Edit(){
    const {data : session} = useSession()
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        };

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault()
        const nome = e.target.nome.value || session?.user.firstName
        const sobrenome = e.target.sobrenome.value || session?.user.lastName
        const bio = e.target.bio.value || session?.user.bio
        const avatar = await uploadImageCloudnary(file) || session?.user.avatar

        const body = {
            firstName : nome,
            lastName: sobrenome,
            bio,
            avatar
        }
        console.log(body)
        const res = await fetch('https://eco-api.vercel.app/users/edit/myaccount', { 
            method: 'PUT',
            headers: {
                "Authorization" : 'Bearer ' +  session?.access_token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })

        const data = await res.json()
    }

    return (
        <main className="h-max mx-4" >
            <div className="w-60 h-96">
                <h1 className="text-accent font-semibold text-xl my-2">Edite seus dados</h1>
                <form onSubmit={handleSubmit} method="post" className="bg-slate-300">
                    <label htmlFor="" className="text-accent font-semibold text-lg my-2">Nome</label>
                    <input type="text" name="nome" id="nome" className="rounded bg-slate-300 w-full" />
                    <label htmlFor="" className="text-accent font-semibold text-lg my-2">Sobrenome</label>
                    <input type="text" name="sobrenome" id="sobrenome" className="rounded bg-slate-300 w-full" />
                    <label htmlFor="" className="text-accent font-semibold text-lg my-2">Bio</label>
                    <input type="text" name="bio" id="bio" className="rounded bg-slate-300 w-full" />
                    <FileUploader 
                          handleChange={handleChange} 
                          name="file" 
                          types={fileTypes} 
                          multiple={false}
                          classes="text-primary"
                          >
                        </FileUploader>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            <footer>oi</footer>
        </main>
    )
}