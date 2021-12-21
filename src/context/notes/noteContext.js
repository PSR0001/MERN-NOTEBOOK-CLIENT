import React from "react";
import NoteContext from "./noteState";

const NoteState = (props)=>{

    const states = {
        "name": "Partha Singha Roy",
        "class": "2nd year"
    }

    return(
    <NoteContext.Provider value={states}>
        {props.children}
    </NoteContext.Provider>
    )
}

export default NoteState;