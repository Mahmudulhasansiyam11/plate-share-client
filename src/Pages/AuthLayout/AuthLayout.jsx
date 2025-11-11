import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='min-h-screen'>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;