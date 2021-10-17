import * as Icons from "react-icons/fa";
import * as IoIcons from "react-icons/cg";
import * as IoIcond from "react-icons/vsc";
import * as IoIconbs from "react-icons/bs";
import * as IoIconmd from "react-icons/md";


export const navItems = [
    {
        id: 1,
        title: "Home",
        path: "./",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <Icons.FaHome />,
    },
    {
        id: 2,
        title: "Languages",
        path: "./codinglang",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <IoIcons.CgCodeSlash />,
    },
    {
        id: 3,
        title: "Platform",
        path: "./platformcode",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <IoIcond.VscProject />
    },
    {
        id: 4,
        title: "Resources",
        path: "./resources",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <Icons.FaDatabase/>,
    },
    {
        id: 5,
        title: "Development",
        path: "/Devlopment",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <IoIconmd.MdLaptopChromebook />,
    },
    {
        id: 6,
        title: "Community",
        path: "/Com",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <IoIconbs.BsFillPeopleFill />,
    },
    {
        id: 7,
        title: "Resumes",
        path: "/resumecard",
        nName: "nav-item",
        sName: "sidebar-item",
        icon: <IoIconbs.BsFillPeopleFill />,
    }
];