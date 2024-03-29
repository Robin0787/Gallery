import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';


const Main = () => {
    return (
        <section className='min-h-screen dark:bg-primary duration-300'>
                <Navbar />
                <Outlet />
        </section>
    );
};

export default Main;