import {getReviewDetail, getReviewList, deleteReview, uploadReviewData} from 'services/backend_services'
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

export const uploadReviewThunk = createAsyncThunk("review/upload", async (file:any,thunkAPI)=>{
    try{
        const response = await uploadReviewData(file)
        return response
        
    }catch(error){
        return thunkAPI.rejectWithValue("Terjadi Kesalahan")
    }
})

export const getReview = createAsyncThunk("review/get", async (id:string,thunkAPI) => {
    try {
        const response = getReviewDetail(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue("Terjadi Kesalahan");
    }
});

export const removeReview = createAsyncThunk("review/delete", async (id:string,thunkAPI) => {
    try {
        const response = deleteReview(id);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue("Terjadi Kesalahan");
    }
});