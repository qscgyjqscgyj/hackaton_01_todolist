import useTodoList from './hooks';
import './styles.css';

export default function TodoList() {
    const {
        todos,
        newTodoItemName,
        newTodoItemNameChangeHandler,
        toggleTodoItemHandler,
        deleteTodoItemHandler,
        addTodoItemHandler,
    } = useTodoList();

    return (
        <div className="todoListContainer">
            <h1>Todo List</h1>

            <div className="addNewTodoWrapper">
                <input
                    value={newTodoItemName}
                    onChange={newTodoItemNameChangeHandler}
                    type="text"
                    placeholder="Add Todo"
                />
                <button onClick={addTodoItemHandler}>Add</button>
            </div>

            <div className="todoItemsWrapper">
                {todos.map((todo) => (
                    <div key={todo.id} className="todoItem">
                        <div>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodoItemHandler(todo)}
                            />
                        </div>

                        <div className={`todoItemText ${todo.completed ? 'completed' : ''}`}>
                            {todo.name}
                        </div>

                        <div className="todoItemActions">
                            <button
                                onClick={() => deleteTodoItemHandler(todo)}
                                className="todoItemButton"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
