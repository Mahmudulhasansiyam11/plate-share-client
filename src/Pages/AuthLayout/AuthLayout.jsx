import React from 'react';
import NavBar from '../../Components/Header/NavBar';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='min-h-screen bg-[linear-gradient(90deg,#0A0B36,#0E425C,#0A0B36)]'>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer className="bg-[#031637] mt-10 text-white py-10">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;