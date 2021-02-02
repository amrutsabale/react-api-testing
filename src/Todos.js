import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Todos() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            setTodos(response.data);

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="todos">
            <button onClick={fetchTodos}>Load Todos</button>
            <Link to="/">Go Back</Link>

            <h3>All Todos</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (

                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? "YES" : "NO"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div >
    )
}
