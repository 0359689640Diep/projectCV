import message  from "../model/message.js";
import {sendMessageValidator, replyMessageValidator} from "../validation/message.js";
import sendMail from "../helpers/sendEmail.js"


export const sendMessage = async (req, res) => {
    try {
        const {NameUserReceiver, EmailReceiver, TitleMessage, Content} = req.body;
        const {error} = sendMessageValidator.validate(req.body, {abortEarly: false});
        if(error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({message: errors[0]});
        }

        await message.create({...req.body});
        const subject = "Notification";
        const html = `
            <h1> ${NameUserReceiver}:  Sent you a message from the CV website </h1> 
            <ul>
                <li>Email Receiver: ${EmailReceiver}</li>
                <li>Title Message: ${TitleMessage}</li>
                <li>Content: ${Content}</li>
            </ul>
        `;
        sendMail("vudiep621@gmail.com", subject, html)
        return res.status(200).json({
            message: "Thank you for sending me message. I will reply you as soon as possible"
        })

    } catch (error) {
        console.log(error);
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

export const replyGmail = async(req, res) => {
    try {
        const {ReplyMessage} = req.body;
        const id = req.params.id;
        const {error} = replyMessageValidator.validate(req.body, {abortEarly: false});

        if(error) {
            const errors = error.details.map((error) => error.message);
           
            return res.status(400).json({
                message: errors[0]
            })
        }

        const result = await message.findByIdAndUpdate(
            {_id:  id},
            {$set: {
                Status: 1, 
                ReplyMessage: ReplyMessage
            }});
            if(Object.keys(result).length > 0){

                const {EmailReceiver, ...data} = result;
                const TitleMessage = "Vũ Hồng Điệp Replly Email";

                let mailEmail = sendMail(EmailReceiver, TitleMessage, ReplyMessage);
    
                if(mailEmail){
                    return res.status(200).json({
                        message: "Mail sent successfully"
                    })
                }else{
                    return res.status(500).json({
                        message: "Mail sent error"
                    })
                }
            }else{
                return res.status(500).json({
                    message: "The system is maintenance"
                })
            };

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
