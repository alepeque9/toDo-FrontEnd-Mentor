import { Droppable, Draggable } from '@hello-pangea/dnd';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId='todos'>
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className='bg-white rounded-t-md overflow-hidden mt-8 [&>article]:p-4 transition-all duration-300 dark:bg-gray-700 shadow-md shadow-slate-600 dark:shadow-slate-500'
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    todos={todo}
                                    updateTodo={updateTodo}
                                    removeTodo={removeTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};
export default TodoList;
