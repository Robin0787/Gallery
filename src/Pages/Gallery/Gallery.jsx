import React from 'react';
import Container from '../../Components/Container/Container';

const Gallery = () => {
    return (
            <Container className="text-black py-20 mt-10  rounded-md 
            dark:text-white dark:bg-primary duration-300 shadow-[0_0_5px] shadow-gray-300 dark:shadow-gray-600">
                <h1 className='text-center text-3xl'>Welcome To Gallery</h1>
            </Container>
    );
};

export default Gallery;