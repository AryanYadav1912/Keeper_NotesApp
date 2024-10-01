import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import '../public/style.css'


const App = () => {

  const[notes, setNotes] = useState([]);

  const add = (newNote) =>{
    setNotes(prevNotes =>{
      return [...prevNotes, newNote]
    }) 

  }

  const Delete = (id) =>{
    setNotes(prevNotes =>{
      return prevNotes.filter((noteItem, index) =>{
        return index !== id;
      })
    })

  }

  
  return (
    <>
      <Header />
      <CreateArea 
      onAdd={add}/>
      {notes.map((noteItem,index) => {
        return (
          <Note
            id = {index}
            key = {index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete = {Delete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
