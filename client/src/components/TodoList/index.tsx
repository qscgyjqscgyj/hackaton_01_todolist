import useTodoList from './hooks';
import './styles.css';

export default function TodoList() {
    const { todos, toggleTodoItem, deleteTodoItem } = useTodoList();

    return (
        <div className="container">
            <h1>Todo List</h1>

            <div className="todoItemsWrapper">
                {todos.map((todo) => (
                    <div key={todo.id} className="todoItem">
                        <div>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodoItem(todo)}
                            />
                        </div>
                        <div className={`todoItemText ${todo.completed ? 'completed' : ''}`}>
                            {todo.name}
                        </div>
                        <div className="todoItemActions">
                            <button onClick={() => deleteTodoItem(todo)} className="todoItemButton">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
