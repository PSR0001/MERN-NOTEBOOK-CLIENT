import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{

    const notesinitial = [
        {
          "_id": "61c08b670fe88f1d087ce050",
          "user": "61bebe3c8852ced235a41ca6",
          "title": "hi my title",
          "description": "hi this is my description 😁😁😀",
          "tag": "personal",
          "timeStramp": "2021-12-20T13:55:51.570Z",
          "__v": 0
        },
        {
          "_id": "61c09145162cdb189214f7b5",
          "user": "61bebe3c8852ced235a41ca6",
          "title": "this is updated note",
          "description": "i am upf=dating the notes",
          "tag": "personal",
          "timeStramp": "2021-12-20T14:20:53.917Z",
          "__v": 0
        },
        {
          "_id": "61c0914598798162cdb189214f7b5",
          "user": "61bebe35412c8852ced235a41ca6",
          "title": "this is updated note",
          "description": "i am upf=dating the notes",
          "tag": "personal",
          "timeStramp": "2021-12-20T14:20:53.917Z",
          "__v": 0
        },
        {
          "_id": "61c09145321162cdb189214f7b5",
          "user": "61bebe3c1238852ced235a41ca6",
          "title": "this is updated note",
          "description": "i am upf=dating the notes",
          "tag": "personal",
          "timeStramp": "2021-12-20T14:20:53.917Z",
          "__v": 0
        },
        {
          "_id": "61c09145162c5646546db189214f7b5",
          "user": "61bebe3c8846546552ced235a41ca6",
          "title": "this is updated note",
          "description": "i am upf=dating the notes",
          "tag": "personal",
          "timeStramp": "2021-12-20T14:20:53.917Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesinitial)

      // Add function
      const addNote = (title,description,tag)=>{
        // TODO : fetching all notes 

        const note = [    {
          "_id": "61c09145162cdb189214f7b5465462",
          "user": "61bebe3c8852ced235a41ca6564654",
          "title": title,
          "description": description,
          "tag": tag,
          "timeStramp": "2021-12-20T14:20:53.917Z",
          "__v": 0
        }]

        setNotes(notes.concat(note));
      }
      // delete function
      const deleteNote = (id)=>{
        const newNotes = notes.filter((note)=>{
          return note._id !==id
        })
        setNotes(newNotes)
      }
      // // edit function
      const editNote = ()=>{

      }


    return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;