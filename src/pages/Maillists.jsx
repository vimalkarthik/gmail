import React from "react";
function Mailists({ isSidebarOpen, isAllCheck, mailCheck }){

    const data = [
        { 
            id: 1,
            imgPath: "/../images/starred.png",
            name: "Sanjay Ive via Figma",
            title: "Sanjay Ive mentioned you in Final SPEC",
            content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!",
            msgTime: "9:00 AM",
            isRead: true
        },
        { 
            id: 2,
            imgPath: "/../images/starred.png",
            name: "Bala Ive via Figma",
            title: "Bala Ive mentioned you in Final SPEC",
            content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. The attention to detail and the elegance of the design are truly remarkable Bravo! The attention to detail and the elegance of the design are truly remarkable",
            msgTime: "9:01 AM",
            isRead: false
        },
        { 
            id: 3,
            imgPath: "/../images/starred.png",
            name: "Vimal Ive via Figma",
            title: "Vimal Ive mentioned you in Final SPEC",
            content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!",
            msgTime: "9:02 AM",
            isRead: true
        },
        { 
            id: 4,
            imgPath: "/../images/starred.png",
            name: "Sanjay Ive via Figma",
            title: "Sanjay Ive mentioned you in Final SPEC",
            content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!",
            msgTime: "9:00 AM",
            isRead: true
        },
        { 
            id: 5,
            imgPath: "/../images/starred.png",
            name: "Bala Ive via Figma",
            title: "Bala Ive mentioned you in Final SPEC",
            content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. The attention to detail and the elegance of the design are truly remarkable Bravo! The attention to detail and the elegance of the design are truly remarkable",
            msgTime: "9:01 AM",
            isRead: true
        },
        { 
            id: 6,
            imgPath: "/../images/starred.png",
            name: "Vimal Ive via Figma",
            title: "Vimal Ive mentioned you in Final SPEC",
            content: "Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!",
            msgTime: "9:02 AM",
            isRead: false
        },
      ];

      const handleRowClick = (event) => {
        const rowId = event.target.closest("tr")?.dataset.id;
        if (rowId) {
          console.log("Clicked row ID:", rowId);
        }
      };

    return(
        <>
        <div className={`mail_wrapper ${isSidebarOpen ? "" : "expand"}`}>
            <div className="header_wrapper">
                <div className="header_icons">
                    <div className="all_checkbox">
                        <form action="">
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
                    <tbody onClick={handleRowClick} style={{ backgroundColor: isAllCheck ? "#c2dbff" : "transparent" }}>
                    {data.map((item) => (
                    <tr key={item.id} data-id={item.id} className={item.isRead ? 'read' : 'unread'}>
                        <td>
                            <form action="" className="mailall_check">
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
                            <div className="time_and_date" id={`timeDate${item.id}`}>{item.msgTime}</div>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="footer_wrapper">
                <div className="footer_lists">
                    <div className="footer_range">
                        <input type="range" />
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
        </div>

        </>
    );
}
export default Mailists;