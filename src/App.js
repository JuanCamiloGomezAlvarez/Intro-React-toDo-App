import React from 'react';
import { TodoCounter } from './TodoCounter/index';
import {TodoSearch} from "./TodoSearch/index";
import {TodoItem} from "./TodoItem/index";
import {TodoList} from "./TodoList/index";
import { CreateTodoButton } from './CreateTodoButton/index';
//import './App.css';

const toDos= [
  {text: "lavar papas", completed: false},
  {text: "pelar papas", completed: false},
  {text: "cocinar papas", completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {toDos.map(todo => (<TodoItem key={todo.text} text={todo.text}/>))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
    

  );
}

export default App;
