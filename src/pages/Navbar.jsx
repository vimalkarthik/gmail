import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider"; // Import ThemeContext

function Navbar({ toggleSidebar }) {
  const { theme, setTheme } = useContext(ThemeContext); // Access theme context

  return (
    <>
      <div className="navbar_top flex">
        <div className="menu_wrapper">
          <div className="menu_logo">
            <button className="hamburger" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="#">
              <div className="logo">
                <img src="/../images/logo.png" alt="Logo"  className="logo_light"/>
                <img src="/../images/logo-dark.png" alt="Logo" className="logo_dark" />
              </div>
            </a>
          </div>
          <div className="search">
            <div>
              <a href="#">
                <div className="search_icon">
                  <img src="/../images/search.png" alt="Search" />
                </div>
              </a>
              <form action="">
                <input
                  type="search"
                  className="top_search"
                  placeholder="Search mail"
                />
              </form>
            </div>
            <a href="#">
              <div className="options">
                <img src="/../images/options.png" alt="Options" />
              </div>
            </a>
          </div>
        </div>

        <div className="gmail_lists">
          {/* Dark Mode Toggle */}
          <a href="#" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <div className="icons">
              <img
                src={theme === "dark" ? "/../images/light-mode.png" : "/../images/night-mode.png"}
                alt="Dark Mode"
              />
            </div>
          </a>

          <a href="#">
            <div className="icons">
              <img src="/../images/question.png" alt="Question" />
            </div>
          </a>
          <a href="#">
            <div className="icons">
              <img src="/../images/gear.png" alt="Settings" />
            </div>
          </a>
          <a href="#">
            <div className="icons">
              <img src="/../images/dots.png" alt="Six dots" />
            </div>
          </a>
          <a href="#">
            <div className="profile">
              <img src="/../images/profile.jpg" alt="Profile" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
