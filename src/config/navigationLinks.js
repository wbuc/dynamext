const navbar = [
    {
        icon: "dashboard",
        text: "Dashboard",
        route: "/"
    },
    {
        icon: "folder",
        text: "About",
        route: "/about"
    },
    {
        icon: "color_lens",
        text: "Design Elements",
        route: "/design"
    }]

const drawer = [
    {
        icon: "dashboard",
        text: "Dashboard",
        route: "/"
    },
    {
        icon: "mdi-file-cabinet",
        text: "Fileroom",
        route: "/fileroom"
    },
    {
        icon: "mdi-file-document",
        text: "Schedules",
        route: "/schedules"
    },
    {
        icon: "info",
        text: "About",
        route: "/about"
    },
    { divider: true },
    {
        icon: "color_lens",
        text: "Design Elements",
        route: "/design"
    },
    {
        icon: "mdi-alphabetical",
        text: "Icons",
        route: "/icons"
    },
    {
        icon: "settings",
        text: "Administration",
        route: "/admin"
    }];


export default { navbar, drawer }
