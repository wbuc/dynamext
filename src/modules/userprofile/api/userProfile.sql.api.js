// import store from './store/index'

import apiClient from "@/modules/shared/api/apiClient";

const END_POINT = "/users.json";

const admin_END_POINT = "/users";

/# HELPERS#/;
const validateAuthHeader = () => {
  const token = localStorage.getItem("token");
  const apiToken = apiClient.defaults.headers.common["Authorization"];
  if (!apiToken) {
    apiClient.defaults.headers.common["Authorization"] = ` Bearer ${token}`;
  }
};

const saveUser = (state, user) => {
  return new Promise((resolve, reject) => {
    console.log(state);
    apiClient
      .post(`${END_POINT}?auth=${state.idToken}`, user)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const getUser = (state, user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    apiClient
      .get(`user/${state.userId}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
const getUsers = (state) => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`${END_POINT}?auth=${state.idToken}`)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
const getLoggedInUser = (uId) => {
  return new Promise((resolve, reject) => {
    validateAuthHeader();

    apiClient
      .get(`user/${uId}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
const getUserDetail = (email) => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`user/email/${email}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
const saveUserDetail = (userDetail) => {
  return new Promise((resolve, reject) => {
    apiClient
      .post(`${admin_END_POINT}`, userDetail)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const updateUserDetail = (userDetail) => {
  return new Promise((resolve, reject) => {
    apiClient
      .put(`user/${userDetail.id}`, userDetail)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export default {
  saveUser,
  getUser,
  getUsers,
  saveUserDetail,
  getLoggedInUser,
  getUserDetail,
  updateUserDetail,
};
