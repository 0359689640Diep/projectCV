import Jwt from "jsonwebtoken";
import bcrypjs from "bcryptjs";
import dotenv from "dotenv";

import Account from "../model/account.js";
import { signInValidator, CreateAccountValidator, validateImage } from "../validation/account.js";

dotenv.config();

const {token} = process.env;

export const CreateAccount = async (req, res) => {
    try {
        const Images = req.files.find(file => file.fieldname == "Images").path;
        const CV = req.files.find(file => file.fieldname == "CV").path;
        const IconLogo = req.files.find(file => file.fieldname == "IconLogo").path;
        const Logo = req.files.find(file => file.fieldname == "Logo").path;
        if (!Images || !CV || !IconLogo || !Logo) {
            return res.status(400).json({
                message: "One or more required files are missing."
            });
        }
        // hứng lỗi khi validate
        const {error} = CreateAccountValidator.validate(req.body,{abortEarly: false});
        const validateCV = validateImage(req.files[0]);
        if(error) {
            const errors = error.details.map((err) =>err.message);
            return res.status(400).json({
                message: errors
            })
        }
        console.log(error);
        const userExist = await Account.findOne({
            Email: req.body.Email
        });
        // kiem tra email co ton tai hay khong
        if(userExist) {
            return res.status(400).json({
                message: "this email has been registered. Would you like to log in ? "
            })
        }

        // mã hóa password
        const hashePassword = await req.body.Password;

        // const hashePassword = await bcrypjs.hash(req.body.password, 10);
        // lưu tài khoản vào db

        const retult = await Account.create({
            ...req.body,
            Image: Images,
            CV: CV,
            IconLogo: IconLogo,
            Logo: Logo,
            Password: hashePassword
        });
        console.log(retult);
        // thông báo cho người dùng
        // xoa mật khẩu khi gửi tới người dùng
        retult.Password = undefined;
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

export const signIn = async (req, res) =>{
    try {
        
        const {error} = signInValidator.validate(req.body, {abortEarly: false});
        if(error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors
            })
        }
        
        const user = await Account.findOne({
            email: req.body.email,
            password: req.body.password
        })
        
        if(user) {
            user.password = undefined;
            const accsessToken = Jwt.sign({_id: user._id}, token)
            return res.status(200).json({
                message: "Logged in successfully",
                user,
                accsessToken
            })
        }else{
            return res.status(401).json({
                message: "Login failed, please review your account"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: "500 Server not found"
        })
    }
}
