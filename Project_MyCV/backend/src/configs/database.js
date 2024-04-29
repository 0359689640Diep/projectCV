import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url_db = process.env.url_db;

const connectDbB = async() => {
    try {
        await mongoose.connect(url_db);
        console.log("Connected successfully");
    } catch (error) {
        console.log(error);
    }
}

export default connectDbB;
