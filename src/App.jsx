import { useEffect, useState } from 'react';
import Header from './components/Header';
import TodoComputed from './components/TodoComputed';
import TodoCreate from './components/TodoCreate';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            complete: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.complete).length;

    const clearComplete = () => {
        setTodos(todos.filter((todo) => !todo.complete));
    };

    const [filter, setFilter] = useState('all');

    const filteredTodos = () => {
        switch (filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter((todo) => !todo.complete);
            case 'complete':
                return todos.filter((todo) => todo.complete);
            default:
                return todos;
        }
    };

    const changeFilter = (filter) => setFilter(filter);

    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300 transition-all duration-300 dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <main className='container mx-auto px-4 mt-8 md:max-w-xl'>
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearComplete={clearComplete}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className='text-center mt-8 transition-all duration-300 dark:text-gray-400'>
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
