import { useState } from 'react';

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState('');
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (!title.trim().length > 0) {
            return setTitle('');
        }
        createTodo(title);
        setTitle('');
    };
    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className='dark:bg-gray-700 transition-all duration-300 bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 shadow-md shadow-slate-600 dark:shadow-slate-500'
        >
            <span className='rounded-full border-2 inline-block w-5 h-5'></span>
            {/* elementos de linea no se le puede aplicar ancho y alto, por esta razon se aplico inline-block, para que sea un elemento de bloque */}
            <input
                type='text'
                placeholder='Create a new todo...'
                className='w-full text-gray-400 outline-none transition-all duration-300 dark:bg-gray-700'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
