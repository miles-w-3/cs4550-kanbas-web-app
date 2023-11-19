import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import Courses from "./Courses";
import { useEffect, useState } from "react";
import axios from "axios";


function Kanbas() {

  const [courses, setCourses] = useState([]);
  const URL = `${process.env.KANBAS_BACKEND}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "Web Dev", number: "CS4550",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "", number: "", startDate: "", endDate: "" });
  };

  const deleteCourse = async (idToDelete) => {
    // console.log(`Course is ${JSON.stringify(course)}`)
    await axios.delete(
      `${URL}/${idToDelete}`
    );
    setCourses(courses.filter((existingCourse) => existingCourse._id !== idToDelete));
  };

  const updateCourse = async (course) => {
    console.log('In update course')
    console.log()
    const reponse = await axios.put(
      `${URL}/${course._id}`,
      course
    );

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
              addNewCourse={addCourse}
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