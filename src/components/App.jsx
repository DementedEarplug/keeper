import React from 'react';
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import notes from '../data/notes'

function App() {
  return (
    <div className="App">
      <Header />
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
