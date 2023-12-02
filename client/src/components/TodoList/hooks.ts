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
    const [newTodoItemName, setNewTodoItemName] = useState<string>('');

    const toggleTodoItemHandler = (todoItem: TodoItem) => {
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

    const deleteTodoItemHandler = (todoItem: TodoItem) => {
        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.filter((item) => item.id !== todoItem.id);

            return updatedTodos;
        });
    };

    const addTodoItemHandler = () => {
        if (!newTodoItemName) {
            return;
        }

        setTodos((prevTodos) => {
            const newTodoItem: TodoItem = {
                id: todos.length + 1,
                name: newTodoItemName,
                completed: false,
            };

            const updatedTodos = [...prevTodos, newTodoItem];

            return updatedTodos;
        });

        setNewTodoItemName('');
    };

    const newTodoItemNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoItemName(event.target.value);
    };

    return {
        todos,
        newTodoItemName,
        newTodoItemNameChangeHandler,
        toggleTodoItemHandler,
        deleteTodoItemHandler,
        addTodoItemHandler,
    };
}
