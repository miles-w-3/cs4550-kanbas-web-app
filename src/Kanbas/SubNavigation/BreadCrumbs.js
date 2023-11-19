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

export default function BreadCrumbs({course, params}) {
  function _makeCrumbs(course, params) {
    const acc = []

    if (! course.number) return acc; // we're not ready to display yet
    acc.push(course.number);

    // get page name
    const pageName = params["*"].split('/')[0];
    if (pageName) acc.push(pageName);

    // translate assignment id to name where necessary - not used in A5
    // if (params.assignmentId) {
    //   const assignment = db.assignments.find(
    //     (assignment) => assignment._id === params.assignmentId);
    //   acc.push(assignment.title)
    // }
    return acc;
  }

  const crumbs = _makeCrumbs(course, params);

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