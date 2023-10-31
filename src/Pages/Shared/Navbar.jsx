import React, { useContext } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container/Container';
import { galleryContext } from '../../Provider/Provider';

const Navbar = () => {
    const { theme, handleThemeSwitch } = useContext(galleryContext);

    return (
        <Container>
            <section className='w-full py-3 text-black rounded-b-md shadow-md dark:shadow-none
            dark:bg-secondary dark:text-white duration-300'>
                <article className='flex justify-end items-center px-5'>
                    <div className='flex justify-center items-center gap-10'>
                        <Link to='/' className='text-lg hover:text-[#b2aee7f1] duration-300'>Gallery</Link>
                        <Link to='/docs' className='text-lg hover:text-[#b2aee7f1] duration-300'>Docs</Link>
                        <button
                            onClick={handleThemeSwitch}
                            className="p-3 hover:bg-primary/10 dark:hover:bg-primary/60 rounded-full duration-300" >
                            {theme === 'dark' ?
                                <BsFillSunFill size={20} /> :
                                <BsFillMoonStarsFill size={20} />}
                        </button>
                    </div>
                </article>
            </section>
        </Container>
    );
};

export default Navbar;