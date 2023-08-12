import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import type {ComponentType} from 'react';

type EditorWyiwgt = {
    editorState: EditorState;
    onEditorStateChange: (EditorState) => EditorState;
    toolbarClassName: string;
    editorClassName: string;
}

//tentar resolver esse BO
const Editor: EditorWyiwgt = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor),{
    ssr: false
})


function MyEditor({editorState, onEditorStateChange}) {
    return (
        <div className='bg-secondary py-4'>
            <Editor 
            editorState = {editorState}
            toolbarClassName='flex sticky top-0 z-50 justify-center mx-auto'
            onEditorStateChange = {onEditorStateChange}
            editorClassName = 'bg-white shadow-lg h-full mx-auto mt-2'
            />
        </div>
    )
}

export default MyEditor