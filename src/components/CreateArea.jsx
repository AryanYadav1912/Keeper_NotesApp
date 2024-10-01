import React, { useState } from 'react'
import '../../public/style.css'

const CreateArea = (props) => {
    const[note, setNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = (event) =>{
        const {name , value} = event.target;

        setNote(prevValue =>{
            return{ 
                ...prevValue,
                [name] : value

            }

        })

    }

    const handleSubmit = (event) =>{
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault();


    }


  return (
    <div>
        <form >
            <input type="text" name='title' value={note.title}
            placeholder='Title'
            onChange={handleChange} />
            <textarea
             name="content" id="" 
            placeholder='Enter the content...' 
            rows={3}
            value={note.content}
            onChange={handleChange}>

            </textarea>
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
  )
}

export default CreateArea