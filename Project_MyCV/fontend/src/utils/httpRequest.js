import axios from "axios";

const httpRequest = axios.create({
    baseURL: "http://localhost:7000/api/"
});

export const get = async(url, option = {}) => {
    const response = await httpRequest.get(url, option);

    return response.data;
}

export const post = async(url, option = {}) => {
    const response = await httpRequest.post(url, option);

    return response.data;

}

export const update = async(url, id) => {
    const response = await httpRequest.put(url, id);
    return response.data
}
export const remote = async(url, id) => {
    const response = await httpRequest.delete(url, id);
    return response.data
}