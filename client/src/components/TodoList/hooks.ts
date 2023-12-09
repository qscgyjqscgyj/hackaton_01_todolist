import { useEffect, useState } from 'react';

import { TodoItem } from 'shared/types';

import { getTableItems } from '../../services/getTableItems';
import { createTableItem } from '../../services/createTableItem';

export default function useTodoList() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodoItemName, setNewTodoItemName] = useState<string>('');

    const loadTodoItems = async () => {
        const todoItemsResponse = await getTableItems('TodoItems');
        setTodos(todoItemsResponse);
    };

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

    const addTodoItemHandler = async () => {
        if (!newTodoItemName) {
            return;
        }

        await createTableItem('TodoItems', {
            name: newTodoItemName,
            completed: false,
        });

        await loadTodoItems();
        setNewTodoItemName('');
    };

    const newTodoItemNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodoItemName(event.target.value);
    };

    useEffect(() => {
        loadTodoItems();
    }, []);

    return {
        todos,
        newTodoItemName,
        newTodoItemNameChangeHandler,
        toggleTodoItemHandler,
        deleteTodoItemHandler,
        addTodoItemHandler,
    };
}
