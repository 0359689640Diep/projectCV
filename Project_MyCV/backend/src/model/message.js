import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    IdAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },
    NameUserReceiver: {
        type: String,
        require: true
    },
    EmailReceiver: {
        type: String,
        require: true
    },
    TitleMessage: {
        type: String,
        require: true
    },
    Content: [
        {
            type: String,
            require: true
        }
    ],
    ReplyMessage: {
        type: String
    },
    Status: {
        type: Number,
        default: 0
    }

}, {versionKey: false, timestamps: true});
export default mongoose.model("Message", messageSchema)