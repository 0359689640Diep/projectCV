import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    IdAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    Name:{
        type: String,
        require: true
    },
    Image: [
        {
            type: String,
            require: true            
        }
    ],
    Task: [
        {
            type: String,
            require: true            
        }
    ],
    Author: [
        {
            type: String,
            require: true            
        }
    ],
    Introduce: {
        type: String,
        require: true        
    },
    Technology: [
        {
            type: String,
            require: true            
        }
    ],
    ObjectInProject: [
        {
            type: String,
            require: true            
        }
    ],
    LinkProject: {
        type: String,
        require: true
    }
}, {versionKey: false, timestamps: true});
export default mongoose.model("Project", projectSchema);