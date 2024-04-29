import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.secretKey; 

export const decrypt = (data) => {
    try {
        const decryptedData = CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
        return decryptedData;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const encrypt = (data) => {
    try {
        const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
        return encryptedData;
    } catch (error) {
        console.log(error);
        return false;
    }
}
