"use client";
import { useEffect,useState } from "react";

const Todo=()=>{
    const[todo , setTodo] = useState({})

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const todo = await response.json();
            setTodo(todo);
        };
    
        fetchTodo();
    }, []);
    
    
    return(

        <div>
            <h1>{todo.title}</h1>
        </div>

    )

}


export default Todo ;