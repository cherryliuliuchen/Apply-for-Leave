import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Leftbar.css'; 

const Leftbar = () => {
    const navigate = useNavigate(); // get navigate function

    const handleNavigateHome = () => {
        navigate('/'); // Navigate to homepage
    };

    const handleNavigateLeaveApplication = () => {
        navigate('/leaveapplication'); // Navigate to leave apllication page
    };

    return (
        <div className="leftbar">
            <button className="btn btn-link btn-custom" onClick={handleNavigateHome}>Hemsida</button>
            <button className="btn btn-link btn-custom" onClick={handleNavigateLeaveApplication}>Ansök om ledighet</button>
        </div>
    );
};

export default Leftbar;
