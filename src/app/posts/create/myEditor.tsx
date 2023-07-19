import { useState } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


function MyEditor() {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
      );
    const handleChange = (state) => {
        setEditorState(state)
    }
    return (
    <Editor editorState={editorState} onChange={handleChange} />
    )
}

export default MyEditor