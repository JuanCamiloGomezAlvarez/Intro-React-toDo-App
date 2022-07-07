import React from 'react';
import { AppUI } from './AppUI';

const toDos= [
  {text: "lavar papas", completed: true},
  {text: "pelar papas", completed: false},
  {text: "cocinar papas", completed: false}
]

function App() {

  const [todos, setTodos]=React.useState(toDos);
  const [searchValue,setSearchValue]=React.useState("");
  
  const completedTodos=todos.filter(todo=>todo.completed).length;
  const totalTodos=todos.length;

  let searchedTodos=[];

  if (!searchValue>=1) {
    searchedTodos=todos;
  } else {
    searchedTodos=todos.filter(todo=>{
      const todoText = todo.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      return todoText.includes(searchText);
    }) 
  }

  const completeTodo=(text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const deleteTodo=(text)=>{
    const todoIndex = todos.findIndex(todo=>todo.text===text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
