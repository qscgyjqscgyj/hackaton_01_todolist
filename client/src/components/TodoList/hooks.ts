import { useState } from 'react';

import { TodoItem } from 'shared/types';

const INITIAL_TODOS: TodoItem[] = [
    {
        id: 1,
        name: 'Learn React',
        completed: false,
    },
    {
        id: 2,
        name: 'Learn TypeScript',
        completed: false,
    },
    {
        id: 3,
        name: 'Learn GraphQL',
        completed: false,
    },
];

export default function useTodoList() {
    const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);

    const toggleTodoItem = (todoItem: TodoItem) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.map((item) => {
                if (item.id === todoItem.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }

                return item;
            });

            return updatedTodos;
        });
    };

    const deleteTodoItem = (todoItem: TodoItem) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.filter((item) => item.id !== todoItem.id);

            return updatedTodos;
        });
    };

    return { todos, toggleTodoItem, deleteTodoItem };
}
