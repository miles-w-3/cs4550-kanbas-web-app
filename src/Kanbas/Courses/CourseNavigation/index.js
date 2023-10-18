import SubNavigation from "../../SubNavigation/SubNavigation";

export default function CourseNavigation() {
  const options = [
    'Home',
    'Modules',
    'Piazza',
    'Zoom Meetings',
    'Assignments',
    'Quizzes',
    'Grades',
    'People',
    'Panopto Video',
    'Discussions',
    'Announcements',
    'Pages',
    'Files',
    'Rubrics',
    'Outcomes',
    'Collaboration',
    'Syllabus',
    'Settings',
  ]
  return <SubNavigation options={options}/>
}
