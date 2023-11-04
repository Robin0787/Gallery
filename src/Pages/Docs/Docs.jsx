import Container from '../../Components/Container/Container';



const Docs = () => {

    return (
        <section>
            <Container className="text-gray-700 p-5 md:p-10 mt-10  rounded-md 
            dark:text-gray-300 dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600">
                <section className=''>
                    <article >
                        <h1 className='text-3xl md:text-4xl'>Welcome to the Documentation for this Gallery Application</h1>
                    </article>
                    <article className="mt-5 md:mt-10">
                        <h1 className='text-xl md:text-3xl text-gray-600'>Let's Get Started</h1>
                        <p className=' mt-3 text-lg text-gray-500'>This is a simple image showing gallery web application where you can <span className='font-semibold'>add</span>,
                            <span className='font-semibold'>{' '}delete</span>, and
                            <span className='font-semibold'>{' '}re-order</span> images.</p>
                    </article>
                    <article className="mt-5">
                        <h1 className='text-lg md:text-2xl'>Let's Understand the folder structure of this project.</h1>
                        
                    </article>
                </section>
            </Container >
        </section >
    );
};

export default Docs;


