import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema({
    IdAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    TitleSkills: {
        type: String,
        required: true
    },
    ContentSkills: {
        type: String,
        required: true
    },
    Skills: {
        Name: {
            type: String,
            required: true 
        },
        Percentage: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
            max: 100
        },

    }
}, {versionKey: false, timestamps: true});
export default mongoose.model("Skills", skillsSchema);