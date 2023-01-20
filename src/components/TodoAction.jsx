import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from './support/Button'

const TodoAction = ({ deleteButton, resetButton, todos }) => {
    const behavior = todos.some(el => {
        return el.isComplited
    })

    return (
        <div className="button_container">
            <Button disabled={!behavior} onClick={resetButton} title='Reset todos'><RiRefreshLine /></Button>
            <Button onClick={deleteButton} title='Clear list of todos' ><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodoAction