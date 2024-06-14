import React from "react";

// Image
import verifyEmail from "assets/images/verify-email.png";

const BasicEmailVerify = () => {

    document.title = "Verify Email | Bizzagi - Aspect Based Sentiment Analysis";

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-gray-200', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-gray-200', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
        }
    }, []);

    return (
        <React.Fragment>
            <div className="relative">
                {/* <AuthIcon /> */}
                <div className="mb-0 w-screen lg:w-[500px] card shadow-lg border-none shadow-slate-100 dark:shadow-zink-500/20 relative">
                    <div className="!px-10 !py-12 card-body">

                          <div className="pl-6 text-center flex items-center justify-center">
                            <img src={verifyEmail} alt="" className="flex w-1/2 mx-auto" />
                        </div>

                        <div className="text-center">
                            <h4 className="mb-4 text-custom-500 dark:text-custom-500">Verify your email</h4>
                            <p className="mb-6 text-slate-500 dark:text-zink-200">We've sent an email to your account, to verify your email address and activate your account. The link in the email will expire in 1 hours.</p>
                            <p> <a href="#!" className="text-custom-500">Click Here </a>if you did not receive an email</p>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicEmailVerify;