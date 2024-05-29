import axios from "axios";
import {apiRefresh} from 'services/auth'

axios.defaults.baseURL = process.env.REACT_APP_APIURL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const authUser: any = localStorage.getItem("authUser")
const token = JSON.parse(authUser) ? JSON.parse(authUser).access : null;
if (token)
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    const originalConfig = error.config
    
      // // This will run only and only if reset token invalid
      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
            const token = await apiRefresh();

            const rs = token.data.access

            axios.defaults.headers["Authorization"] = `Bearer ${rs}`;

            return axios(originalConfig)

        } catch (_error) {
          console.log(error);
        }
      }

    switch (error.response.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.response.data || error;
    }
    return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token: any) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

class APIClient {
  /**
   * Fetches data from given url
   */

  //   return axios.get(url, params);
  // };
  get = (url: any, params: any) => {
    let response;

    let paramKeys: any = [];

    if (params) {
      Object.keys(params).map(key => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url: any, data: any) => {
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url: any, data: any) => {
    return axios.patch(url, data);
  };

  put = (url: any, data: any) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url: any, config: any) => {
    return axios.delete(url, { ...config });
  };
}
const getLoggedUser = () => {

  const user = localStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, setAuthorization, getLoggedUser };