import React from 'react';

const Container = ({children, className}) => {
    return (
        <section className={`w-full md:w-[90%] mx-auto ${className}`}>
            {children}
        </section>
    );
};

export default Container;