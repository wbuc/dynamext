// import store from './store/index'
import apiClient from "@/modules/shared/api/apiClient";

const DESIGNER_END_POINT = "designer";

const getForm = (id) => {
  console.log("Get Form: ", id);
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${DESIGNER_END_POINT}/${id}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

const getAllForms = () => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${DESIGNER_END_POINT}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

const getPublishedForms = () => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${DESIGNER_END_POINT}?status=published`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};
const deleteFormDefinition = (id) => {
  return new Promise((resolve, reject) => {
    apiClient
      .delete(`${DESIGNER_END_POINT}/${id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const getFormDefinition = (id) => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${DESIGNER_END_POINT}/${id}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

const saveFormDefinition = (form) => {
  return new Promise((resolve, reject) => {
    apiClient
      .post(`${DESIGNER_END_POINT}`, form)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const saveFormDefinitionAsync = async (form) => {
  try {
    const response = await apiClient.post(`${DESIGNER_END_POINT}`, form);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const updateFormDefinition = (formState) => {
  return new Promise((resolve, reject) => {
    console.log(formState);
    apiClient
      .put(`${DESIGNER_END_POINT}/${formState.formData.id}`, formState)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const updateFormDefinitionAsync = async (formState) => {
  try {
    const response = await apiClient.put(
      `${DESIGNER_END_POINT}/${formState.formData.id}`,
      formState
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getForm,
  getAllForms,
  getPublishedForms,
  getFormDefinition,
  saveFormDefinition,
  saveFormDefinitionAsync,
  updateFormDefinition,
  updateFormDefinitionAsync,
  deleteFormDefinition,
};
