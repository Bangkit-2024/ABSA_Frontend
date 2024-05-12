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
        link: "/#",
        icon: <FileUp />,
        subItems: [
            {
                id: 'upload-data',
                label: 'Upload CSV',
                parentId: 'uploads',
            },
            {
                id: 'upload-data',
                label: 'Upload Excel',
                link: '/#',
                parentId: 'uploads'
            },
        ]
    },
    {
        label: 'Users',
        isTitle: true,
    },
    {
        id: "user-profile",
        label: 'Profile',
        link: "/#",
        icon: <UserRoundCog />
    },
    {
        id: "logout",
        label: 'Logout',
        link: "/#",
        icon: <PowerOff />
    },

];

export { menuData };
