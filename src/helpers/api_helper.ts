import api from "axios";
import { apiRefresh } from "services/auth";

const axios = api.create({
  baseURL: process.env.REACT_APP_APIURL,
});

const getLoggedUser = () => {
  const user = localStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};


// content type
// content type
axios.interceptors.request.use(
  (config) => {
    const authUser: any = getLoggedUser();
    const token = authUser.access ?? null;    
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    const originalConfig = error.config;

    // // This will run only and only if reset token invalid
    if (error.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const token = await apiRefresh();

        const rs = token.data.access;

        axios.defaults.headers["Authorization"] = `Bearer ${rs}`;

        return axios(originalConfig);
      } catch (_error: any) {
        if (_error.response && _error.response.data) {
          return Promise.reject(_error.response.data);
        }

        return Promise.reject(_error);
      }
    }
  }
);

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
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join("&") : "";
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

export { APIClient, axios as api , getLoggedUser };
