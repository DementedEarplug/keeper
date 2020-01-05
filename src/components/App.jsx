import React from 'react';
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import NewNote from './NewNote'

// Data
import notes from '../data/notes'

function App() {
  return (
    <div className="App">
      <Header />
      <NewNote />
      {notes.map((item)=>{
        return <Note key={item.key}
          title={item.title}
          body={item.content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
