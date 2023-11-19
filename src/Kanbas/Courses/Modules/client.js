import axios from "axios";
const COURSES_URL = `${process.env.REACT_APP_KANBAS_BACKEND}/api/courses`;
export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/modules`);
  console.log(`Got modules ${JSON.stringify(response.data)}`);
  return response.data;
};

export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

const MODULES_URL = `${process.env.REACT_APP_KANBAS_BACKEND}/api/modules`;
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.
    put(`${MODULES_URL}/${module._id}`, module);
  console.log(`for module update, got ${JSON.stringify(response)}`)
  return response.data;
};


