import * as httpRequest from "../utils/httpRequest";

export const postAccount = async (body) => {
    
    try {
        const response = await httpRequest.post(`account/createAccount`, {
            ...body
        });
        return response;
    } catch (error) {
        return error;
    }
};
export const cancenAPIAccount = async (body) => {
    
    try {
        const response = await httpRequest.remote(`account/cancelAPI`, {
            ...body
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const uploadImage = async (formData) => {
    try {
        const response = await httpRequest.post(`image/uploadImage`, formData);
        return response;
    } catch (error) {
        return error;
    }
}