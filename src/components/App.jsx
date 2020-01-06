import React, {useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import NewNote from './NewNote'
import Notes from './Notes';

function App() {
  const [notes , setNotes] = useState([{title: "Hello", content: "Lool"}])
  
  const [newNote, setNewNote] = useState({
    title: '',
    content: ''
  })
  
  function handleAdd(event) {
    setNotes((prevNotes)=>{
      return [...prevNotes, newNote]
    })

    setNewNote({
      title: '',
      content: ''
    })
    event.preventDefault()
  }

  function handleWriting(event){
    const {name, value} = event.target
    
    setNewNote((prevValue)=>{
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleDelete(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((item, index)=>{
        return index !== id
      })
    })
}
  
  return (
    <div className="App">
      <Header />
      <NewNote
      textInput={handleWriting} 
      addNewNote={handleAdd}
      title={newNote.title}
      content={newNote.content} />
      <Notes handleDelete={handleDelete}
      notes={notes} />
      <Footer />
    </div>
  );
}

export default App;
