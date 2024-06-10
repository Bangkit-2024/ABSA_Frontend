import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as model from 'helpers/api_data_models'
import {
    getReview,
    listReview,
    removeReview,
    uploadReviewThunk
} from "./thunk"

interface ReviewState {
    reviews : model.dataReview[]
    error: any;
}

const initialState: ReviewState = {
    reviews:[],
    error:{}
};

const loginSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(uploadReviewThunk.fulfilled,(state,action:any)=>{
            state.reviews.push(action.payload);
        })

        builder.addCase(uploadReviewThunk.rejected,(state,action:any)=>{
            state.error = action.payload.error || null;
        })

        builder.addCase(listReview.fulfilled,(state , action : any)=>{
            state.reviews = action.payload
        })
        builder.addCase(listReview.rejected, (state, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(getReview.rejected, (state, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(removeReview.fulfilled, (state, action: any) => {
            state.reviews = state.reviews.filter(
                (review:any) => review.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(removeReview.rejected, (state, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default loginSlice.reducer;
