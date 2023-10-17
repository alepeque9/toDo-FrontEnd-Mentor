const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className='container mx-auto'>
            <div className='bg-white mt-8 p-4 rounded-md flex justify-center gap-4 transition-all duration-300 dark:bg-gray-700 shadow-md shadow-slate-600 dark:shadow-slate-500'>
                <button
                    className={`transition-all duration-300 ${
                        filter === 'all' ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                    }`}
                    onClick={() => changeFilter('all')}
                >
                    All
                </button>
                <button
                    className={`transition-all duration-300 ${
                        filter === 'active' ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                    }`}
                    onClick={() => changeFilter('active')}
                >
                    Active
                </button>
                <button
                    className={`transition-all duration-300 ${
                        filter === 'complete' ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                    }`}
                    onClick={() => changeFilter('complete')}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
