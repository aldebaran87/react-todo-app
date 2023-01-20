import { CSSTransition, TransitionGroup } from "react-transition-group"
import Todoitem from "./Todoitem"

const ListContainer = ({ todos, del, toggleTodo }) => {

    return (
        <div className="text-container">
            <TransitionGroup component={null}>
                {todos.map((todo) => {
                    return <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="item"
                    >
                        <Todoitem toggleTodo={toggleTodo} deleteH={del} text={todo} />
                    </CSSTransition>
                })}
            </TransitionGroup>
        </div>

    )
}

export default ListContainer