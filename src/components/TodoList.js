import React, {useState} from 'reaxt';
import TodoForm from './TodoForm';


function TodoList(){ 
    const [todos, setTodo] = useState([]);

    return (
        <div>
            <h1> What's the plan for Today?</h1>
            <TodoForm />
        </div>
    );    
}


export default TodoList;