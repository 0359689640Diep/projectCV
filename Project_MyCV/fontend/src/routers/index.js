import Home from "../pages/Home";
import Login from "../pages/Login";

const pulicRouter = [
    {
        path: "/", component: Home
    },
    {
        path: "/login", component: Login
    }
]

const privateRouters = [];

export {pulicRouter, privateRouters};