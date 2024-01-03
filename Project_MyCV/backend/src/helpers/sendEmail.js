import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMail = async({email,subject,html}) => {
    const transporter = nodemailer.createTestAccount({
        host: 'smtp.com',
        service: "Gmail",
        auth: {
            user: process.env.email,
            pass: process.env.password_mail
        }
    })

    const message = {
        from: "Hi Nice To Miss You" ,
        to : email,
        subject: subject,
        html: html
    }

    const result = await transporter.sendMail(message);
    return result;
}

export default sendMail;