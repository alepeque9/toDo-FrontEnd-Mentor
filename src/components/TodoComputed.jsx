const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
    return (
        <section className='py-4 rounded-b-md px-4 flex justify-between bg-white transition-all duration-300 dark:bg-gray-700 shadow-md shadow-slate-600 dark:shadow-slate-500'>
            <span className='text-gray-400'>
                {computedItemsLeft} items left
            </span>
            <button className='text-gray-400' onClick={clearComplete}>
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
