import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

const Noteitens = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context;
    const { note,updateNote } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className='d-flex'>
                        <img className='imageClass' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-gradient-kiranshastry.png" alt='delete' onClick = {()=>{deleteNote(note._id)}}/>
                        <img className='imageClass' src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-edit-miscellaneous-kiranshastry-gradient-kiranshastry.png" onClick={()=>{updateNote(note)}} alt='Edit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noteitens
