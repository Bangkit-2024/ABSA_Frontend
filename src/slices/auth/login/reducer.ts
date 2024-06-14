import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const auth = JSON.parse(localStorage.getItem('authUser')||`{"refresh":null,"access":null}`)

interface UserState {
    refresh:string,
    access:string
}

interface LoginState {
    user: UserState | null;
    error: string;
    success: boolean;
    isUserLogout: boolean;
}

const initialState: LoginState = {
    user: auth,
    error: "",
    success: false,
    isUserLogout: false
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginSuccess(state: LoginState, action: PayloadAction<string |  any >) {
            state.user  = action.payload;
            state.success = true;
        },
        loginError(state: LoginState, action: PayloadAction<string | any>) {
            state.error = action.payload;
            state.success = false;
        },
        logoutSuccess(state: LoginState, action: PayloadAction<boolean>) {
            state.isUserLogout = action.payload;
            state.success = false
        }
    },
});

export const { loginSuccess, loginError, logoutSuccess } = loginSlice.actions;
export default loginSlice.reducer;
