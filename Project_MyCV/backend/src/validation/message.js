import Joi from "joi";

export const sendMessageValidator = Joi.object({
    NameUserReceiver: Joi.string().min(6).max(255).required().messages({
        "string.empty": "Your Name cannot be empty",
        "string.min": "Your Name must have at least {#limit} characters",
        "string.max": "Your Name must have at most {#limit} characters",
        "any.required": "Your Name is required"
    }),
    EmailReceiver: Joi.string().email().required().messages({
        "string.email": "Your Email is not in correct format"
    }),
    TitleMessage: Joi.string().min(6).max(255).required().messages({
        "string.empty": "Your Subject cannot be empty",
        "string.min": "Your Subject must have at least {#limit} characters",
        "string.max": "Your Subject must have at most {#limit} characters",
        "any.required": "Your Subject is required"
    }),
    Content: Joi.string().min(6).max(255).required().messages({
        "string.empty": "Your Message cannot be empty",
        "string.min": "Your Message must have at least {#limit} characters",
        "string.max": "Your Message must have at most {#limit} characters",
        "any.required": "Your Message is required"
    }),
});
