import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import Courses from "./Courses";
import { useState } from "react";
import db from "./Database";


function Kanbas() {

  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "Web Dev", number: "CS4550",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([...courses,
    {
      ...course,
      _id: new Date().getTime()
    }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div className="d-flex">
      <KanbasNavigation/>
      <div className="main-content ps-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}
            />}
          />
          <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
        </Routes>
      </div>
    </div>
  )
}
export default Kanbas;