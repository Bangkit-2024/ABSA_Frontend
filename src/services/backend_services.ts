import { api } from "helpers/api_helper";
import * as url from 'helpers/api_url_list'

import * as model from 'helpers/api_data_models'

// Gets the logged in user data from local session

// Gets the logged in user data from local session

// this is for review data api
export const getReviewList = () => api.get(url.API_URL_REVIEW).then(r=>r.data)
export const getReviewDetail = (id :string) => api.get(`${url.API_URL_REVIEW}${id}/`).then(r=>r.data)
export const postReview = (review : model.dataReview) => api.post(url.API_URL_REVIEW,review).then(r=>r.data)
export const deleteReview = (id :string) => api.delete(`${url.API_URL_REVIEW}${id}/`).then(r=>r.data)