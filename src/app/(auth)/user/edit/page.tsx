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
        <main className="flex justify-center" >
            <div className="flex align-middle">
                <form onSubmit={handleSubmit} method="post" className="">
                    <h1 className="text-accent font-semibold text-xl my-2">Edite seus dados</h1>
                    <label htmlFor="" className="text-accent font-semibold text-lg my-2">Nome</label>
                    <input type="text" name="nome" id="nome" className="rounded bg-slate-300 w-full" />
                    <label htmlFor="" className="text-accent font-semibold text-lg my-2">Sobrenome</label>
                    <input type="text" name="sobrenome" id="sobrenome" className="rounded bg-slate-300 w-full" />
                    <label htmlFor="" className="text-accent font-semibold text-lg my-2">Bio</label>
                    <input type="text" name="bio" id="bio" className="rounded bg-slate-300 w-full mb-4" />
                    <FileUploader 
                          handleChange={handleChange} 
                          name="file" 
                          types={fileTypes} 
                          multiple={false}
                          classes="text-primary"
                          >
                        </FileUploader>

                    <button type="submit" className="bg-accent text-white mt-3 p-3 rounded hover:bg-primary">Enviar</button>
                </form>
                <div className="w-24 max-h-24">
                    <img  className="rounded-full" src={session?.user.avatar || "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"}></img>
                </div>
            </div>
            <footer>oi</footer>
        </main>
    )
}