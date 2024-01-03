import * as htttpRequest from "../utils/httpRequest";

export const sendMessage = async (body) => {
    
    try {
        const response = await htttpRequest.post(`send/sendmessage`, {
            ...body
        })
        return response;
    } catch (error) {
        console.log(error);
    }
}