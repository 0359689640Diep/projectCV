import Home from "../pages/user/Home";
import Login from "../pages/user/Login";
import admin from "../pages/admin/Home";
import CreateAccount from "../pages/admin/account/CreateAccount";
import EditAccount from "../pages/admin/account/EditAccount";
import CreateResult from "../pages/admin/result/Create";
import ListResult from "../pages/admin/result/List";
import CreateSkills from "../pages/admin/skills/Create";
import ListSkills from "../pages/admin/skills/List";
import ListProject from '../pages/admin/project/ListProject/index';
import CreateProject from "../pages/admin/project/CreateProject";

const pulicRouter = [
    {
        path: "/", component: Home
    },
    {
        path: "/login", component: Login
    },

]

const privateRouters = [
    {
        path: "/admin", component: admin
    },
    {
        path: "/create-account", component: CreateAccount
    },
    {
        path: "/edit-account", component: EditAccount
    },
    {
        path: "/create-project", component: CreateProject
    },
    {
        path: "/list-project", component: ListProject
    },
    {
        path: "/create-resule", component: CreateResult
    },
    {
        path: "/list-resule", component: ListResult
    },
    {
        path: "/create-skills", component: CreateSkills
    },
    {
        path: "/list-skills", component: ListSkills
    },
    
    {
        path: "/myaccount", component: admin
    },
    

];




export {pulicRouter, privateRouters};