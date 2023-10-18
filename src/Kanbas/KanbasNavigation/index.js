import { Link, useLocation } from "react-router-dom";
import React from "react";
import { FaTachometerAlt, FaUserCircle, FaBook, FaClock, FaTv, FaRegCopyright, FaRegQuestionCircle, FaCalendar, FaInbox } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import './nav.css'


function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [FaUserCircle, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaRegCopyright, FaRegQuestionCircle];
  const { pathname } = useLocation();
  return (
    <div className="wd-main-sidebar d-flex flex-column vh-100 overflow-auto">
        <Link to='/Kanbas'>
          <div className='wd-n-logo'></div>
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`nav-item wd-nav-item pb-2 pt-2 ${pathname.includes(link) && "wd-active"}`}>
            {React.createElement(icons[index], {size: 20})} <br />
            <span className={pathname.includes(link) ? "text-red" : "text-light"}>{link}</span>
          </Link>
        ))}
    </div>
  );
}
export default KanbasNavigation;