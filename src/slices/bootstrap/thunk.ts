import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit";
import { listReview, logoutUser } from "slices/thunk";

export const bootstrap = createAsyncThunk(
    "bootstrap/initial",
    async (_,thunkAPI:GetThunkAPI<any>) => {
        try {
            await Promise.all([
                thunkAPI.dispatch(listReview()).unwrap()
            ])
            return false;
        } catch (error) {
            return thunkAPI.rejectWithValue("Terjadi Kesalahan")
        }
    }
)