import { useContext } from 'react';
import Container from '../../Components/Container/Container';
import SingleImageCard from '../../Components/SingleImage/SingleImageCard';
import { galleryContext } from '../../Provider/Provider';


const Gallery = () => {
    const { images, dispatch } = useContext(galleryContext);

    return (
        <Container className="text-black p-10 mt-10  rounded-md 
            dark:text-white dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600">
            <section className=' border-b-2 mb-8 pb-2 border-gray-100 dark:border-gray-600'>
                <article className='flex flex-col md:flex-row justify-between items-center gap-5'>
                    <h1 className='text-2xl'>Gallery</h1>
                    <div>
                        <button onClick={() => dispatch({ type: 'delete' })}
                            className='bg-transparent px-4 py-2 border-none hover:bg-gray-100 dark:hover:bg-gray-800 duration-300 rounded-md'>Delete Images</button>
                    </div>
                </article>
            </section>
            {/* <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        images.map((item, index) => (
                            <SingleImageCard key={index} item={item}/>
                        ))
                    }
            </section> */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                { 
                images.map((item, index) => (
                    <SingleImageCard key={index} item={item} 
                    style={index === 0 ? { gridColumn: 'span 2', gridRow: 'span 2' } : {}} />
                ))}
            </section>
        </Container>
    );
};

export default Gallery;