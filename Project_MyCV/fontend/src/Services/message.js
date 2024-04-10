import * as httpRequest from "../utils/httpRequest";

export const sendMessage = async (body) => {
    
    try {
        const response = await httpRequest.post(`message/sendmessage`, {
            ...body
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const getMessage = async () => {
    try {
        const response = await httpRequest.get(`message/getemail`, {}, true);
        return response;
    } catch (error) {
        return error;
    }
};

export const updateStatusMessage = async (id) => {
    try {
        const response = await httpRequest.post(`message/updatestatusmessage/${id}`);
        return response;
    } catch (error) {
        return error;
    }
};

export const deleteEmail = async (id) => {
    try {
        const response = await httpRequest.remote('message/deleteemail', id);
        return response;
    } catch (error) {
        return error;
    }
}

export const replyGmail = async (body, id) => {
    try {
        const response = await httpRequest.update(`message/reply-email/`, body, id, true, '"Content-Type": "application/json"');
        return response;
    } catch (error) {
        return error;
    }
};