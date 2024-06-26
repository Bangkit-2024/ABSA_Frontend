import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePw } from "slices/thunk";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ChangePasswordTabs = () => {
    const [passwordVisibility, setPasswordVisibility] = useState<Record<string, boolean>>({});
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const togglePasswordVisibility = (inputId: string) => {
        setPasswordVisibility(prevState => ({
            ...prevState,
            [inputId]: !prevState[inputId]
        }));
    };

    const dispatch = useDispatch<any>()

    const handleChangePassword = () => {
    

    
        if (newPassword !== confirmPassword) {
            withReactContent(Swal).fire({
                title: "New password and confirm password don't match",
                icon:"error"
              })
            return; // Stop further execution
        }
    
        // Your existing success notification code
        dispatch(changePw({new_password:newPassword,old_password:oldPassword})).unwrap().then(
            ()=>                withReactContent(Swal).fire({
                title: "Password Changed Successfuly",
                icon:"success"
              })
            )
        
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Changes Password</h6>
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueOld" className="inline-block mb-2 text-base font-medium">Old Password*</label>
                                <div className="relative">
                                <input 
                                    type={passwordVisibility["oldpasswordInput2"] ? "text" : "password"} 
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                    id="oldpasswordInput2" 
                                    placeholder="Enter current password"
                                    value={oldPassword} // Mengaitkan nilai old password dengan state oldPassword
                                    onChange={(e) => setOldPassword(e.target.value)} // Memperbarui nilai oldPassword saat input berubah
                                />
                                    <button 
                                        className="absolute top-2 ltr:right-4 rtl:left-4" 
                                        type="button" 
                                        onClick={() => togglePasswordVisibility("oldpasswordInput2")}
                                    >
                                        <i className="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValueNew" className="inline-block mb-2 text-base font-medium">New Password*</label>
                                <div className="relative">
                                    <input 
                                        type={passwordVisibility["NewpasswordInput"] ? "text" : "password"} 
                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                        id="NewpasswordInput" 
                                        placeholder="Enter new password" 
                                        value={newPassword} // <- Gunakan nilai newPassword di sini
                                        onChange={(e) => setNewPassword(e.target.value)} // <- Perbarui nilai newPassword saat input berubah
                                    />
                                    <button 
                                        className="absolute top-2 ltr:right-4 rtl:left-4" 
                                        type="button" 
                                        onClick={() => togglePasswordVisibility("NewpasswordInput")}
                                    >
                                        <i className="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Confirm Password*</label>
                                <div className="relative">
                                    <input 
                                        type={passwordVisibility["ConfirmpasswordInput"] ? "text" : "password"} 
                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                        id="ConfirmpasswordInput" 
                                        placeholder="Confirm password" 
                                        value={confirmPassword} // <- Gunakan nilai confirmPassword di sini
                                        onChange={(e) => setConfirmPassword(e.target.value)} // <- Perbarui nilai confirmPassword saat input berubah
                                    />
                                    <button 
                                        className="absolute top-2 ltr:right-4 rtl:left-4" 
                                        type="button" 
                                        onClick={() => togglePasswordVisibility("ConfirmpasswordInput")}
                                    >
                                        <i className="align-middle ri-eye-fill text-slate-500 dark:text-zink-200"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-end xl:col-span-12">
                                <button 
                                    type="button" 
                                    className="text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10"
                                    onClick={handleChangePassword}
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ChangePasswordTabs;
