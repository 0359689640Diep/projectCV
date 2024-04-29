import * as httpRequest from "../utils/httpRequest";
import Notification from "../components/Notification";

const createResult = async (data) => {
    try {
        return await httpRequest.post("result/create/", data, '"Content-Type": "application/json"')
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}
const updateResult = async (data, id) => {
    try {
        return await httpRequest.update("result/update/", data, id, true, '"Content-Type": "application/json"')
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }
}

const getResult = async () => {
    try {
        return await httpRequest.get("result/", {});
    } catch (error) {
        return error;
    }
}

const deleteResult = async (id) => {
    try {
        return await httpRequest.remote('result/delete', id);
    } catch (error) {
        if(error.response.status === 403){
            Notification(error.response.data.message, "error", "/login");
             localStorage.removeItem("accessToken");
        };        
        return error;
    }    
}


export {createResult, getResult, updateResult, deleteResult};