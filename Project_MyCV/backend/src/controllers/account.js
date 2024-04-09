import Jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";
import dotenv from "dotenv";
import { compareAsc, format } from "date-fns";

import Account from "../model/account.js";
import { signInValidator, CreateAccountValidator} from "../validation/account.js";
import account from "../model/account.js";
import { deleteUploadedImages, deleteImage } from "../helpers/image.js";


dotenv.config();


const secretKey = process.env.secretKey; 
const baseUrl = process.env.baseUrl;

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

        const Images = req.files.Image.map(file => file.filename);
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
        const {Job, Language, Phone, Password, ...body} = req.body;

        const JobArr = Job.split(",");
        const LanguageArr = Language.split(",");
        const PhoneArr = Phone.split(",");
        const password = Password;

        const hashePassword = await CryptoJS.AES.encrypt(password, secretKey).toString();

                const newData = {
                ...body,
                Language: LanguageArr,
                Phone: PhoneArr,
                Job: JobArr,
                CV: CV,
                IconLogo: IconLogo,
                Logo: Logo,
                Image: Images,
                Password: hashePassword
                }
                
                const result = await Account.create(newData);

        result.Password = undefined;
        return res.status(200).json({
            message: "Create account success"
        });
    } catch (error) {
        // Nếu có lỗi, xóa các file ảnh đã được tải lên
        // deleteUploadedImages(req.files);
        return res.status(500).json({
            message: "The system is maintenance"
        });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        let id = req.params.id;
        const result = await Account.findOneAndDelete({_id: Object(id)});
        if(result !== null){
            deleteImage(result.Image);
            deleteImage(result.CV);
            deleteImage(result.IconLogo);
            deleteImage(result.Logo);

            return res.status(200).json({
                message: "Product deletion was successful"
            })
        }else{
            return res.status(404).json({
                message: "The requested account could not be found"
            })

        }

    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}

export const updateAccount = async (req, res) => {
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
        const {Job, Language, Phone, Password, ...body} = req.body;
        const id = req.params.id;
        const hashePassword = await CryptoJS.AES.encrypt(Password, secretKey).toString();

        const newData = {
                ...body,
            Language: Language.split(","),
            Phone: Phone.split(","),
            Job: Job.split(","),
            Password: hashePassword,  
        }
        // kiểm tra xem có được up ảnh lên hay không
        if(Object.keys(req.files).length > 0){
            const getImageByIdAccount = await Account.findById({_id: Object(id)}, {CV: 1, Image: 1, IconLogo: 1, Logo: 1});
            const {CV, IconLogo, Logo, Image} = req.files ;
            if (CV && CV !== undefined) {
                newData["CV"] = CV[0].filename;
                deleteImage(getImageByIdAccount.CV);
            }
            if (Image && Image !== undefined) {
                newData["Image"] = Image.map(file => file.filename);
                deleteImage(getImageByIdAccount.Image);
            }
            if (IconLogo && IconLogo !== undefined) {
                newData["IconLogo"] = IconLogo[0].filename;
                deleteImage(getImageByIdAccount.IconLogo);
            }
            if (Logo && Logo !== undefined) {
                newData["Logo"] = Logo[0].filename;
                deleteImage(getImageByIdAccount.Logo);
            }
                    
        }        
        await Account.findByIdAndUpdate(id, {...newData}); 
        return res.status(201).json({
            message: "Update successful"
        })            
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        });
    }
}


export const signIn = async (req, res) =>{
    try {
        const { error } = signInValidator.validate(req.body, { abortEarly: false });
        if(error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors[0]
            })
        }
        
        const user = await Account.findOne({ Email: req.body.email });

        if(!user) {
            return res.status(401).json({
                message: "Login failed, please review your account"
            });
        }

        const decodePassword = CryptoJS.AES.decrypt(user.Password, secretKey).toString(CryptoJS.enc.Utf8);

        if(req.body.password !== decodePassword) {
            return res.status(401).json({
                message: "Login failed, please review your account"
            });
        }

        // Tạo token
        const accessToken = Jwt.sign({ _id: user._id }, secretKey);

        // Xóa mật khẩu trước khi gửi thông tin người dùng và token về
        user.Password = undefined;

        return res.status(200).json({
            message: "Logged in successfully",
            user,
            accessToken
        });

    } catch (error) {
        return res.status(500).json({
            message: "500 Server not found"
        });
    }
}


export const getAccountByRequest = async (req, res) => {
    try {
        const request = req.params.request
        const dataAccount = await account.find().select(request);
        if(dataAccount.length === 0) {
            return res.status(404).json({
                message: "No Account"
            })
        }
        dataAccount.forEach(obj => {
            // format dữ liệu
            switch(request){
                case "Password":
                    const password = obj.Password; 
                    obj.Password = CryptoJS.AES.decrypt(password,  secretKey).toString(CryptoJS.enc.Utf8);    
                break;
                case "CV":
                    obj.CV = baseUrl + obj.CV;
                break;
                case "IconLogo":
                    obj.IconLogo = baseUrl + obj.IconLogo;
                break;
                case "Logo":
                    obj.Logo = baseUrl + obj.Logo;
                break;
                case "dateFormat":
                    const dateFormat = format(new Date(obj.Birthday), "yyyy-MM-dd");
                    obj.Birthday = dateFormat;
                break;
                case "Image":
                    if(obj.Image.length !== 0) {
                        obj.Image.forEach((field, key) => {
                                obj.Image[key] = baseUrl + field;
                        })
                    }
                break;
                default:
                    console.error("errr");
                break;

            }
        })
        return res.status(200).json({dataAccount: dataAccount})
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
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
        }
        dataAccount.forEach(obj => {
            // format dữ liệu
            const password = obj.Password; 
            const dateFormat = format(new Date(obj.Birthday), "yyyy-MM-dd");
            
            obj.Password = CryptoJS.AES.decrypt(password,  secretKey).toString(CryptoJS.enc.Utf8);
            obj.CV = baseUrl + obj.CV;
            obj.IconLogo = baseUrl + obj.IconLogo;
            obj.Logo = baseUrl + obj.Logo;
            obj.Birthday = dateFormat;

            if(obj.Image.length !== 0) {
                obj.Image.forEach((field, key) => {
                        obj.Image[key] = baseUrl + field;
                })
            }
        })
        return res.status(200).json({dataAccount: dataAccount})
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}
