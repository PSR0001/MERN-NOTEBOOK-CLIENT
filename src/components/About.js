import React,{useContext} from 'react'
import noteContext from '../context/notes/noteState'

export const About = () => {
    let a = useContext(noteContext)

    return (
        <div>
            this is Avout  {a.name}
        </div>
    )
}
