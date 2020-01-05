import React from "react"

function NewNote(){
    return <div className="new-note-container">
        <form>
            <input 
            className="new-note-title" 
            type="text" 
            name="newNoteTitle" 
            placeholder="Title" />

            <textarea 
            className="new-note-content" 
            name="newNoteContent" 
            placeholder="Take a note..." 
            rows="4"></textarea>
            <button>Add</button>
        </form>
    </div>
}

export default NewNote