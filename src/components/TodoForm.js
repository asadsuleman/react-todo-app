import React, { useState }  from 'react';
import {v4 as uuidv4} from 'uuid';
import {TextField, Button} from '@material-ui/core'
import '../index.css'

function TodoForm({addTodo}){
    const [todo ,setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    });

    function handelSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({ ...todo, id: uuidv4() });
            setTodo({...todo, task: ""})
        }
    }

    function handeltaskInputChange (e){
        setTodo({...todo, task: e.target.value});

    }
    return(
        <form className="todo-form" onSubmit={handelSubmit}> 
            <TextField className="input" label="Task" type="text" name="task" onChange={handeltaskInputChange} value={todo.task}/>
            <Button type="submit">Submitt</Button>
        </form>
    )

}

export default TodoForm;