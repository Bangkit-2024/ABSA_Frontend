import {getReviewDetail, getReviewList, deleteReview, postReview} from 'services/backend_services'
import { toast } from "react-toastify";
import { createAsyncThunk } from '@reduxjs/toolkit';
import {dataReview} from 'helpers/api_data_models'

export const listReview = createAsyncThunk("review/list", async () => {
    try {
        const response :any = getReviewList();
        return response
    } catch (error) {
        return error;
    }
});

export const addReview = createAsyncThunk("review/add", async (review: dataReview) => {
    try {
        const response = postReview(review);
        const data = await response;
        toast.success("Review Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Review Added Failed", { autoClose: 2000 });
        return error;
    }
});

export const getReview = createAsyncThunk("review/get", async (id:string) => {
    try {
        const response = getReviewDetail(id);
        return response;
    } catch (error) {
        return error;
    }
});

export const removeReview = createAsyncThunk("review/delete", async (id:string) => {
    try {
        const response = deleteReview(id);
        return response;
    } catch (error) {
        return error;
    }
});