import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PersonalTabs = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        birthDate: "",
        joiningDate: "",
        description: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };
    
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };
    

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const handleUpdateClick = () => {
        const { firstName, lastName, phoneNumber, emailAddress, birthDate, joiningDate, description } = formValues;
    
        // Memeriksa apakah setidaknya satu input telah diubah dari nilai awalnya
        if (!firstName && !lastName && !phoneNumber && !emailAddress && !description && !birthDate && !joiningDate) {
            // Tampilkan notifikasi kesalahan
            toast.error("Please update at least one field!", {
                position: "top-right",
                autoClose: 5000,
                theme: "colored",
                icon: false,
                closeButton: false
            });
            return;
        }
    
        toast.success("Personal information updated successfully!", {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
            icon: false,
            closeButton: false
        });
    };

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Personal Information</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Update your personal information here</p>
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValueFirst" className="inline-block mb-2 text-base font-medium">First Name</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    value={formValues.firstName}
                                    onChange={handleInputChange}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                    placeholder="Enter your first name" 
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValueLast" className="inline-block mb-2 text-base font-medium">Last Name</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    value={formValues.lastName}
                                    onChange={handleInputChange}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                    placeholder="Enter your last name" 
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValuePhone" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                <input 
                                    type="number" 
                                    id="phoneNumber" 
                                    value={formValues.phoneNumber} 
                                    onChange={handleInputChange}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                    placeholder="Enter your phone number" 
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValueEmail" className="inline-block mb-2 text-base font-medium">Email Address</label>
                                <input 
                                    type="email" 
                                    id="emailAddress" 
                                    value={formValues.emailAddress} 
                                    onChange={handleInputChange}
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                    placeholder="Enter your email address" 
                                />
                            </div>
                            <div className="xl:col-span-6">
                            <label htmlFor="birthDateInput" className="inline-block mb-2 text-base font-medium">Birth of Date</label>
                            <input 
                                type="date" 
                                id="birthDate" 
                                onChange={handleDateChange} 
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                required  // Menjadikan input ini wajib diisi sebelum formulir dapat dikirim
                            />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Joining Date</label>
                                <input 
                                    type="date" 
                                    id="joiningDate" 
                                    onChange={handleDateChange} 
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    required  // Menjadikan input ini wajib diisi sebelum formulir dapat dikirim
                                />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="exampleFormControlTextarea" className="block mb-2 text-base font-medium">Description</label>
                                <textarea 
                                    className="w-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" 
                                    id="description" 
                                    // value={formValues.description} 
                                    onChange={handleTextareaChange} 
                                    placeholder="Enter your description here..." 
                                    rows={5}
                                    />
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" onClick={handleUpdateClick}>Update</button>
                        </div>
                    </form>
                </div>
            </div >
        </React.Fragment >
    );
}

export default PersonalTabs;
