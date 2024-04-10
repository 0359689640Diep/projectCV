import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import {connect} from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import router from "./router/index.js";

const app = express();
dotenv.config();

const port = process.env.port;
const url_db = process.env.url_db;
const allowedOrigins = ['http://localhost:3000']; // Thay đổi origin tùy theo trang web của bạn

const corsOptions = {
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
connect(url_db);


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use("/api", router);
// Định nghĩa thư mục lưu trữ ảnh
app.use("/uploads/Images", express.static(path.join(process.cwd(), "uploads/Images")));


app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})

