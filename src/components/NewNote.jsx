import React from "react"

function NewNote(props){
    return <div className="new-note-container">
        <form>
            <input
            onChange={props.textInput} 
            className="new-note-title" 
            type="text" 
            name="title" 
            placeholder="Title"
            value={props.title} />

            <textarea
            onChange={props.textInput} 
            className="new-note-content" 
            name="content" 
            placeholder="Take a note..."
            value={props.content} 
            rows="4"></textarea>

            <button onClick={props.addNewNote} >Add</button>
        </form>
    </div>
}

export default NewNote