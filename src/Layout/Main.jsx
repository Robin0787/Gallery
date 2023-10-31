import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';


const Main = () => {
    return (
        <section className='dark:bg-primary duration-300'>
            <Navbar />
            <Outlet />
        </section>
    );
};

export default Main;