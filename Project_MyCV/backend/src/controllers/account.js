import Jwt from "jsonwebtoken";
import bcrypjs from "bcryptjs";
import dotenv from "dotenv";

import Account from "../model/account.js";
import { signInValidator, signUpValidator } from "../validation/account.js";

dotenv.config();

const {token} = process.env;
export const signUp = async (req, res) => {
    try {
        // hứng lỗi khi validate
        const {error} = signUpValidator.validate(req.body, {abortEarly: false})
        if(error) {
            const errors = error.details.map((err) =>err.message);
            return res.status(400).json({
                message: errors
            })
        }

        const userExist = await Account.findOne({
            email: req.body.email
        });
        // kiem tra email co ton tai hay khong
        if(userExist) {
            return res.status(400).json({
                message: "this email has been registered. Would you like to log in ? "
            })
        }

        // mã hóa password
        const hashePassword = await req.body.password;
        // const hashePassword = await bcrypjs.hash(req.body.password, 10);
        // lưu tài khoản vào db
        const account = await Account.create({
            ...req.body,
            password: hashePassword
        })
        // thông báo cho người dùng
        // xoa mật khẩu khi gửi tới người dùng
        account.password = undefined;
        return res.status(200).json({
            message: "Sign up success"
        })

    }catch (error) {
        return res.status(500).json({
            message: error.message,
            name: error.name
        })
    }
}
