import * as httpRequest from "../utils/httpRequest";

export const sendMessage = async (body) => {
    
    try {
        const response = await httpRequest.post(`message/sendmessage`, {
            ...body
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getMessage = async () => {
    try {
        const response = await httpRequest.get(`message/getemail`, {});
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const updateStatusMessage = async (id) => {
    try {
        const response = await httpRequest.post(`message/updatestatusmessage/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const deleteEmail = async (id) => {
    try {
        const response = await httpRequest.remote(`message/deleteemail/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const sendEmail = async (body) => {
    try {
        const response = await httpRequest.update(`message/sendemail`, {
            ...body
        });
        return response;
    } catch (error) {
        console.log(error);
    }
};