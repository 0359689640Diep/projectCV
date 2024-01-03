import message  from "../model/message.js";
import {sendMessageValidator} from "../validation/message.js"

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