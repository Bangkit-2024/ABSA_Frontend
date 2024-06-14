import axios from "axios";

const API_URL   = `${process.env.REACT_APP_BACKEND_URL}/api/v1/`

const AUTH_LOGIN  = API_URL+"auth/"

interface userLogin{
  username:string,
  password:string
}

interface userRegister extends userLogin{
  first_name: string,
  last_name: string,
  email:string
  password2:string
}

export function apiLogin(user_login:userLogin) {
  return axios.post(AUTH_LOGIN + "login/", user_login)
  .then((response) => {
    console.log(response);    
    if (response.data) {
      localStorage.setItem("authUser", JSON.stringify(response.data));
      return response.data;
  }})
}

export async function apiLogout() {
  localStorage.removeItem("authUser");
  localStorage.removeItem("profileUser");
  return true
}

export async function apiSignUp(user_register:userRegister) {
  return axios.post(AUTH_LOGIN + "register/", user_register);
}

export function apiProfile() {
  return axios.get(AUTH_LOGIN + "refresh/")
  .then(response=>{
      if(response.data){
        localStorage.setItem("authProfile", JSON.stringify(response.data));
      }
  })
}

export async function apiRefresh() {
  const token = JSON.parse(localStorage.getItem("authUser")||"{}");
  const response = await axios
    .post(AUTH_LOGIN + "refresh/", { refresh: token.refresh||"" });
  const new_token = {
    ...token,
    access: response.data.access,
  };
  localStorage.setItem("authUser", JSON.stringify(new_token));  
  return new_token;
}

const AuthService = {
  apiSignUp,
  apiLogin,
  apiLogout,
  apiProfile,
  apiRefresh
};

export default AuthService;
