import { createAsyncThunk } from "@reduxjs/toolkit";
import { listReview, logoutUser } from "slices/thunk";

export const bootstrap = createAsyncThunk(
    "bootstrap/initial",
    async (_, thunkAPI) => {
        try {
            await thunkAPI.dispatch(listReview())
            return true;
        } catch (e) {
            // await thunkAPI.dispatch(logoutUser())
        }
        return false;
    }
)