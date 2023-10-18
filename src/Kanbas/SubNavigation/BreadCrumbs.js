import { FaBars } from 'react-icons/fa'
import './subNav.css'


function Crumb({text, highlight}) {
  return (
    <li
      className={`breadcrumb-item ${highlight ? "text-muted" : ""}`} >
      {text}
    </li>
  )
}

export default function BreadCrumbs({crumbs, studentView=false}) {
  const crumbsMax = crumbs.length - 1;
  return (
    <div className="mt-2 row wd-breadcrumbs text-danger">
      <div className="col">
        <nav className="d-flex justify-content-start wd-red wd-breadcrumb-nav" aria-label="breadcrumb">
          <FaBars className='ms-2 me-4' size={30}/>
          <ol className="breadcrumb">
            {crumbs.map((text, index) => (
              <Crumb key={index} text={text.replace('%20', ' ')} highlight={index === crumbsMax}/>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}