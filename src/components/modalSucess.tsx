import {AiOutlineCloseCircle} from 'react-icons/ai'

export function Modal({setModal, modal}){
    return (
        <>
        <div className="flex absolute w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-slate-500 bg-opacity-70">
            <div className=" flex w-4/12 h-64 relative m-auto bg-white rounded">
                    <AiOutlineCloseCircle className="absolute top-1 right-1 text-2xl text-primary cursor-pointer" onClick={() => setModal(!modal)}/>
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <p className="font-bold text-center text-primary text-lg">Sucesso!🎉🎉🎉</p>
                    <span className="font-medium text-center text-accent text-sm" >Esse é so o começo, continue compartilhando suas opniões com o mundo!</span>
                </div>
            </div>
        </div>
        </>
    )
}