import apiClient from "@/modules/shared/api/apiClient";

//update endpoints with correct value when APIs are available
/#### ENDPOINTS START ####/;
const DEPARTMENT_END_POINT = "department";
const REDFLAG_END_POINT = "redflag";
//const PROJECT_END_POINT = "project";
/#### ENDPOINTS END ####/;


/# PROJECT #/;
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
/# DEPARTMENT#/;
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
/# REDFLAG #/;
const getRedflagDetail = (id) => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${REDFLAG_END_POINT}/${id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const saveNewRedflag = (data) => {
  return new Promise((resolve, reject) => {
    apiClient
      .post(`${REDFLAG_END_POINT}`, data)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const updateRedflag = (data) => {
  return new Promise((resolve, reject) => {
    apiClient
      .put(`${REDFLAG_END_POINT}/${data.id}`, data)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const deleteRedflag = (data) => {
  return new Promise((resolve, reject) => {
    apiClient
      .delete(`${REDFLAG_END_POINT}/${data.id}`)
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
  getRedflagDetail,
  saveNewRedflag,
  updateRedflag,
  deleteRedflag

};
