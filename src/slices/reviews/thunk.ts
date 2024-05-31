import {getReviewDetail, getReviewList, deleteReview, postReview} from 'services/backend_services'
import { toast } from "react-toastify";
import { createAsyncThunk } from '@reduxjs/toolkit';
import {dataReview} from 'helpers/api_data_models'
import { apiRefresh } from 'services/auth';
import {logoutUser} from 'slices/thunk'

export const listReview = createAsyncThunk("review/list", async (_,thunkAPI) => {
    try {
        const response :any = await getReviewList();
        return response
    } catch (error) {
        apiRefresh().catch(
           ()=> thunkAPI.dispatch(logoutUser())
        )
        return thunkAPI.rejectWithValue("Terjadi Kesalahan");
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