import React from "react";
import "../dashboard.css";
import Content from "./content";
import SideBar from "./sidebar";
import Navbar from "./navbar";

const DashBoard = () => {
  const userName = "User"; // You can replace this with actual user data

  return (
    <div className="dashboard">
      <Navbar userName={userName}/>
      <div className="main-content">
        <SideBar/>
        <div className="content">
          <Content/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
