// dashboard
import Ecommerce from "pages/Dashboards/Ecommerce";


// HR Management
import EmployeeList from "pages/HRManagement/EmployeeList";
import Holidays from "pages/HRManagement/Holidays";
import LeaveManageEmployee from "pages/HRManagement/Leaves Manage/LeaveManageEmployee";
import AddLeaveEmployee from "pages/HRManagement/Leaves Manage/AddLeaveEmployee";
import LeaveManageHR from "pages/HRManagement/Leaves Manage/LeaveManageHR";
import AddLeaveHR from "pages/HRManagement/Leaves Manage/AddLeaveHR";
import AttendanceHR from "pages/HRManagement/Attendance/AttendanceHR";
import MainAttendance from "pages/HRManagement/Attendance/MainAttendance";
import Departments from "pages/HRManagement/Departments";
import Estimates from "pages/HRManagement/Sales/Estimates";
import Payments from "pages/HRManagement/Sales/Payments";
import Expenses from "pages/HRManagement/Sales/Expenses";
import EmployeeSalary from "pages/HRManagement/Payroll/EmployeeSalary";
import Payslip from "pages/HRManagement/Payroll/Payslip";
import CreatePayslip from "pages/HRManagement/Payroll/CreatePayslip";

// Notes
import Notes from "pages/Notes";

// Social Media
import Friends from "pages/SocialMedia/Friends";
import Event from "pages/SocialMedia/Event";
import WatchVideo from "pages/SocialMedia/WatchVideo";
import Marketplace from "pages/SocialMedia/Marketplace";

// Invoices
import InvoiceListView from "pages/Invoices/ListView";
import InvoiceAddNew from "pages/Invoices/AddNew";
import InvoiceOverview from "pages/Invoices/Overview";

// Users
import UserListView from "pages/Users/ListView";
import UserGridView from "pages/Users/GridView";

// Ui element

// plugins
import PSimpleBar from "pages/Components/Plugins/Simplebar";
import PLightBox from "pages/Components/Plugins/Lightbox";
import SwiperSlider from "pages/Components/Plugins/SwiperSlider";
import ScrollHint from "pages/Components/Plugins/ScrollHint";
import VideoPlayer from "pages/Components/Plugins/VideoPlayer";

// navbar
import NavBars from "pages/Components/Navigation/Navbars";
import NavTabs from "pages/Components/Navigation/Tabs";
import NavigationBreadcrumb from "pages/Components/Navigation/NavigationBreadcrumb";
import Pagination from "pages/Components/Navigation/Pagination";

// forms
import FormsBasic from "pages/Components/Forms/Basic";
import FormValidation from "pages/Components/Forms/Validation";
import InputMask from "pages/Components/Forms/InputMask";
import FormSelect from "pages/Components/Forms/Select";
import CheckboxRadio from "pages/Components/Forms/CheckboxRadio";
import FormSwitches from "pages/Components/Forms/Switches";
import FormWizard from "pages/Components/Forms/Wizard/FormWizard";
import FileUpload from "pages/Components/Forms/FileUpload";
import FormDatePicker from "pages/Components/Forms/Datepicker";
import FormTimePicker from "pages/Components/Forms/Timepicker";
import FormColorPicker from "pages/Components/Forms/Colorpicker";
import FormMultiSelect from "pages/Components/Forms/MultiSelect";
import FormInputSpin from "pages/Components/Forms/InputSpin";
import FormClipboard from "pages/Components/Forms/Clipboard";
import EditorClassic from "pages/Components/Forms/Editor/EditorClassic";
import BasicTable from "pages/Components/Table/Basic";
import ReactDataTable from "pages/Components/Table/ReactTable";
import RemixIcon from "pages/Components/Icons/Remix";
import LucidIcon from "pages/Components/Icons/Lucide";
import MapsGoogle from "pages/Components/MapsGoogle";
import MapsLeaflet from "pages/Components/MapsLeaflet";

//Charts

// Landing
import OnePage from "pages/Components/Landing/Onepage";
import Product from "pages/Components/Landing/Product";

// auth
import Basic from "pages/AuthenticationInner/Login/Basic";
import LoginCover from "pages/AuthenticationInner/Login/LoginCover";
import LoginBoxed from "pages/AuthenticationInner/Login/LoginBoxed";
import LoginModern from "pages/AuthenticationInner/Login/LoginModern";

//Register
import BasicRegister from "pages/AuthenticationInner/Register/Basic";
import RegisterCover from "pages/AuthenticationInner/Register/RegisterCover";
import RegisterBoxed from "pages/AuthenticationInner/Register/RegisterBoxed";
import RegisterModern from "pages/AuthenticationInner/Register/RegisterModern";

// EmailVerify
import BasicEmailVerify from "pages/AuthenticationInner/VerifyEmail/Basic";
import EmailCover from "pages/AuthenticationInner/VerifyEmail/EmailCover";
import EmailModern from "pages/AuthenticationInner/VerifyEmail/EmailModern";

