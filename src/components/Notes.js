import React, { useContext, useEffect, useRef,useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Addnote from './Addnote'
import Noteitens from './Noteitens';

export const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getAllNotes,editNote } = context;
    const [note, setNote] = useState({title : "", description: "", tag: "" })

    useEffect(() => {
        getAllNotes()
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote(currentNote)
    }

    // -----------------
    const addNoteClickme = (e)=>{

        editNote(note._id,note.title,note.description,note.tag)
        e.preventDefault()
        refClose.current.click()
    }
    
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <>
            <Addnote />
            {/* bootsrap 5 */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* same form here */}
                            <div className='container my-3'>
                                <h2>Add a Note</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">TITLE</label>
                                        <input type="text" className="form-control" minLength={4} value={note.title} name='title'   onChange={onChange} id="etitle" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <input type="text" value={note.description} minLength={5} onChange={onChange}  name='description' className="form-control" id="edescription" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">TAG</label>
                                        <input type="text" minLength={3} onChange={onChange} value={note.tag} name='tag'  className="form-control" id="etag" />
                                    </div>
                                  
                                </form>
                            </div>
                            {/* ------------- */}
                        </div>
                        <div className="modal-footer">
                            <button type="button"  ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" disabled={note.title.length <=3||note.description.length <=4||note.tag.length <=2 } onClick={addNoteClickme}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3'>
                <h2>Add a Note</h2>
                <dix className="container">
                    {notes.length === 0 && 'No notes to Display'}
                </dix>
                {notes.map((note) => {
                    return <Noteitens key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>

    )
}
