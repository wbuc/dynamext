// import store from './store/index'
import httpClient from "./httpClient";
import adminHttpClient from "@/modules/admin/api/httpClient";
const END_POINT = "/users.json";

const admin_END_POINT = "/users";

const saveUser = (state, user) => {
  return new Promise((resolve, reject) => {
    console.log(state);
    httpClient
      .post(`${END_POINT}?auth=${state.idToken}`, user)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const getUser = (state, user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    httpClient
      .get(`users/${state.userId}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
const getUsers = (state) => {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`${END_POINT}?auth=${state.idToken}`)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
const getLoggedInUser = (uId) => {
  return new Promise((resolve, reject) => {
    adminHttpClient
      .get(`users/${uId}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
const getUserDetail = (email) => {
  return new Promise((resolve, reject) => {
    adminHttpClient
      .get(`${admin_END_POINT}?email=${email}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const saveUserDetail = (userDetail) => {
  return new Promise((resolve, reject) => {
    adminHttpClient
      .post(`${admin_END_POINT}`, userDetail)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
const updateUserDetail = (userDetail) => {
  return new Promise((resolve, reject) => {
    adminHttpClient
      .put(`${admin_END_POINT}/${userDetail.id}`, userDetail)
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
