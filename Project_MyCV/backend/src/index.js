import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import {connect} from "mongoose";

const app = express();
dotenv.config();

const port = process.env.port;
const url_db = process.env.url_db;
connect(url_db);
app.use(express.json());
app.use(cors());
// app.use("/api")

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})