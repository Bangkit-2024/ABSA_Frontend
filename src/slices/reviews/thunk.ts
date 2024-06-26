import {getReviewDetail, getReviewList, deleteReview, uploadReviewData, bulkPredict} from 'services/backend_services'
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
        thunkAPI.dispatch(listReview())
        return response
        
    }catch(error :any){        
        return thunkAPI.rejectWithValue(error.response.data || error.toString())
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
        thunkAPI.dispatch(listReview())
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue("Terjadi Kesalahan");
    }
});

export const bulkReview = createAsyncThunk("review/predict_bulk", async (_,thunkAPI)=>{
    try {
        const response = await bulkPredict()
        thunkAPI.dispatch(listReview())
        return response

      } catch (error) {
        return thunkAPI.rejectWithValue("There was an error ");
      }
})