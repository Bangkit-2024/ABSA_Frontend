import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import LoginReducer from "./auth/login/reducer";

// register
import RegisterReducer from "./auth/register/reducer";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

// review
import ReviewReducer from "./reviews/reducer"

import BootReducer from './bootstrap/reducer'



const rootReducer = combineReducers({
    Layout: LayoutReducer,
    Login: LoginReducer,
    Register: RegisterReducer,
    Profile: ProfileReducer,
    Review : ReviewReducer,
    Boot:BootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;