import { useState } from "react"

const Form = ({ addTodo }) => {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }
    const inputChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form action="#" className="form-form" onSubmit={handleSubmit}>
            <input placeholder="Enter new todo" value={text} onChange={inputChange} className='form-input' type="text" />
            <button type="submit" disabled={!text} className="form-submit" >Submit</button>
        </form>
    )
}

export default Form