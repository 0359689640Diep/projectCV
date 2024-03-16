import Jwt from "jsonwebtoken";
import bcrypjs from "bcryptjs";
import dotenv from "dotenv";

import Account from "../model/account.js";
import { signInValidator, CreateAccountValidator} from "../validation/account.js";
import account from "../model/account.js";
import { deleteUploadedImages } from "../helpers/image.js";

dotenv.config();

const {token} = process.env;
let id = "";

export const CreateAccount = async (req, res) => {
    try {

        const { error } = CreateAccountValidator.validate(req.body, { abortEarly: false });
        if (error) {
             // Nếu có lỗi, xóa các file ảnh đã được tải lên
            deleteUploadedImages(req.files);

            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors[0]
            });
        }

        if (req.files && req.files.CV && req.files.CV.length < 0) {
            return res.status(400).json({
                message: "CV cannot be empty"
            })
        }
        if (req.files && req.files.Images && req.files.Images.length < 0) {
            return res.status(400).json({
                message: "Images cannot be empty"
            })
        }
        if (req.files && req.files.IconLogo && req.files.IconLogo.length < 0) {
            return res.status(400).json({
                message: "Icon Logo cannot be empty"
            })
        }
        if (req.files && req.files.Logo && req.files.Logo.length < 0) {
            return res.status(400).json({
                message: "Logo cannot be empty"
            })
        }

        const Images = req.files.Images[0].filename;
        const CV = req.files.CV[0].filename;
        const IconLogo = req.files.IconLogo[0].filename;
        const Logo = req.files.Logo[0].filename;

        const userExist = await Account.findOne({
            Email: req.body.Email
        });
        if (userExist) {
            // Nếu có lỗi, xóa các file ảnh đã được tải lên
            deleteUploadedImages(req.files);
            return res.status(400).json({
                message: "This email has been registered. Would you like to log in?"
            });
        }

        const hashePassword = await bcrypjs.hash(req.body.Password, 10);

        const result = await Account.create({
            ...req.body,
            CV: CV,
            IconLogo: IconLogo,
            Logo: Logo,
            Images: Images,
            Password: hashePassword
        });

        result.Password = undefined;
        id = result._id;
        return res.status(200).json({
            message: "Create account success"
        });
    } catch (error) {
        // Nếu có lỗi, xóa các file ảnh đã được tải lên
        deleteUploadedImages(req.files);

        console.error(error);
        return res.status(500).json({
            message: "The system is maintenance"
        });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await Account.deleteOne({_id: id});
        if(result.deletedCount === 0 ){
            return res.status(404).json({
                message: "The requested account could not be found"
            })
        }
        return res.status(200).json({
            message: "Product deletion was successful"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Hệ thống đang bảo trì"
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
            Email: req.body.email,
            Password: req.body.Password
        })
        // const isMatch = await bcrypjs.compare(req.body.Password, user.Password);
        //  && !isMatch
        if(user) {

            user.Password = undefined;
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
