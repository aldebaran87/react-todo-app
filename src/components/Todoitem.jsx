import { RiTodoFill, RiDeleteBin2Line, } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './TodoItems.module.css'


const Todoitem = ({ text, deleteH, toggleTodo, number }) => {
    console.log(number)

    return (
        <div className={`${styles.text_itex} ${text.isComplited ? styles.text_gray : ''}`}>
            <RiTodoFill className={styles.icon_task} />
            <p>{number}. {text.text}</p>
            <RiDeleteBin2Line onClick={() => deleteH(text.id)} className={styles.deleteIcon} />
            <FaCheck className={` ${!text.isComplited ? styles.checkIcon : styles.cheked_checkIcon}`} onClick={() => toggleTodo(text.id)} />
        </div>
    )
}

export default Todoitem