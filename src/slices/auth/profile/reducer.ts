import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProfile } from "helpers/api_data_models";
import { editProfile, getProfile, removeProfile } from "./thunk";

interface ProfileState {
    user: UserProfile | null;
    error: any;
    success: boolean;
}

const initialState: ProfileState = {
    user: null,
    error: "",
    success: false
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(editProfile.fulfilled, (state,action:any )=>{
            state.user = action.payload;
            state.success = true;
        })
        builder.addCase(editProfile.rejected, (state,action:any )=>{
            state.error = action.payload;
            state.success = false;
        })
        builder.addCase(getProfile.rejected, (state,action:any )=>{
            state.error = action.payload;
            state.success = false;
        })
        builder.addCase(getProfile.fulfilled, (state,action:any )=>{
            state.user = action.payload;
            state.success = true;
        })
        builder.addCase(removeProfile.rejected, (state,action:any )=>{
            state.error = action.payload;
            state.success = false;
        })
        builder.addCase(removeProfile.fulfilled, (state,action:any )=>{
            state.user = action.payload;
            state.success = true;
        })
    },
})

export default profileSlice.reducer;
