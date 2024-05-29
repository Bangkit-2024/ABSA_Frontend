import { APIClient } from "helpers/api_helper";
import * as url from 'helpers/api_url_list'

import * as model from 'helpers/api_data_models'

const api = new APIClient();
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedUser() !== null;
};

// this is for review data api
export const getReviewList = () => api.get(url.API_URL_REVIEW,null).then(r=>r.data)
export const getReviewDetail = (id :string) => api.get(`${url.API_URL_REVIEW}${id}/`,null).then(r=>r.data)
export const postReview = (review : model.dataReview) => api.create(url.API_URL_REVIEW,review).then(r=>r.data)
export const deleteReview = (id :string) => api.delete(`${url.API_URL_REVIEW}${id}/`,null).then(r=>r.data)