import React, { ChangeEvent } from "react";
import { BadgeCheck, MapPin, UserCircle, ImagePlus } from "lucide-react";

// IMage
import avatar1 from "assets/images/users/avatar-1.png";

const AccountInfo = ({ className }: any) => {

    const [selectedImage, setSelectedImage] = React.useState<string | ArrayBuffer | null>(avatar1);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <React.Fragment>
            <div className={className}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-12 ">
                <div className="lg:col-span-2 2xl:col-span-1 px-4">
                        <div className="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                            <img src={selectedImage?.toString() ?? avatar1} alt="" className="object-cover border-0 rounded-full img-thumbnail user-profile-image" />
                            <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                                <input id="profile-img-file-input" type="file"
                                    className="hidden profile-img-file-input"
                                    onChange={handleImageChange} />
                                <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                                    <ImagePlus className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></ImagePlus>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-10 2xl:col-span-9 ml-10">
                        <h5 className="mb-1">Paula Keenan <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20"></BadgeCheck></h5>
                        <div className="flex gap-3 mb-4">
                            <p className="text-slate-500 dark:text-zink-200"><UserCircle className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></UserCircle> CEO & Founder</p>
                            <p className="text-slate-500 dark:text-zink-200"><MapPin className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></MapPin> Los Angeles, California</p>
                        </div>
                        <ul className="flex flex-wrap gap-3 mt-4 text-center divide-x divide-slate-200 dark:divide-zink-500 rtl:divide-x-reverse">
                            <li className="px-5">
                                <h5>1542</h5>
                                <p className="text-slate-500 dark:text-zink-200">Following</p>
                            </li>
                            <li className="px-5">
                                <h5>10.65k</h5>
                                <p className="text-slate-500 dark:text-zink-200">Followers</p>
                            </li>
                            <li className="px-5">
                                <h5>115+</h5>
                                <p className="text-slate-500 dark:text-zink-200">Products</p>
                            </li>
                        </ul>
                        <p className="mt-4 text-slate-500 dark:text-zink-200">Strong leader and negotiator adept at driving collaboration and innovation. Highly accomplished CEO & Founder with 10+ years of experience creating, launching and leading successful business ventures. Proven ability to build relationships, drive customer loyalty and increase profitability.</p>
                    </div>
                    <div className="lg:col-span-12 2xl:col-span-2">
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default AccountInfo;