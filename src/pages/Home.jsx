import React, { useState } from "react";
import { Routes } from "react-router";
// import "./index.css"
import "../styles/home.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Mailists from "./Maillists";

function Home(){
    
      const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const [isAllCheck, setIsAllCheck] = useState(false);
      const [checkedItems, setCheckedItems] = useState({});

      const toggleSidebar = () => {
        console.log("Sidebar toggle clicked!");
        setIsSidebarOpen((prev) => !prev);
      };

      const mailCheck = () => {
        const newCheckedState = !isAllCheck;
        setIsAllCheck(newCheckedState);
    
        const newCheckedItems = {};
        if (newCheckedState) {
          for (let i = 1; i <= 6; i++) {
            newCheckedItems[i] = true;
          }
        }
        setCheckedItems(newCheckedItems);
      };
    
      const handleCheckboxChange = (id) => {
        setCheckedItems((prev) => {
          const newCheckedItems = { ...prev, [id]: !prev[id] };
          const allChecked = Object.values(newCheckedItems).every(Boolean);
          setIsAllCheck(allChecked);
          return newCheckedItems;
        });
      };
    return(
        <>
        <Navbar toggleSidebar={toggleSidebar}/>
        <div className="gmail_wrapper">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Mailists isSidebarOpen={isSidebarOpen} isAllCheck={isAllCheck} mailCheck={mailCheck} checkedItems={checkedItems} handleCheckboxChange={handleCheckboxChange} />
        </div>
        </>
    );
}
export default Home;