import React, { ChangeEvent } from "react";
import { BadgeCheck, MapPin, UserCircle, ImagePlus } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Image
import avatar1 from "assets/images/users/avatar-1.png";

const AccountInfo = ({ className, description }: any) => {

    const [selectedImage, setSelectedImage] = React.useState<string | ArrayBuffer | null>(avatar1);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            // Check if the file is an image
            if (file.type.startsWith('image/')) {
                const imageUrl = URL.createObjectURL(file);
                setSelectedImage(imageUrl);
                toast.success("Image successfully updated!", {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "colored",
                    icon: false,
                    closeButton: false
                });
            } else {
                toast.error('Please upload a valid image file.', {
                    position: "top-right",
                    autoClose: 5000,
                    theme: "colored",
                    icon: false,
                    closeButton: false
                });
            }
        }
    };

    return (
        <React.Fragment>
            <div className={className}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-10 text-justify">
                    <div className="lg:col-span-2 2xl:col-span-1 px-4 ml-2">
                        <div className="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                            <img src={selectedImage?.toString() ?? avatar1} alt="" className="object-cover border-0 rounded-full img-thumbnail user-profile-image" />
                            <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                                <input
                                    id="profile-img-file-input"
                                    type="file"
                                    accept="image/*"  // Ensure only image files can be selected
                                    className="hidden profile-img-file-input"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                                    <ImagePlus className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></ImagePlus>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-10 2xl:col-span-9 mx-10">
                        <h5 className="mb-1">Paula Keenan <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20"></BadgeCheck></h5>
                        <p className="mt-4 text-slate-500 dark:text-zink-200">{description}</p>
                        <h6 className="mb-3 text-15">About Me</h6>
                        <p className="mb-2 text-slate-500 dark:text-zink-200">A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer.</p>
                        <p className="text-slate-500 dark:text-zink-200">As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs.</p>
                    </div>
                    {/* <div className="card">
                        <div className="card-body">
                            <h6 className="mb-3 text-15">About Me</h6>
                            <p className="mb-2 text-slate-500 dark:text-zink-200">A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer.</p>
                            <p className="text-slate-500 dark:text-zink-200">As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing & Design with designing team in the company to build perfect web designs.</p>
                        </div>
                    </div> */}
                    {/* <div className="lg:col-span-12 2xl:col-span-2">
                    </div>
                    <div className="lg:col-span-12 2xl:col-span-2">
                    </div> */}
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
}

export default AccountInfo;
