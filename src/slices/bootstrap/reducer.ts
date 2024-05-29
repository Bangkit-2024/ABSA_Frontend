import { createSlice } from "@reduxjs/toolkit"
import { bootstrap } from "./thunk"

interface bootState{
    isLoading : boolean
}

const initialState : bootState  = {
    isLoading : true
}

const bootSlice = createSlice({
    name:"boot",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(bootstrap.fulfilled, (state, action:any)=>{
            state.isLoading = false
        })
    }
})

export default bootSlice.reducer;
