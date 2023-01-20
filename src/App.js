import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Empty from './components/Empty'
import Form from './components/Form'
import ListContainer from './components/ListContainer'
import TodoAction from './components/TodoAction';
import Counter from './components/support/Counter';

import './App.css';


function App() {
  const [todo, setTodo] = useState([])

  //Save todos to object
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),

    }
    setTodo([...todo, newTodo])
  }
  // delete one todo from list
  const deleteItem = (id) => {
    setTodo(todo.filter((to) => to.id !== id))
  }

  // make todo from list completed
  const toggleTodo = (id) => {
    setTodo(todo.map((to) => {
      return to.id === id ? { ...to, isComplited: !to.isComplited } : { ...to }
    }))
  }

  // delete all todos from list
  const handlerDeleteTodo = () => {
    setTodo([])
  }

  // delete only complited todos
  const handlerResetTodo = () => {
    setTodo(todo.filter(obj => !obj.isComplited))
  }
  // Count of complited todo
  const complitedTodo = todo.filter((el) => el.isComplited).length

  return (
    <div className="App bg__color" >
      <h1>Your todos</h1>
      <Form addTodo={addTodoHandler} />

      {!todo.length ? <Empty /> : <TodoAction todos={todo} deleteButton={handlerDeleteTodo} resetButton={handlerResetTodo} />}

      <ListContainer toggleTodo={toggleTodo} del={deleteItem} todos={todo} />
      {!!complitedTodo && <Counter count={complitedTodo} />}



    </div>
  );
}

export default App;
