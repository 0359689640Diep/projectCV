import Home from "../pages/user/Home";
import Login from "../pages/user/Login";
import admin from "../pages/admin/Home";

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
        path: "/createAccount", component: admin
    },
    {
        path: "/fixAccount", component: admin
    },
    {
        path: "/createProject", component: admin
    },
    {
        path: "/fixProject", component: admin
    },
    {
        path: "/createResule", component: admin
    },
    {
        path: "/fixResule", component: admin
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