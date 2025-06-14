import { useState } from "react";

export default function GratitudeForm({onAddEntry}){

    const [input, setInput] = useState('')

    const handleSubmit = (e) =>{
        //prevents default form refresh
        e.preventDefault()
        //checking if input is not empty
        if(input.trim() !== ''){
            onAddEntry(input)
            //clear input after submission
            setInput('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
            type='text'
            value={input}
            placeholder='What are you grateful for today?'
            onChange={(e)=>setInput(e.target.value)}
            className="input"
            />
            <button type='submit'>Add ✨</button>
        </form>
    )
}