import { createSlice } from "@reduxjs/toolkit"
import { bootstrap } from "./thunk"
import { logoutSuccess } from "slices/auth/login/reducer"

interface bootState{
    isLoading : boolean
    attempt:number,
}

const initialState : bootState  = {
    isLoading : true,
    attempt:0
}

const MAX_ATTEMPT = 3

const bootSlice = createSlice({
    name:"boot",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(bootstrap.fulfilled, (state, action:any)=>{
            state.isLoading = false
            state.attempt = 0
        })
        builder.addCase(bootstrap.rejected, (state,action:any)=>{
            if(state.attempt > MAX_ATTEMPT){
                state.isLoading = false
                state.attempt = 0
            }else{
                state.isLoading = true
                state.attempt++
            }
        })
        builder.addCase(logoutSuccess,(state,action:any)=>{
            state.attempt = 0
        })
    }
})

export default bootSlice.reducer;
