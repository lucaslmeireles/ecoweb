import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';

type EditorWyiwgt = {
    editorState: EditorState;
    toolbarClassName: string;
    editorClassName: string;
}

//tentar resolver esse BO
const Editor: EditorWyiwgt = dynamic(() => import('react-draft-wysiwyg').then(module => module.Editor),{
    ssr: false
})


function MyEditor({editorState}) {
    return (
        <div className='bg-slate-50 py-4'>
            <Editor 
            editorState = {editorState}
            toolbarClassName='flex sticky top-0 z-50 justify-center mx-auto'
            editorClassName = 'bg-white shadow-lg max-w-5xl'
            />
        </div>
    )
}
