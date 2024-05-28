import { postFakeLogin } from "helpers/fakebackend_helper";
import { loginError, loginSuccess, logoutSuccess } from "./reducer";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from "redux";
import { RootState } from "slices";
import { getFirebaseBackend } from "helpers/firebase_helper";
import { GetThunkAPI, createAsyncThunk } from "@reduxjs/toolkit";
import {apiLogin, apiLogout, apiProfile, apiRefresh, apiSignUp} from "services/auth"

interface User {
    username: string;
    password: string;
}

interface Bio{
    "first_name": string,
    "last_name": string,
    "email": string,
    "username": string,
    "user_id": number,
    "bio": string,
    "phone": string,
    "created_date": string
}

export const loginUser = (
    user: User,
    history: any
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch: Dispatch) => {    
    try {
        let response: any;

        response = await apiLogin({
            username:user.username,
            password:user.password
        })

        console.log(response);
        
        if (response) {
            dispatch(loginSuccess(response));
            history("/dashboard");
        }
    } catch (error) {
        console.log(error);
        
        dispatch(loginError(error));
    }
};

export const logoutUser = () => async (dispatch: Dispatch) => {
    try {
        await apiLogout()
    } catch (error) {
        dispatch(loginError(error));
    }
}