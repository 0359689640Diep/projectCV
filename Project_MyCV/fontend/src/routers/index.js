import Home from "../pages/user/Home";
import Login from "../pages/user/Login";
import admin from "../pages/admin/Home";
import CreateAccount from "../pages/admin/account/CreateAccount";
import EditAccount from "../pages/admin/account/EditAccount";
import CreateResult from "../pages/admin/result/Create";
import ListResult from "../pages/admin/result/List";

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
        path: "/createAccount", component: CreateAccount
    },
    {
        path: "/editAccount", component: EditAccount
    },
    {
        path: "/createProject", component: admin
    },
    {
        path: "/fixProject", component: admin
    },
    {
        path: "/createResule", component: CreateResult
    },
    {
        path: "/listResule", component: ListResult
    },
    {
        path: "/createSkills", component: admin
    },
    {
        path: "/fixSkills", component: admin
    },
    
    {
        path: "/myaccount", component: admin
    },
    

];




export {pulicRouter, privateRouters};