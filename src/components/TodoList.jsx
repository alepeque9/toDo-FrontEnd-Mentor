import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className='bg-white rounded-t-md overflow-hidden mt-8 [&>article]:p-4 transition-all duration-300 dark:bg-gray-700 shadow-md shadow-slate-600 dark:shadow-slate-500'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todos={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
            ))}
        </div>
    );
};
export default TodoList;
