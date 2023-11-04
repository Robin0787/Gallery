import React, { useContext } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { galleryContext } from '../../Provider/Provider';

const Navbar = () => {
    const { theme, handleThemeSwitch } = useContext(galleryContext);

    return (
        <Container className={` text-black rounded-b-md shadow-[0_0_5px] shadow-gray-300  dark:shadow-none
            dark:bg-secondary dark:text-white duration-300 py-3`}>
            <article className='flex justify-center md:justify-end items-center px-5'>
                <div className='flex justify-center items-center gap-6 md:gap-10'>
                    <Link to='/' className='nav-link'>Gallery</Link>
                    <Link to='/docs' className='nav-link'>Docs</Link>
                    <button
                        onClick={handleThemeSwitch}
                        className="p-3 hover:bg-gray-100 dark:hover:bg-primary/60 rounded-full duration-300" >
                        {theme === 'dark' ?
                            <BsFillSunFill size={20} /> :
                            <BsFillMoonStarsFill size={20} />}
                    </button>
                </div>
            </article>
        </Container>
    );
};

export default Navbar;