import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitens from './Noteitens';

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes} = context;
    return (
        <div className='row my-3'>
        <h2>Add a Note</h2>
        {notes.map((note)=>{
            return <Noteitens key={note._id} note={note} />
        })}
        </div>
    )
}
