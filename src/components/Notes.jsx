import React from 'react'
import Note from './Note'

function Notes(props) {

    

    return <div>
        {props.notes.map((item,index) => {
            return <Note key={index}
                id={index}
                title={item.title}
                body={item.content}
                onDelete={props.handleDelete}
            />
        })}
    </div>
}

export default Notes