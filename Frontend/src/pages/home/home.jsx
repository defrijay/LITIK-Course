import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/sidebar.jsx'; // Assuming Sidebar component is in the same directory
// import Home from './pages/home/home.jsx';
import Login from '../../pages/auth/login.jsx';
import Daftar from '../../pages/auth/register.jsx';

const Home = () => {
    return (
        <>
            <Router>
                <div className="flex">
                    <Sidebar />
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/daftar" element={<Daftar />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default Home