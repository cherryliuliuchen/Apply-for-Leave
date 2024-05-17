import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavbarAndFooter/Navbar';
import Footer from './components/NavbarAndFooter/Footer';
import Welcome from './components/Homepage/Welcome';
import LoginPage from './components/Login/LoginPage';
import LeaveApplication from './components/LeaveApplication/LeaveApplication';
import Leftbar from './components/Leftbar/Leftbar';
import RequireAuth from './auth/RequireAuth';
import { fetchUsers } from './api/api';
import './App.css'; 

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = async ({ email, password }) => {
        const users = await fetchUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setUser(user);
            return true;
        }
        return false;
    };

    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="body-container">
                    <Leftbar />
                    <div className="content-with-sidebar">
                        <main className="main-content">
                            <Routes>
                                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
                                <Route path="/" element={<Welcome />} />
                                <Route path="/leaveapplication" element={
                                    <RequireAuth user={user}>
                                        <LeaveApplication user={user} />
                                    </RequireAuth>
                                } />
                            </Routes>
                        </main>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
