import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true  
    },
    Email: {
        type: String,
        required: true
    },
    Image: [
        {
            type: String,
        }
    ],
    Birthday: {
        type: Date,
        required: true,
    },
    Phone: [
        {
            type: String,
            required: true
        }
    ],
    From: {
        type: String,
        required: true,
    },
    Language: [
        {
            type: String,
            required: true
        }
    ],
    Password: {
        type: String,
        required: true,
    },
    Majors: {
        type: String,
        required: true
    },
    Job: [
        {
            type: String,
            required: true
        }
    ],
    Maxim: {
        type: String,
        required: true
    },
    Describe: {
        type: String,
        required: true
    },
    CV: {
        type: String
    },
    IconLogo: {
        type: String
    },
    Logo: {
        type: String
    }
}, { versionKey: false, timestamps: true }); 

export default mongoose.model("Account", userSchema);
