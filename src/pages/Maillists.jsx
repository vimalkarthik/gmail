import React from "react";
function Mailists(){
    return(
        <>
        <div className="mail_wrapper">
            <div className="header_wrapper">
                <div className="header_icons">
                    <div className="all_checkbox">
                        <form action="">
                            <input type="checkbox" />
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
            {/* <div className="mail_nav_tabs">
                <ul>
                    <li><a href="#!"><img src="" alt="" /><p>Primary</p></a></li>
                    <li><a href="#!"><img src="" alt="" /><p>Promotions</p></a></li>
                    <li><a href="#!"><img src="" alt="" /><p>Social</p></a></li>
                </ul>
            </div> */}
            <div className="all_mails_wrapper">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <form action="" className="mailall_check">
                                    <input type="checkbox" />
                                </form>
                            </td>
                            <td>
                                <div className="starred">
                                    <img src="/../images/starred.png" alt="Starred" />
                                </div>
                            </td>
                            <td className="mailer_name">
                                <h6>Jony Ive via Figma</h6>
                            </td>
                            <td className="mail_desc_preview">
                                <p><span>Jony Ive mentioned you in Final SPEC</span> - Absolutely stunning work. The attention to detail and the elegance of the design are truly remarkable. Bravo!</p>
                            </td>
                            <td>
                                <div className="time_and_date" id="timeDate">9:01 AM</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        </>
    );
}
export default Mailists;