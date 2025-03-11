import React from "react";
// import "./index.css"
import "../styles/home.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Mailists from "./Maillists";
import { Main } from "../Js/Main"
function Home(){
    return(
        <>
        <Navbar/>
        <div className="gmail_wrapper">
        <Sidebar/>
        <Mailists/>
        </div>
        </>
    );
}
export default Home;