import * as httpRequest from "../utils/httpRequest";

export const postAccount = async (body) => {

    try {
        const response = await httpRequest.post(`account/createAccount`, body);
        return response;
    } catch (error) {
        return error;
    }
};
export const singIn = async (body) => {

    try {
        const response = await httpRequest.post(`account/signin`, body, '"Content-Type": "application/json"');
        return response;
    } catch (error) {
        return error;
    }
};

export const updateAccount = async (data, id) => {
    try {
        const response = await httpRequest.update("account/updateAccount/", data, id, true);
        return response;
    } catch (error) {
        return error;
    }
}

export const getAccount = async () => {
    try {
        const response = await httpRequest.get(`account/getAllAccount`, {});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getAccountByRequest = async (request) => {
    try {
        const response = await httpRequest.get(`account/${request}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteAccount = async (id) => {
    try {
        const response = await httpRequest.remote('account/deleteAccount', id);
        return response;
    } catch (error) {
        return error.response;
    }
}