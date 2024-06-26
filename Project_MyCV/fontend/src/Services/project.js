import * as httpRequest from "../utils/httpRequest";
import Notification from "../components/Notification";

const createProject = async (data) => {
    try {
        return await httpRequest.post("/project/create", data);
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}

const updateProject = async (data, id) => {
    try {
        return await httpRequest.update("/project/update/", data, id, true);
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}

const deleteProject = async (id) => {
    try {
        return await httpRequest.remote('/project/delete',id);
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}

const getProject = async () => {
    try {
        return await httpRequest.get("/project/", {});
    } catch (error) {
        return error
    }
}

export {createProject, deleteProject, updateProject, getProject};