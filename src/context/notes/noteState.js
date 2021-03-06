import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const host = 'http://localhost:5000';
  const notesinitial = []
  const [notes, setNotes] = useState(notesinitial)

  // get all notes
  const getAllNotes = async () => {
     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', 
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })

    const json = await response.json()
    // console.log(json)
    setNotes(json)
    
  }

  // Add function
  const addNote = async (title, description, tag) => { 
     // using fetch API here
     const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST', 
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag}) 
    })
    const json = await response.json()
    console.log(json)
    // const note = [{
    //   "_id": "61c09145162cdb189214f7b5465462",
    //   "user": "61bebe3c8852ced235a41ca6564654",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "timeStramp": "2021-12-20T14:20:53.917Z",
    //   "__v": 0
    // }]

    setNotes(notes.concat(json));
  }

  // delete function
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', 
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    })
    // eslint-disable-next-line
    const json = await response.json()

    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  // // edit function
  const editNote = async (id, title, description, tag) => {
    // using fetch API here
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({title,description,tag,id}) 
    })

    const json = await response.json()
    console.log(json)

    let newNote = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }

    setNotes(newNote)

  }


  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getAllNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;