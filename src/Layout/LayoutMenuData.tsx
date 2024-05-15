import { FileUp, MonitorDot, PowerOff, UserRoundCog } from "lucide-react";

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
                label: "Settings User Profile",
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
