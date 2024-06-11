import { deleteProfilePhoto, editProfileData, getProfileData } from "services/backend_services";
import { UserProfile as User, UserProfile } from "helpers/api_data_models";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editProfile = createAsyncThunk("auth/edit_profile",async(user:UserProfile,thunkAPI)=>{
    try {

        let response = await editProfileData(user)
        
        return response

    } catch (error : any) {     
        return thunkAPI.rejectWithValue(error.response.data || error.toString())
    }
})

export const getProfile = createAsyncThunk("auth/profile", async (_,thunkAPI)=>{
    try{
        let response = await getProfileData();
        return response
    }catch(error : any){
        thunkAPI.rejectWithValue(error.response.data || error.toString())
    }
})

export const removeProfile = createAsyncThunk("auth/profile_remove", async (_,thunkAPI)=>{
    try {
        let response = await deleteProfilePhoto();
        return response;
    } catch (error : any) {
        thunkAPI.rejectWithValue(error.response.data || error.toString())
    }
})