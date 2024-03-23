import axios from "axios";

const httpRequest = axios.create({
    baseURL: "http://localhost:7000/api/"
});

export const update = async (url, data, id) => {
    try {
        const response = await httpRequest.put(`${url}${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
}

export const get = async(url, option = {}) => {
    const response = await httpRequest.get(url, option);
    return response.data;
}

export const post = async (url, data) => {
    try {
        
        const response = await httpRequest.post(`${url}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
}


export const remote = async(url, id) => {
    const response = await httpRequest.delete(url, id);
    return response.data
}