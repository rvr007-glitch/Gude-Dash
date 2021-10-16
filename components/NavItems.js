import * as Icons from "react-icons/fa";
import * as IoIcons from "react-icons/cg";
import * as IoIcond from "react-icons/vsc";
import * as IoIcongr from "react-icons/fc";
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
        title: "Projects",
        path: "./projects",
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
    }
];