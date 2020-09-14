import apiClient from "@/modules/shared/api/apiClient";

//update endpoints with correct value when APIs are available
/#### ENDPOINTS START ####/;
const DEPARTMENT_END_POINT = "department";
//const PROJECT_END_POINT = "project";
/#### ENDPOINTS END ####/;

const getProjectInfoAsync = async () => {
  try {
    const response = await apiClient.get(`project`);
    console.log("admin.app.api: ", response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
const getProjectInfo = () => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`project`)
      .then((response) => {
        console.log("admin.app.api: ", response);

        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
const saveProjectInfoAsync = async (project) => {
  try {
    const response = await apiClient.put(`project`, project);
    return response;
  } catch (err) {
    console.log(err);
  }
};
const saveProjectInfo = (project) => {
  return new Promise((resolve, reject) => {
    apiClient
      .put(`project`, project)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const getDepartmentDetail = (id) => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${DEPARTMENT_END_POINT}/${id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const saveNewDepartment = (department) => {
  return new Promise((resolve, reject) => {
    apiClient
      .post(`${DEPARTMENT_END_POINT}`, department)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const updateDepartment = (department) => {
  return new Promise((resolve, reject) => {
    apiClient
      .put(`${DEPARTMENT_END_POINT}/${department.id}`, department)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const deleteDepartment = (department) => {
  return new Promise((resolve, reject) => {
    apiClient
      .delete(`${DEPARTMENT_END_POINT}/${department.id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export default {
  getProjectInfo,
  getProjectInfoAsync,
  saveProjectInfo,
  saveProjectInfoAsync,
  getDepartmentDetail,
  updateDepartment,
  saveNewDepartment,
  deleteDepartment,
};
