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
export const predictReview = (text : string) => api.post(url.API_URL_REVIEW_PREDICT,{text:text}).then(r=>r.data) 
export const uploadReviewData = (file:File)=> api.post(url.API_URL_REVIEW_UPLOAD,{review_file:file},{"headers":{ "Content-Type": "multipart/form-data" }}).then(r=>r.data)
export const bulkPredict = () => api.post(url.API_URL_BULK_PREDICT).then(r=>r.data)

// this is for profile data api
export const getProfileData = () => api.get(url.API_URL_PROFILE).then(r=>r.data)
export const editProfileData = (profile:model.UserProfile) => api.patch(url.API_URL_PROFILE,profile,{"headers":{ "Content-Type": "multipart/form-data" }}).then(r=>r.data)
export const deleteProfilePhoto = () => api.post(url.API_URL_PHOTO_REMOVE).then(r=>r.data)
export const changePassword = (old_password:string, new_password:string) => api.post(url.API_URL_CHANGE_PASSWORD, {old_password:old_password, new_password:new_password}).then(r=>r.data)
