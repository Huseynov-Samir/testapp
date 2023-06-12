import { useState } from 'react';
import Todo from './components/Todo'
import Input from './components/Input';

let list =[
  {
    id:1,
    text:"salam"
  },
  {
    id:2,
    text:"dost"
  }
]

function App() {
  const[todos,setTodos]=useState(list)
  const[title,setTitle]=useState("")

  const deleteTodo=(id)=>setTodos(todos.filter(todo=>todo.id!==id))

  const handleInput=(e)=>setTitle(e.target.value)

  const addTodo=(e)=>{
    e.preventDefault();
    if(title.trim()==="") return;
    setTitle("")
    const newTodo=setTodos([...todos,
      {
        id:Math.random(),
        text:title
      }
    ])
    return newTodo;
    
  }

  return ( 
    <div>
      <Input 
        addTodo={addTodo} 
        handleInput={handleInput} 
        title={title}
      />
      {
        todos.map((todo)=>{
          return <Todo 
                    key={todo.id} 
                    {...todo} 
                    deleteTodo={deleteTodo}
                  /> 
        }) 
      }
    </div>
   );
}

export default App;