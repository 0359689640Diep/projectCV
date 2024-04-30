import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";

import router from "./router/index.js";
import connectDbB from "./configs/database.js";

const app = express();
dotenv.config();

const port = process.env.port;

 // Thay đổi origin tùy theo trang web của bạn
const allowedOrigins = [process.env.fontendUrl];

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// app.use(cors(corsOptions));
connectDbB();

app.use(express.json());
app.use(cors({
    credentials: true // Cho phép gửi cookie qua CORS
}));
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", router);
// Định nghĩa thư mục lưu trữ ảnh
app.use("/uploads/Images", express.static(path.join(process.cwd(), "uploads/Images")));


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})

