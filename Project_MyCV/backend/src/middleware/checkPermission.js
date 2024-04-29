import dotenv from "dotenv";
import account from "../model/account.js";
import { verifyToken } from "./JWTAction.js";

dotenv.config();

export const checkPermisson = async (req, res, next) => {
    try {
        // kiểm tra người dùng đã đăng nhập hay chưa
        const token = req.headers.authorization?.split(" ")[1];
        // kiểm tra token
        const decoded = verifyToken(token);
        
        // lấy token đã lưu trong db xem có hay không
        const user = await account.findById(decoded._id);
        
        //nếu không tồn tại token gửi lên, token đó  hết hạn, không tìm thấy token trong db, hoặc token đó  rỗng trên db
        const checkToken = user.Token[0].accessToken === token;
        
        if (
            !token ||
            decoded === false ||
            user === null ||
            checkToken === false ||
            user.Token.length === 0
        ) {
                
            return res.status(403).json({
                message: "Login to use the service"
            });
        }
        // next
        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
