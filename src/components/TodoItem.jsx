import CrossIcon from './icons/IconCross';
import IconCheck from './icons/IconCheck';
const TodoItem = ({ todos, removeTodo, updateTodo }) => {
    const { id, title, complete } = todos;
    return (
        <article className='flex gap-4 items-center border-b-gray-400 border-b transition-all duration-300 dark:bg-gray-700'>
            <button
                className={`rounded-full border-2 w-5 h-5 ${
                    complete
                        ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'
                        : 'inline-block'
                }`}
                onClick={() => updateTodo(id)}
            >
                {
                    complete && <IconCheck />
                }
            </button>
            <p className={`text-gray-500 grow ${complete && 'line-through'} transition-all duration-300 dark:text-gray-400`}>{title}</p>
            <button className='flex-none' onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};

export default TodoItem;
