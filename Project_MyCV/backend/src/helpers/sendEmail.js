import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendMail = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.email,
        pass: process.env.password_mail,
      },
    });

    const message = {
      from: "Hi Nice To Miss You",
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
