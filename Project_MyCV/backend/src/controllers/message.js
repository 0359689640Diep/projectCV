import message  from "../model/message.js";
import {sendMessageValidator} from "../validation/message.js";
import email from "../helpers/sendEmail.js"


export const sendMessage = async (req, res) => {
    try {
        const {error} = sendMessageValidator.validate(req.body, {abortEarly: false});
        if(error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({message: errors});
        }

        await message.create({...req.body});
        // sendEmailMailer(email)
        return res.status(200).json({
            message: "Thank you for sending me message. I will reply you as soon as possible"
        })

    } catch (error) {
        console.log(error.message);
        console.log(error.name);
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}

export const getMessage = async (req, res) =>{
    try {
        const dataMessage  = await message.find({Status: {$ne: 2}});
        if(dataMessage.length  === 0) {
            return res.status(404).json({
                message: "No messages"
            })
        }else{
            return res.status(200).json({
                dataMessage: dataMessage
            })
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}

export const sendEmail = async(req, res) => {
    try {
        const { _id, ReplyMessage, ...updatedData } = req.body;
        const {error} = sendMessageValidator.validate(updatedData, {abortEarly: false});
        if(error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors
            })
        }
        let updateStatus = await message.updateOne({_id:  _id},{$set: {Status: 1, ReplyMessage: ReplyMessage}});
        if(updateStatus.modifiedCount > 0){
            let mailEmail = email(updatedData.EmailReceiver, updatedData.TitleMessage, updatedData.Content);

            if(mailEmail){
                return res.status(200).json({
                    message: "Mail sent successfully"
                })

            }else{
                return res.status(500).json({
                    message: "The system is maintenance"
                })
            }
        }else{
            return res.status(500).json({
                message: "The system is maintenance"
            })
        }

    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}

export const updateStatusMessage = async (req, res) => {
    try {
        let id = req.params.id;
        const result =  await message.updateOne({_id: id}, {$set: {Status: 1}});
        if (result.modifiedCount > 0) {
            return res.status(200).json({
                message: "Cập nhật trạng thái tin nhắn thành công"
            });
        } else {
            return res.status(404).json({
                message: "Không tìm thấy tin nhắn để cập nhật"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })        
    }
}

export const deleteMessage = async (req, res) => {
    try {
        const id = req.params.id;
        // Giả sử message là một model mongoose
        const result = await message.findByIdAndDelete(id);
        if (result) {
            return res.status(200).json({
                message: "Deleted email product successfully"
            });
        } else {
            return res.status(400).json({
                message: "Delete email product failed"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "The system is maintenance"
        });        
    }
}
