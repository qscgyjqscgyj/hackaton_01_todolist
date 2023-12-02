import TodoList from '../TodoList';

import './App.css';

function App() {
    return (
        <div className="mainWrapper">
            <div data-testid="app_container">React App</div>
            <TodoList />
        </div>
    );
}

export default App;
