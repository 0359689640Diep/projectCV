import Jwt from "jsonwebtoken";
import bcrypjs from "bcryptjs";
import dotenv from "dotenv";

import Account from "../model/account.js";
import { signInValidator, CreateAccountValidator} from "../validation/account.js";
import account from "../model/account.js";

dotenv.config();

const {token} = process.env;
let id = "";

export const CreateAccount = async (req, res) => {
    try {

        // hứng lỗi khi validate
        const {error} = CreateAccountValidator.validate(req.body,{abortEarly: false});
        if(error) {
            const errors = error.details.map((err) =>err.message);
            return res.status(400).json({
                message: errors[0]
            })
        }
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
        const hashePassword = await bcrypjs.hash(req.body.Password, 10);
        // lưu tài khoản vào db

        const retult = await Account.create({
            ...req.body,
            Password: hashePassword
        });
        // thông báo cho người dùng
        // xoa mật khẩu khi gửi tới người dùng
        retult.Password = undefined;
        id = retult._id;
        return res.status(200).json({
            message: "Sign up success"
        })

    }catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}

export const uploadImage = async (req, res) => {

    try {
        const Images = req.files.find(file => file.fieldname == "Images").path;
        const CV = req.files.find(file => file.fieldname == "CV").path;
        const IconLogo = req.files.find(file => file.fieldname == "IconLogo").path;
        const Logo = req.files.find(file => file.fieldname == "Logo").path;

        const result = await Account.findByIdAndUpdate(
        id,
        {
            Image: Images,
            CV: CV,
            IconLogo: IconLogo,
            Logo: Logo
        },
        { new: true }
        );
    
        if(result) {
            return res.status(200).json({
                message: true
            })
        }else{
            return res.status(400).json({
                message: "The system is maintenance"                 
            })

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "The system is maintenance"
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
        const isMatch = await bcrypjs.compare(req.body.password, user.password);
        
        if(user && !isMatch) {

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

export const cancelAPICreateAccount = async (req, res) => {
    try {
        const result = await Account.findByIdAndDelete(id);
        if(result) {
            return res.status(200).json({
                message: "cancel api create account successfully"
            })
        }else{
            return res.status(400).json({
                message: "cancel api create account failed"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getAccount = async (req, res) => {
    try {
        const dataAccount = await account.find();
        if(dataAccount.length === 0) {
            return res.status(404).json({
                message: "No Account"
            })
        }else{
            return res.status(200).json({dataAccount: dataAccount})
        }
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}
