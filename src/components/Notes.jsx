import React from 'react'
import Note from './Note'

function Notes(props) {
    return <div>
        {props.notes.map((item,index) => {
            return <Note key={index}
                title={item.title}
                body={item.content}
            />
        })}
    </div>
}

export default Notes