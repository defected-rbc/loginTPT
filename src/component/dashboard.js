import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../dashboard.css';
import Content from './Content';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const userName = "User"; // Replace with actual user data if available
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.showToast) {
      toast.success('You have logged in successfully!');
    }
  }, [location.state]);

  return ( 
    <div className="dashboard">
      <Navbar userName={userName}/>
      <div className="main-content">
        <Sidebar/>
        <div className="content">
          <Content/>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
