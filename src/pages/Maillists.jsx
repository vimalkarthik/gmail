import React, { useState, useEffect, useRef } from "react";

function Mailists({ isSidebarOpen, isAllCheck, mailCheck }) {
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0, selectedId: null });
  const menuRef = useRef(null);

  const data = [
    { id: 1, imgPath: "/../images/starred.png", name: "Sanjay Ive via Figma", title: "Sanjay Ive mentioned you in Final SPEC", content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!", msgTime: "9:00 AM", isRead: true },
    { id: 2, imgPath: "/../images/starred.png", name: "Sanjay Ive via Figma", title: "Sanjay Ive mentioned you in Final SPEC", content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!", msgTime: "9:00 AM", isRead: true },
    { id: 3, imgPath: "/../images/starred.png", name: "Bala Ive via Figma", title: "Bala Ive mentioned you in Final SPEC", content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. The attention to detail and the elegance of the design are truly remarkable Bravo! The attention to detail and the elegance of the design are truly remarkable", msgTime: "9:01 AM", isRead: false },
    { id: 4, imgPath: "/../images/starred.png", name: "Bala Ive via Figma", title: "Bala Ive mentioned you in Final SPEC", content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. The attention to detail and the elegance of the design are truly remarkable Bravo! The attention to detail and the elegance of the design are truly remarkable", msgTime: "9:01 AM", isRead: false },
    { id: 5, imgPath: "/../images/starred.png", name: "Vimal Ive via Figma", title: "Vimal Ive mentioned you in Final SPEC", content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!", msgTime: "9:02 AM", isRead: true },
    { id: 6, imgPath: "/../images/starred.png", name: "Vimal Ive via Figma", title: "Vimal Ive mentioned you in Final SPEC", content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!", msgTime: "9:02 AM", isRead: true },
  ];

  const handleRowRightClick = (event, id) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.pageX,
      y: event.pageY,
      selectedId: id
    });
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  const handleScroll = () => {
    if (contextMenu.visible) {
      setContextMenu({ ...contextMenu, visible: false });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contextMenu.visible]);


  return (
    <>
      <div className={`mail_wrapper ${isSidebarOpen ? "" : "expand"}`}>
        <div className="header_wrapper">
          <div className="header_icons">
            <div className="all_checkbox">
              <form>
                <input type="checkbox" checked={isAllCheck} onChange={mailCheck} />
              </form>
              <div id="check-dropdown"></div>
            </div>
            <div className="refresh_btn">
              <a href="#!"><img src="/../images/refresh.png" alt="Refresh" /></a>
            </div>
            <div className="three_dots">
              <a href="#!"><img src="/../images/three-dots.png" alt="Options" /></a>
            </div>
          </div>
        </div>

        <div className="mail_nav_tabs">
          <ul>
            <li className="nav_active"><a href="#" onClick={(e) => e.preventDefault()} ><img src="/../images/inbox.png" alt="Inbox" /><p>Primary</p></a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} ><img src="/../images/promo-label.png" alt="Label" /><p>Promotions</p></a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} ><img src="/../images/group.png" alt="User" /><p>Social</p></a></li>
          </ul>
        </div>

        <div className="all_mails_wrapper">
          <table>
            <tbody style={{ backgroundColor: isAllCheck ? "#c2dbff" : "transparent" }}>
              {data.map((item) => (
                <tr 
                  key={item.id} 
                  data-id={item.id} 
                  className={item.isRead ? 'read' : 'unread'}
                  onContextMenu={(event) => handleRowRightClick(event, item.id)}
                >
                  <td>
                    <form className="mailall_check">
                      <input type="checkbox" checked={isAllCheck} onChange={mailCheck} />
                    </form>
                  </td>
                  <td>
                    <div className="starred">
                      <img src={item.imgPath} alt="Starred" />
                    </div>
                  </td>
                  <td className="mailer_name">
                    <h6>{item.name}</h6>
                  </td>
                  <td className="mail_desc_preview">
                    <p><span>{item.title}</span> - {item.content}</p>
                  </td>
                  <td>
                    <div className="time_and_date">{item.msgTime}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="footer_wrapper">
                <div className="footer_lists">
                    <div className="footer_range">
                        <input type="range" value="75"/>
                        <a href="#"><p><span>7.28 GB</span> of 15 GB used <img src="/../images/open-new.png" alt="Open New" /></p></a>
                    </div>
                    <div className="policies">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Program Policies</a>
                    </div>
                    <div className="activity">
                        <p>Last account activity: <span>24 minutes</span> ago</p>
                        <a href="#">Details</a>
                    </div>
                </div>
            </div>     
        {/* Context Menu */}
        {contextMenu.visible && (
          <div 
            ref={menuRef} 
            className="context_menu" 
            style={{ top: contextMenu.y, left: contextMenu.x }}
          >
            <ul>
              <li><a href="#">Move to tab</a></li>
              <li><a href="#">Reply</a></li>
              <li><a href="#">Reply all</a></li>
              <li><a href="#">Forward</a></li>
              <li><a href="#">Forward as attachment</a></li>
              <li><a href="#">Archive</a></li>
              <li><a href="#">Delete</a></li>
              <li><a href="#">Mark as unread</a></li>
              <li><a href="#">Snooze</a></li>
              <li><a href="#">Add to Tasks</a></li>
              <li><a href="#">Move to</a></li>
              <li><a href="#">Label as</a></li>
              <li><a href="#">Mute</a></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Mailists;
