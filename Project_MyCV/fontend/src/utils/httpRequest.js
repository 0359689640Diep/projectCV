import axios from "axios";

const httpRequest = axios.create({
    baseURL: "http://localhost:7000/api/"
}); 


export const remote = async(url, id) => {
    const token = localStorage.getItem("accessToken");
    try {
        const response = await httpRequest.delete(`${url}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response
        
    } catch (error) {
        return error.response;
    }
}

export const update = async (url, data, id, tokens = false, header = '"Content-Type": "multipart/form-data"') => {
    const token = localStorage.getItem("accessToken");
    try {
        const headers = {header};
        if(tokens === true){
            headers["Authorization"]= `Bearer ${token}`;
        }
        const response = await httpRequest.put(`${url}${id}`, data, {headers});
        return response;
    } catch (error) {
        return error.response;
    }
}

export const get = async (url, option = {}, tokens = false) => {
    const token = localStorage.getItem("accessToken");
    try {
        // Kiểm tra xem có token được truyền vào không và thiết lập header nếu có
        if (tokens) {
            option.headers = {
                ...option.headers,
                Authorization: `Bearer ${token}`
            };
        }

        // Gửi request bằng thư viện HTTP request của bạn
        const response = await httpRequest.get(url, option);

        // Trả về dữ liệu từ response
        return response.data;
    } catch (error) {
        // Xử lý lỗi nếu có
        throw error; // Ném lỗi để cho phép component gọi hàm `get` xử lý lỗi nếu cần
    }
};

export const post = async (url, data, headers = '"Content-Type": "multipart/form-data"') => {
    const token = localStorage.getItem("accessToken");
    try {
        
        const response = await httpRequest.post(`${url}`, data, {
            headers: {
                headers,
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
}


