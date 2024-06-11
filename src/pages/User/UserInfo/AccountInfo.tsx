import React, { ChangeEvent } from "react";
import {
  BadgeCheck,
  ImagePlus,
  DeleteIcon,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Image
import { createSelector } from "reselect";
import { RootState } from "slices";
import { hashWord } from "helpers/processdata/process";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, removeProfile } from "slices/thunk";

const AccountInfo = ({ className, description }: any) => {
  const userSelector = createSelector(
    (state: RootState) => state.Profile,
    (result) => ({
      profile: result.user,
      uniqueCode: hashWord(result.user!.created_date!),
      photo: result.user?.photo ? `${process.env.REACT_APP_BACKEND_URL}${result.user?.photo}` : null,
    })
  );
  const { profile, uniqueCode, photo } = useSelector(userSelector);

  const dispatch = useDispatch<any>()
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check if the file is an image
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file);
        dispatch(editProfile({photo:file}))
      } else {
        toast.error("Please upload a valid image file.", {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          icon: false,
          closeButton: false,
        });
      }
    }
  };

  const handleImageRemove = () => {
    dispatch(removeProfile())
  };

  return (
    <React.Fragment>
      <div className={className}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-10 text-justify">
          <div className="lg:col-span-2 2xl:col-span-1 px-4 ml-2">
            <div className="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
              <img
                src={
                  photo as string ??
                  `https://api.dicebear.com/8.x/thumbs/svg?seed=${uniqueCode}`
                }
                alt=""
                className="object-cover border-0 rounded-full img-thumbnail user-profile-image"
              />
              <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                {(photo === null || photo =="") ? (
                  <>
                    <input
                      id="profile-img-file-input"
                      type="file"
                      accept="image/*" // Ensure only image files can be selected
                      className="hidden profile-img-file-input"
                      onChange={handleImageChange}
                    />
                    <label
                      htmlFor="profile-img-file-input"
                      className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit"
                    >
                      <ImagePlus className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></ImagePlus>
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type="button"
                      className="hidden profile-img-file-input"
                    />
                    <label
                      htmlFor="profile-img-file-input"
                      className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit"
                    >
                      <DeleteIcon className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500" onClick={handleImageRemove}></DeleteIcon>
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-10 2xl:col-span-9 mx-10">
            <h5 className="mb-1">
              {profile?.username}{" "}
              <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20"></BadgeCheck>
            </h5>
            <p className="mt-4 text-slate-500 dark:text-zink-200">
              {profile?.first_name} {profile?.last_name}
            </p>
            <h6 className="mb-3 text-15">About Me</h6>
            <p className="mb-2 text-slate-500 dark:text-zink-200">
              {profile?.bio}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AccountInfo;
