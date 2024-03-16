import * as httpRequest from "../utils/httpRequest";

export const postAccount = async (body) => {
    
    try {
        const response = await httpRequest.post(`account/createAccount`, {...body}, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            }
        );
        return response;
    } catch (error) {
        return error;
    }
};

export const getAccount = async () => {
    try {
        const response = await httpRequest.get(`account/getAllAccount`, {});
        return response;
    } catch (error) {
        console.log(error);
    }
}

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

export const deleteAccount = async (id) => {
    try {
        const response = await httpRequest.remote(`account/deleteAccount/${id}`);
        return response;
    } catch (error) {
        
    }
}

export const uploadImage = async (formData) => {
    try {
        const response = await httpRequest.post(`image/uploadImage`, formData);
        return response;
    } catch (error) {
        return error;
    }
}