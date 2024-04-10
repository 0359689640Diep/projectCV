import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
import account from "../model/account.js";
dotenv.config();
const secretKey = process.env.secretKey;
export const checkPermisson = async (req, res, next) => {
    try {
        // kiểm tra người dùng đã đăng nhập hay chưa
        const token = req.headers.authorization?.split(" ")[1];

        // kiểm tra token
        if (!token) {
            return res.status(403).json({
                message: "Login to use the service"
            });
        }
        const decoded = Jwt.verify(token, secretKey);
        const user = await account.findById(decoded._id);

        if (!user) {
            return res.status(403).json({
                message: "The account is not authorized to use this service"
            });
        }
        // next
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
