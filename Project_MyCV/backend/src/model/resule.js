import mongoose from "mongoose"

const resuleSchema = new mongoose.Schema({
    IdAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    Name: {
        type: String,
        required: true
    },
    Degree: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    SchoolName: {
        type: String,
        required: true
    },
    Describe: {
        type: String,
        required: true
    },
    Type: {
        type: Number,
        default: 0
    }
}, {versionKey: false, timestamps: true});
export default mongoose.model("Resule", resuleSchema);