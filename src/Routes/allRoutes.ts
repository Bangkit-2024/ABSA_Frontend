// dashboard
import Dashboard from "pages/Dashboards";

//Charts


// Landing
import OnePage from "pages/Components/Landing/Onepage";

// auth
import LoginModern from "pages/AuthenticationInner/Login/LoginModern";

//Register

// EmailVerify
import BasicEmailVerify from "pages/AuthenticationInner/VerifyEmail/Basic";

// TwoSteps
import BasicTwoSteps from "pages/AuthenticationInner/TwoSteps/Basic";

// Logout
import BasicLogout from "pages/AuthenticationInner/Logout/Basic";

// Reset Password
import BasicResetPassword from "pages/AuthenticationInner/ResetPassword/Basic";

// Create Password
import Logout from "pages/Authentication/LogOut";
import Register from "pages/Authentication/Register";
import ComingSoon from "pages/AuthenticationInner/ComingSoon";
import Maintenance from "pages/AuthenticationInner/Maintenance";
import Offline from "pages/AuthenticationInner/Offline";
import Pages404 from "pages/AuthenticationInner/Pages404";
import Login from "pages/Authentication/Login";

// File Upload
import FileUpload from "pages/Components/FileUpload";

// Profile Information
import userInfo from "pages/User/UserInfo/index";

// User Profile Settings
import userSetting from "pages/User/UserSettings/index";

// Review Guesser
import reviewGuesser from 'pages/Guess/index'

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: Dashboard },
  { path: "/dashboard", component: Dashboard },

  // File Upload
  { path: "/file-upload", component: FileUpload },

  // User Profile Information
  { path: "/user-information", component: userInfo},

  // User Profile settings
  { path: "/setting-user-profile", component: userSetting },

  // File uploads
  { path: "/file-upload", component: FileUpload },

  // Guess Review
  { path: "/review-predict", component: reviewGuesser },

];

const publicRoutes = [
  // Landing
  { path: "/landing-page", component: OnePage },
  // Verify Email
  { path: "/auth-verify-email", component: BasicEmailVerify },

  // two steps
  { path: "/auth-two-steps", component: BasicTwoSteps },

  // logout
  { path: "/auth-logout", component: BasicLogout },

  //Reset Password
  { path: "/auth-reset-password", component: BasicResetPassword },

  //Create Password
  // coming soon
  { path: "/pages-coming-soon", component: ComingSoon },

  // Error
  { path: "/offline", component: Offline },
  { path: "/pages-404", component: Pages404 },

  // Maintenance
  { path: "/maintenance", component: Maintenance },


  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },
]

export { authProtectedRoutes, publicRoutes };