// TwoSteps
import BasicTwoSteps from "pages/AuthenticationInner/TwoSteps/Basic";
import TwoStepsCover from "pages/AuthenticationInner/TwoSteps/TwoStepsCover";
import TwoStepsBoxed from "pages/AuthenticationInner/TwoSteps/TwoStepsBoxed";
import TwoStepsModern from "pages/AuthenticationInner/TwoSteps/TwoStepsModern";

// Logout
import BasicLogout from "pages/AuthenticationInner/Logout/Basic";
import LogoutCover from "pages/AuthenticationInner/Logout/LogoutCover";
import LogoutBoxed from "pages/AuthenticationInner/Logout/LogoutBoxed";
import LogoutModern from "pages/AuthenticationInner/Logout/LogoutModern";

// Reset Password
import BasicResetPassword from "pages/AuthenticationInner/ResetPassword/Basic";
import ResetPasswordCover from "pages/AuthenticationInner/ResetPassword/ResetPasswordCover";
import ResetPasswordBoxed from "pages/AuthenticationInner/ResetPassword/ResetPasswordBoxed";
import ResetPasswordModern from "pages/AuthenticationInner/ResetPassword/ResetPasswordModern";

// Create Password
import BasicCreatePassword from "pages/AuthenticationInner/CreatePassword/Basic";
import CreatePasswordModern from "pages/AuthenticationInner/CreatePassword/CreatePasswordModern";
import CreatePasswordCover from "pages/AuthenticationInner/CreatePassword/CreatePasswordCover";
import CreatePasswordBoxed from "pages/AuthenticationInner/CreatePassword/CreatePasswordBoxed";
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/LogOut";
import Pages404 from "pages/AuthenticationInner/Pages404";
import Register from "pages/Authentication/Register";
import UserProfile from "pages/Authentication/UserProfile";
import Account from "pages/Pages/Account";
import ComingSoon from "pages/AuthenticationInner/ComingSoon";
import Offline from "pages/AuthenticationInner/Offline";
import Maintenance from "pages/AuthenticationInner/Maintenance";
import Settings from "pages/Pages/Settings";
import Pricing from "pages/Pages/Pricing";
import Faqs from "pages/Pages/Faqs";
import ContactUs from "pages/Pages/ContactUs";

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard
  { path: "/", component: Ecommerce },
  { path: "/dashboard", component: Ecommerce },

];

const publicRoutes = [
  // Landing
  { path: "/onepage-landing", component: OnePage },
  { path: "/product-landing", component: Product },

  // auth
  { path: "/auth-login-basic", component: Basic },
  { path: "/auth-login-cover", component: LoginCover },
  { path: "/auth-login-boxed", component: LoginBoxed },
  { path: "/auth-login-modern", component: LoginModern },

  // Register
  { path: "/auth-register-basic", component: BasicRegister },
  { path: "/auth-register-cover", component: RegisterCover },
  { path: "/auth-register-boxed", component: RegisterBoxed },
  { path: "/auth-register-modern", component: RegisterModern },

  // Verify Email
  { path: "/auth-verify-email-basic", component: BasicEmailVerify },
  { path: "/auth-verify-email-cover", component: EmailCover },
  { path: "/auth-verify-email-modern", component: EmailModern },

  // two steps
  { path: "/auth-two-steps-basic", component: BasicTwoSteps },
  { path: "/auth-two-steps-cover", component: TwoStepsCover },
  { path: "/auth-two-steps-boxed", component: TwoStepsBoxed },
  { path: "/auth-two-steps-modern", component: TwoStepsModern },

  // logout
  { path: "/auth-logout-basic", component: BasicLogout },
  { path: "/auth-logout-cover", component: LogoutCover },
  { path: "/auth-logout-boxed", component: LogoutBoxed },
  { path: "/auth-logout-modern", component: LogoutModern },

  //Reset Password
  { path: "/auth-reset-password-basic", component: BasicResetPassword },
  { path: "/auth-reset-password-cover", component: ResetPasswordCover },
  { path: "/auth-reset-password-boxed", component: ResetPasswordBoxed },
  { path: "/auth-reset-password-modern", component: ResetPasswordModern },

  //Create Password
  { path: "/auth-create-password-basic", component: BasicCreatePassword },
  { path: "/auth-create-password-cover", component: CreatePasswordCover },
  { path: "/auth-create-password-boxed", component: CreatePasswordBoxed },
  { path: "/auth-create-password-modern", component: CreatePasswordModern },

  // coming soon
  { path: "/pages-coming-soon", component: ComingSoon },

  // Error
  { path: "/pages-offline", component: Offline },
  { path: "/pages-404", component: Pages404 },

  // Maintenance
  { path: "/pages-maintenance", component: Maintenance },


  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },

]

export { authProtectedRoutes, publicRoutes };
