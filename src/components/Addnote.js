import React,{useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext'

const Addnote = () => {
   const context = useContext(NoteContext)
   const {addNote} = context;

    const [note, setNote] = useState({title : "", description: "", tag: "" })

    const addNoteClickme = (e)=>{
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <div className='container my-3'>
        <h2>Add a Note</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">TITLE</label>
                <input type="text" className="form-control" name='title' onChange={onChange} id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" onChange={onChange} name='description' className="form-control" id="description" />
            </div>
            <div className="mb-3">
                <label htmlFor="tag" className="form-label">TAG</label>
                <input type="text" onChange={onChange} name='tag' className="form-control" id="tag" />
            </div>
            <button type="submit" onClick={addNoteClickme} className="btn btn-primary">Add Note</button>
        </form>
    </div>
    )
}

export default Addnote
