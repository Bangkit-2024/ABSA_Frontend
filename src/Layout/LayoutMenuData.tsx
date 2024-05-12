import { Award, CalendarDays, CircuitBoard, Codesandbox, FileText, LifeBuoy, LocateFixed, Mail, Map, MessageSquare, MonitorDot, PackagePlus, PictureInPicture2, PieChart, RadioTower, ScrollText, Share2, ShoppingBag, Table, Trophy, UserRound } from "lucide-react";

const menuData: any = [
    {
        label: 'menu',
        isTitle: true,
    },
    {
        id: "dashboard",
        label: 'Dashboards',
        link: "/#",
        icon: <MonitorDot />,
    },
    {
        label: 'Data',
        isTitle: true,
    },
    {
        id: 'chat',
        label: 'Upload Data',
        icon: <MessageSquare />,
        link: '/apps-chat',
        parentId: 2
    },
    {
        id: 'users',
        label: 'Users',
        icon: <UserRound />,
        parentId: 2,
        subItems: [
            {
                id: 'userlistview',
                label: 'List view',
                link: '/apps-users-list',
                parentId: 'users'
            },
            {
                id: 'usergridview',
                label: 'Grid View',
                link: '/apps-users-grid',
                parentId: 'users'
            }
        ]
    },
    {
        label: 'Pages',
        isTitle: true,
    },
    {
        id: 'authentication',
        label: 'Authentication',
        icon: <Award />,
        parentId: 2,
        subItems: [
            {
                id: 'login',
                label: 'Login',
                parentId: 'social',
                subItems: [
                    {
                        id: 'basic',
                        label: 'Basic',
                        link: '/auth-login-basic',
                        parentId: 'login'
                    },
                    {
                        id: 'cover',
                        label: 'Cover',
                        link: '/auth-login-cover',
                        parentId: 'login'
                    },
                    {
                        id: 'boxed',
                        label: 'Boxed',
                        link: '/auth-login-boxed',
                        parentId: 'login'
                    },
                    {
                        id: 'modern',
                        label: 'Modern',
                        link: '/auth-login-modern',
                        parentId: 'login'
                    },
                ]
            },
            {
                id: 'register',
                label: 'Register',
                parentId: 'social',
                subItems: [
                    {
                        id: 'registerbasic',
                        label: 'Basic',
                        link: '/auth-register-basic',
                        parentId: 'register'
                    },
                    {
                        id: 'registercover',
                        label: 'Cover',
                        link: '/auth-register-cover',
                        parentId: 'register'
                    },
                    {
                        id: 'registerboxed',
                        label: 'Boxed',
                        link: '/auth-register-boxed',
                        parentId: 'register'
                    },
                    {
                        id: 'registermodern',
                        label: 'Modern',
                        link: '/auth-register-modern',
                        parentId: 'register'
                    },
                ]
            },
            {
                id: 'verifyemail',
                label: 'Verify Email',
                parentId: 'social',
                subItems: [
                    {
                        id: 'verifyemailbasic',
                        label: 'Basic',
                        link: '/auth-verify-email-basic',
                        parentId: 'verifyemail'
                    },
                    {
                        id: 'verifyemailcover',
                        label: 'Cover',
                        link: '/auth-verify-email-cover',
                        parentId: 'verifyemail'
                    },
                    {
                        id: 'verifyemailmodern',
                        label: 'Modern',
                        link: '/auth-verify-email-modern',
                        parentId: 'verifyemail'
                    },
                ]
            },
            {
                id: 'twostep',
                label: 'Two Steps',
                parentId: 'social',
                subItems: [
                    {
                        id: 'twostepbasic',
                        label: 'Basic',
                        link: '/auth-two-steps-basic',
                        parentId: 'twostep'
                    },
                    {
                        id: 'twostepcover',
                        label: 'Cover',
                        link: '/auth-two-steps-cover',
                        parentId: 'twostep'
                    },
                    {
                        id: 'twostepboxed',
                        label: 'Boxed',
                        link: '/auth-two-steps-boxed',
                        parentId: 'twostep'
                    },
                    {
                        id: 'twostepmodern',
                        label: 'Modern',
                        link: '/auth-two-steps-modern',
                        parentId: 'twostep'
                    },
                ]
            },
            {
                id: 'logout',
                label: 'Logout',
                parentId: 'social',
                subItems: [
                    {
                        id: 'logoutbasic',
                        label: 'Basic',
                        link: '/auth-logout-basic',
                        parentId: 'logout'
                    },
                    {
                        id: 'logoutcover',
                        label: 'Cover',
                        link: '/auth-logout-cover',
                        parentId: 'logout'
                    },
                    {
                        id: 'logoutboxed',
                        label: 'Boxed',
                        link: '/auth-logout-boxed',
                        parentId: 'logout'
                    },
                    {
                        id: 'logoutmodern',
                        label: 'Modern',
                        link: '/auth-logout-modern',
                        parentId: 'logout'
                    },
                ]
            },
            {
                id: 'resetpw',
                label: 'Reset Password',
                parentId: 'social',
                subItems: [
                    {
                        id: 'resetpwbasic',
                        label: 'Basic',
                        link: '/auth-reset-password-basic',
                        parentId: 'resetpw'
                    },
                    {
                        id: 'resetpwcover',
                        label: 'Cover',
                        link: '/auth-reset-password-cover',
                        parentId: 'resetpw'
                    },
                    {
                        id: 'resetpwboxed',
                        label: 'Boxed',
                        link: '/auth-reset-password-boxed',
                        parentId: 'resetpw'
                    },
                    {
                        id: 'resetpwmodern',
                        label: 'Modern',
                        link: '/auth-reset-password-modern',
                        parentId: 'resetpw'
                    },
                ]
            },
            {
                id: 'createpw',
                label: 'Create Password',
                parentId: 'social',
                subItems: [
                    {
                        id: 'createpwbasic',
                        label: 'Basic',
                        link: '/auth-create-password-basic',
                        parentId: 'createpw'
                    },
                    {
                        id: 'createpwcover',
                        label: 'Cover',
                        link: '/auth-create-password-cover',
                        parentId: 'createpw'
                    },
                    {
                        id: 'createpwboxed',
                        label: 'Boxed',
                        link: '/auth-create-password-boxed',
                        parentId: 'createpw'
                    },
                    {
                        id: 'createpwmodern',
                        label: 'Modern',
                        link: '/auth-create-password-modern',
                        parentId: 'createpw'
                    },
                ]
            }
        ]
    },
    {
        id: 'pages',
        label: 'Pages',
        icon: <Codesandbox />,
        parentId: 2,
        subItems: [
            {
                id: 'account',
                label: 'Account',
                link: '/pages-account',
                parentId: 'pages'
            },
            {
                id: 'setting',
                label: 'Settings',
                link: '/pages-account-settings',
                parentId: 'pages'
            },
            {
                id: 'pricing',
                label: 'Pricing',
                link: '/pages-pricing',
                parentId: 'pages'
            },
            {
                id: 'faq',
                label: 'FAQs',
                link: '/pages-faqs',
                parentId: 'pages'
            },
            {
                id: 'contactus',
                label: 'Contact US',
                link: '/pages-contact-us',
                parentId: 'pages'
            },
            {
                id: 'comingsoon',
                label: 'Coming Soon',
                link: '/pages-coming-soon',
                parentId: 'pages'
            },
            {
                id: 'errorpage',
                label: 'Error Pages',
                parentId: 'pages',
                subItems: [
                    {
                        id: '404',
                        label: '404',
                        link: '/pages-404',
                        parentId: 'errorpage'
                    },
                    {
                        id: 'offline',
                        label: 'Offline',
                        link: '/pages-offline',
                        parentId: 'errorpage'
                    }
                ]
            },
            {
                id: 'maintenance',
                label: 'Maintenance',
                link: '/pages-maintenance',
                parentId: 'pages'
            },
        ]
    },
    {
        label: 'Upload File',
        isTitle: true,
    },

    {
        id: 'plugin',
        label: 'Plugins',
        icon: <PackagePlus />,
        subItems: [
            {
                id: 'simplebar',
                label: 'Simplebar',
                link: '/plugins-simplebar',
                parentId: 'plugin'
            },
            {
                id: 'lightbox',
                label: 'Lightbox',
                link: '/plugins-lightbox',
                parentId: 'plugin'
            },
            {
                id: 'swiper',
                label: 'Swiper Slider',
                link: '/plugins-swiper-slider',
                parentId: 'plugin'
            },
            {
                id: 'scrollhint',
                label: 'Scroll Hint',
                link: '/plugins-scroll-hint',
                parentId: 'plugin'
            },
            {
                id: 'videoplayer',
                label: 'Video Player',
                link: '/plugins-video-player',
                parentId: 'plugin'
            },
        ]
    },
    {
        id: 'navigation',
        label: 'Navigation',
        icon: <LocateFixed />,
        subItems: [
            {
                id: 'navbar',
                label: 'Navbar',
                link: '/navigation-navbars',
                parentId: 'navigation'
            },
            {
                id: 'tabs',
                label: 'Tabs',
                link: '/navigation-tabs',
                parentId: 'navigation'
            },
            {
                id: 'breadcrumb',
                label: 'Breadcrumb',
                link: '/navigation-breadcrumb',
                parentId: 'navigation'
            },
            {
                id: 'pagination',
                label: 'Pagination',
                link: '/navigation-pagination',
                parentId: 'navigation'
            },
        ]
    },
    {
        id: "form",
        label: 'Forms',
        link: "/#",
        icon: <LifeBuoy />,
        subItems: [
            {
                id: 'basicform',
                label: 'Basic',
                link: '/forms-basic',
                parentId: "form"
            },
            {
                id: 'validation',
                label: 'Validation',
                link: '/forms-validation',
                parentId: "form"
            },
            {
                id: 'inputmask',
                label: 'Input Mask',
                link: '/forms-input-mask',
                parentId: "form"
            },
            {
                id: 'select',
                label: 'Select',
                link: '/forms-select',
                parentId: "form"
            },
            {
                id: 'checkbox-radio',
                label: 'Checkbox & Radio',
                link: '/forms-checkbox-radio',
                parentId: "form"
            },
            {
                id: 'switches',
                label: 'Switches',
                link: '/forms-switches',
                parentId: "form"
            },
            {
                id: 'wizard',
                label: 'Wizard',
                link: '/forms-wizard',
                parentId: "form"
            },
            {
                id: 'file-upload',
                label: 'File Upload',
                link: '/forms-file-upload',
                parentId: "form"
            },
            {
                id: 'datepicker',
                label: 'Date Picker',
                link: '/forms-datepicker',
                parentId: "form"
            },
            {
                id: 'timepicker',
                label: 'Time Picker',
                link: '/forms-timepicker',
                parentId: "form"
            },
            {
                id: 'colorpicker',
                label: 'Color Picker',
                link: '/forms-colorpicker',
                parentId: "form"
            },
            {
                id: 'multi-select',
                label: 'Multi Select',
                link: '/forms-multi-select',
                parentId: "form"
            },
            {
                id: 'input-spin',
                label: 'Input Spin',
                link: '/forms-input-spin',
                parentId: "form"
            },
            {
                id: 'clipboard',
                label: 'Clipboard',
                link: '/forms-clipboard',
                parentId: "form"
            },
            {
                id: 'editor',
                label: 'Editor',
                link: '/forms-editor-classic',
                parentId: "form",
            },
        ]
    },
    {
        id: 'tables',
        label: 'Tables',
        icon: <Table />,
        subItems: [
            {
                id: 'basictable',
                label: 'Basic Table',
                link: '/tables-basic',
                parentId: 'tables'
            },
            {
                id: 'datatable',
                label: 'Datatable',
                link: '/tables-datatable',
                parentId: 'tables'
            }
        ]
    },
];

export { menuData };