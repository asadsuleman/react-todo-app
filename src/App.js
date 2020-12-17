import React , {useState,useEffect} from 'react'
import './App.css';
import TodoFrom from './components/TodoForm';
import TodoList from './components/TodoList'
// import Footer from './components/footer';

import Typography from '@material-ui/core/Typography'




const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos ,setTodo] = useState([]);

 useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


   useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodo(storageTodos);
    }
  }, []);


  function addTodo(todo){
    setTodo([todo,...todos])
  }

  function toggleComplete(id){
    setTodo(
      todos.map(todo =>{
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function removeTodo (id){
    setTodo(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography className="heading" style={{padding: 16}} variant="h1">
        React Todo App
      </Typography>
      <TodoFrom addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      {/* <footer><Footer/></footer> */}

     
      
     
    </div>
  );
}

export default App;






