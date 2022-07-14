import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const toDos= [
//   {text: "lavar papas", completed: true},
//   {text: "pelar papas", completed: false},
//   {text: "cocinar papas", completed: false}
// ]

function App() {
  // console.log("render before");
  // React.useEffect(()=>{
  //   console.log("use effect");
  // }, [totalTodos]);
  // console.log("render then");
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
