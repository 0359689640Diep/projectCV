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
    {
        path: "/admin", component: admin
    }
]

const privateRouters = [];

export {pulicRouter, privateRouters};