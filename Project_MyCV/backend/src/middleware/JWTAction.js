import Jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secretKey = process.env.secretKey; 

const createJWT = (data) => {
    try {
        let token = Jwt.sign(data, secretKey, {expiresIn: "1d"});
        return token;
    } catch (error) {
        console.log(error);
    }
}

const verifyToken = (token) => {
    try {
        const decoded = Jwt.verify(token, secretKey);
        return decoded
    } catch (error) {
        return false;
    }
    
}

export {createJWT, verifyToken}