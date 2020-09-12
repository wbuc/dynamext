import apiClient from "@/modules/shared/api/apiClient";

/# SET AUTH HEADER AFTER SUCCESS SIGNIN #/;

const setAuthHeader = (token) => {
  apiClient.defaults.headers.common["Authorization"] = ` Bearer ${token}`;
};

/# SET AUTH HEADER END #/;

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    apiClient
      .post(`login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        const obj = response.data;
        // set token for any future api calls.
        setAuthHeader(obj.token);
        resolve(obj);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const logoutUser = () => {
  return new Promise((resolve, reject) => {
    apiClient
      .get(`logout`)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
};

const registerUser = (newUser) => {
  return new Promise((resolve, reject) => {
    apiClient
      .post(`signup`, {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      })
      .then((response) => {
        console.log("register complete:", response);
        // set token for other api requests.
        setAuthHeader(response.data.token);
        resolve(response);
      })
      .catch((error) => reject(error));
  });
};

export default {
  loginUser,
  registerUser,
  logoutUser,
};
