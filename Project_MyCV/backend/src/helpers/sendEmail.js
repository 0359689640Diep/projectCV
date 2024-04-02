import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMail = async (email, subject, html, form = "Hi Nice To Miss You") => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: process.env.email,
        pass: process.env.password_mail,
      },
  });


    const message = {
      from: form,
      to: email,
      subject,
      html,
    };

    await transporter.sendMail(message);
    // Trả về true nếu gửi email thành công
    return true;
  } catch (error) {
    console.error("Lỗi khi gửi email:", error);

    // Trả về false nếu có lỗi và log ra lỗi
    return false;
  }
};

export default sendMail;
