import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "slices";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { editProfile } from "slices/thunk";
import * as Yup from "yup";
import { UserProfile } from "helpers/api_data_models";

const PersonalTabs = () => {

  const profileSelector = createSelector(
    (state: RootState) => state.Profile,
    (profile) => ({
      profile: profile.user,
    })
  );

  const { profile } = useSelector(profileSelector);
  const dispatch = useDispatch<any>();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: profile?.first_name || "",
      last_name: profile?.last_name|| "",
      email: profile?.email|| "",
      bio: profile?.bio || "",
      phone: profile?.phone || "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please Fill this Field"),
      last_name: Yup.string().required("Please Fill this Field"),
      bio: Yup.string().max(500, "Max 500 Characters"),
      email: Yup.string().email("Please Fill Correct Email Format").required("Please Fill this Field"),
      phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Please Fill this Field"),
    }),

    onSubmit: (values: any) => {
      dispatch(editProfile(values));
    },
  });

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h6 className="mb-1 text-15">Personal Information</h6>
          <p className="mb-4 text-slate-500 dark:text-zink-200">
            Update your personal information here
          </p>
          <form
            action=""
            onSubmit={(event: any) => {
              event.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div className="xl:col-span-6">
                <label
                  htmlFor="inputValueFirst"
                  className="inline-block mb-2 text-base font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  onChange={validation.handleChange}
                  value={validation.values.first_name}
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter your value"
                />
                {validation.touched.first_name && validation.errors.first_name ? (
                  <div
                    id="username-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {validation.errors.first_name}
                  </div>
                ) : null}
              </div>
              <div className="xl:col-span-6">
                <label
                  htmlFor="inputValueLast"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  value={validation.values.last_name}
                  onChange={validation.handleChange}
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter your value"
                />
                {validation.touched.last_name && validation.errors.last_name ? (
                  <div
                    id="username-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {validation.errors.last_name}
                  </div>
                ) : null}
              </div>
              <div className="xl:col-span-6">
                <label
                  htmlFor="inputValuePhone"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="08xxxxxxxx"
                  value={validation.values.phone}
                  onChange={validation.handleChange}
                />
                {validation.touched.phone && validation.errors.phone ? (
                  <div
                    id="username-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {validation.errors.phone}
                  </div>
                ) : null}
              </div>
              <div className="xl:col-span-6">
                <label
                  htmlFor="inputValueEmail"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={validation.handleChange}
                  value={validation.values.email}

                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter your email address"
                />
                {validation.touched.email && validation.errors.email ? (
                  <div
                    id="username-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {validation.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="xl:col-span-12">
                <label
                  htmlFor="exampleFormControlTextarea"
                  className="block mb-2 text-base font-medium"
                >
                  Description
                </label>
                <textarea
                  className="w-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  id="bio"
                  onChange={validation.handleChange}
                  placeholder="Enter your description"
                  rows={5}
                  value={validation.values.bio}
                ></textarea>
                {validation.touched.bio && validation.errors.bio ? (
                  <div
                    id="username-error"
                    className="mt-1 text-sm text-red-500"
                  >
                    {validation.errors.bio}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-end mt-6 gap-x-4">
              <button
                type="submit"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                
              >
                Updates
              </button>
              <button
                type="button"
                className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonalTabs;
