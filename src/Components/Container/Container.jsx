import React from 'react';

const Container = ({children}) => {
    return (
        <section className='w-[95%] md:w-[90%] mx-auto'>
            {children}
        </section>
    );
};

export default Container;