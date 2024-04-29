import * as httpRequest from "../utils/httpRequest";
import Notification from "../components/Notification";

export const createSkill = async (data) => {
    try {
        return await httpRequest.post("skills/create/", data, '"Content-Type": "application/json"');
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}
export const updateSkill = async (data, id) => {
    try {
        return await httpRequest.update("skills/update/", data, id, true, '"Content-Type": "application/json"');
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}
export const getSkill = async () => {
    try {
        return await httpRequest.get("skills/", {});
    } catch (error) {
        return error;
    }
}
export const deleteSkill = async (id) => {
    try {
        return await httpRequest.remote('skills/delete', id);
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}