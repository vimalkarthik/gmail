import React, { useState } from "react";
import Composemobile from "./Composemobile";

function Sidebar({ isSidebarOpen }) {
  return (
    <>
      <div className="compose_btn compose_mob_btn">
        <button>
          <img src="/../images/pencil.png" alt="Pencil" />
          <h6>Compose</h6>
        </button>
      </div>
      <div className={`sidebar_wrapper ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="compose_btn compose_web_btn">
          <button>
            <img src="/../images/pencil.png" alt="Pencil" />
            <h6>Compose</h6>
          </button>
        </div>
        <div className="sidebar_menus">
          <ul>
            <li className="menu_active">
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/inbox.png" alt="Inbox" />
                  <p>Inbox</p>
                </div>{" "}
                <span className="notify_numbers">3</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/starred.png" alt="Starred" />
                  <p>Starred</p>
                </div>
                <span className="notify_numbers"></span>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/snoozed.png" alt="Snoozed" />
                  <p>Snoozed</p>
                </div>
                <span className="notify_numbers"></span>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/sent.png" alt="Sent" />
                  <p>Sent</p>
                </div>
                <span className="notify_numbers"></span>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/drafts.png" alt="Drafts" />
                  <p>Drafts</p>
                </div>
                <span className="notify_numbers"></span>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/arrow.png" alt="Drafts" />
                  <p>More</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar_menus label_wrapper">
          <div className="label_heading">
            <div className="side_menu_list">
              <p>Labels</p>
            </div>
            <a href="#!">
              <span className="notify_numbers">&#65291;</span>
            </a>
          </div>
          <ul>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/label.png" alt="Starred" />
                  <p>Applications</p>
                </div>
                <span className="notify_numbers three_dots">&#10310;</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/label.png" alt="Starred" />
                  <p>Bills</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/label.png" alt="Starred" />
                  <p>Docs</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/label.png" alt="Starred" />
                  <p>Family</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/label.png" alt="Starred" />
                  <p>Newsletters</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#!">
                <div className="side_menu_list">
                  <img src="/../images/label.png" alt="Starred" />
                  <p>Reconstruction</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
