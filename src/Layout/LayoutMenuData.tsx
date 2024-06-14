import { FileUp, MonitorDot, PowerOff, UserRoundCog, Cpu } from "lucide-react";

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
        id: "guessr",
        label: 'Review Predict',
        link: "/review-predict",
        icon: <Cpu />,
    },
    {
        label: 'Data',
        isTitle: true,
    },
    {
        id: "uploads",
        label: 'File Upload',
        icon: <FileUp />,
        link: "/file-upload",
    },
    {
        label: 'Users',
        isTitle: true,
    },
    {
        id: "user-profile",
        label: 'User',
        icon: <UserRoundCog />,
        parentId : "profileInfo",
        subItems: [
            {
            id: "profileInfo",
            label: "User Profile",
            link: "/user-information",
            parentId: "profileInfo",
            },
            {
                id: "settingsUserProfile",
                label: "Settings",
                link: "/setting-user-profile",
                parentId: "profileInfo",
            }
        ]
    },
    {
        id: "logout",
        label: 'Logout',
        link: "/logout",
        icon: <PowerOff />
    },

];

export { menuData };
