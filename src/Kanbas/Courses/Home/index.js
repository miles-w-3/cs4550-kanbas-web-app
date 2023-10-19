import CourseContent from "../CourseContent";
import ModuleList from "../Modules/ModuleList";

function RightPanel() {
  const rightPanelButtons = [
    "Import Existing Content",
    "Import From Commons",
    "View Course Stream",
    "New Announcement",
    "New Analytics",
    "View Course Notifications",
  ]

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <h5>Course Status</h5>
      <div className="row mb-2">
        <button className="col btn btn-secondary me-0 ms-0 ps-1 pe-1" type="button"><i className="fas fa-ban"></i> Unpublish</button>
        <button className="col btn btn-success rounded-0 me-0 ms-0 ps-1 pe-1" type="button"><i className="fas fa-check-circle"></i> Published</button>
      </div>
      {rightPanelButtons.map((text, index) => (
        <div className="row" key={index}>
          <button className="btn btn-secondary" type="button">{text}</button>
        </div>
      ))}

      <h5 className="border-bottom pt-2 pb-1">To Do</h5>

      <ul className=" wd-sidebar list-group">
        <li className="list-group-item"><a href="#">Grade A1</a></li>
      </ul>

      <h5 className="border-bottom pt-2 pb-1">Coming Up</h5>

      <ul className=" wd-sidebar list-group">
        <li className="list-group-item"><a href="#">CS4550 11:45 AM</a></li>
        <li className="list-group-item"><a href="#">CS4550 2:50 PM</a></li>
        <li className="list-group-item"><a href="#">CS5610 6:00 PM</a></li>
      </ul>
    </div>
  );
}

export default function Home() {
  return(
    <CourseContent>
      <div className="col">
        <div className="row me-2">
          <ModuleList colProps={'col'} />
          <RightPanel />
        </div>
      </div>
    </CourseContent>

  );
}