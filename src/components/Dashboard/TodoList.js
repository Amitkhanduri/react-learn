import React, { useEffect, useState } from 'react';


export default function TodoList() {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);


    const handleClick = (event) => {
        event.preventDefault();
        console.log(todo);
        const todoObj = { 'name': todo };
        setTodoList([...todoList, todoObj]);
        setTodo('');
    }

    const deleteTodo = (event, index) => {
        console.log('EVENT', event, 'key', index)
        todoList.splice(index, 1);
        setTodoList([...todoList])
        console.log(todoList)
    }

    return (
        <>
            <div>
                <div>
                    <form>
                        <input type='text' name='user' value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <button type='submit' onClick={handleClick}>Add</button>
                    </form>
                </div>
                <div>
                    <ul>
                        {todoList && todoList.map((item, key) => {
                            return (
                                <li key={key}>{item.name}&nbsp; &nbsp; <p onClick={(event) => deleteTodo(event, key)}>X</p></li>
                            )
                        })
                        }

                    </ul>
                </div>
            </div>
        </>
    )

}