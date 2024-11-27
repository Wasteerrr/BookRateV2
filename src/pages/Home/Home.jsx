import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { UserProvider } from '../../Context/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const location = useLocation();

  return (
    <main>
      <UserProvider>
        <Navbar />
        {location.pathname === '/book' && <Header />}
        {location.pathname === '/' && <Header />}
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </main>
  );
}

export default Home;
