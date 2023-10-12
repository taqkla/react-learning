import React from 'react';

function TodoList() {
    const todos = [
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a project' },
        { id: 3, text: 'Deploy to production' }
    ];

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>

                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{todo.text}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{todo.text}</p>
                    </a>

                </li>
            ))}


        </ul>
    );
}

export default TodoList;