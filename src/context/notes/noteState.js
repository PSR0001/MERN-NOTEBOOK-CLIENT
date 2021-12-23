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
        }
      ]

      const [notes, setNotes] = useState(notesinitial)

    return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;