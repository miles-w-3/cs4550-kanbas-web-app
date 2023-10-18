import { Link, useParams, useLocation } from "react-router-dom";
import './subNav.css'

// represents the Sub Navigation bar
export default function SubNavigation({ options }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="col-2 d-none d-md-block ms-2">
      <ul className="list-group">
      {options.map((link, index) => (
        <li key={index} className={`list-group-item ${pathname.replace('%20', ' ').includes(link) && "wd-subnav-active"}`}>
          <Link
            to={`/Kanbas/Courses/${courseId}/${link}`}>
            {link}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}