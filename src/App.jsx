import CrossIcon from './components/icons/CrossIcon';
import MoonIcon from './components/icons/MoonIcon';

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
            <header className='container mx-auto px-4 pt-8'>
                <div className='flex justify-between'>
                    <h1 className='uppercase text-white text-3xl font-semibold tracking-[0.3em]'>
                        todo
                    </h1>
                    <button>
                        <MoonIcon className='fill-red-400' />
                    </button>
                </div>
                <form className='bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8'>
                    <span className='rounded-full border-2 inline-block w-5 h-5'></span>
                    {/* elementos de linea no se le puede aplicar ancho y alto, por esta razon se aplico inline-block, para que sea un elemento de bloque */}
                    <input
                        type='text'
                        placeholder='Create a new todo...'
                        className='w-full text-gray-400 outline-none'
                    />
                </form>
            </header>
            <main className='container mx-auto px-4 mt-8'>
                <div className='bg-white rounded-md [&>article]:p-4'>
                    <article className='flex gap-4 items-center border-b-gray-400 border-b'>
                        <button className='rounded-full border-2 inline-block w-5 h-5'></button>
                        <p className='text-gray-500 grow'>
                            Compelte online javascript
                        </p>
                        <button className='flex-none'>
                            <CrossIcon />
                        </button>
                    </article>
                    <article className='flex gap-4 items-center border-b-gray-400 border-b'>
                        <button className='rounded-full border-2 inline-block w-5 h-5'></button>
                        <p className='text-gray-500 grow'>
                            Compelte online javascript
                        </p>
                        <button className='flex-none'>
                            <CrossIcon />
                        </button>
                    </article>
                    <article className='flex gap-4 items-center border-b-gray-400 border-b'>
                        <button className='rounded-full border-2 inline-block w-5 h-5'></button>
                        <p className='text-gray-500 grow'>
                            Compelte online javascript
                        </p>
                        <button className='flex-none'>
                            <CrossIcon />
                        </button>
                    </article>
                    <section className='py-4 px-4 flex justify-between'>
                        <span className='text-gray-400'>5 items left</span>
                        <button className='text-gray-400'>
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>
            <section className='container mx-auto px-4'>
                <div className='bg-white mt-8 p-4 rounded-md flex justify-center gap-4'>
                    <button className='text-blue-600 transition-all'>
                        All
                    </button>
                    <button className='transition-all hover:text-blue-600'>
                        Active
                    </button>
                    <button className='transition-all hover:text-blue-600'>
                        Completed
                    </button>
                </div>
            </section>
            <p className='text-center mt-8'>Drag and drop to reorder list</p>
        </div>
    );
};

export default App;
