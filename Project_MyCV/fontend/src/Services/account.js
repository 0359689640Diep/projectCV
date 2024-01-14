import * as httpRequest from "../utils/httpRequest";

export const postAccount = async (formData) => {
    try {
        const response = await httpRequest.post(`account/CreateAccount`, formData);
        return response;
    } catch (error) {
        return error;
    }
}