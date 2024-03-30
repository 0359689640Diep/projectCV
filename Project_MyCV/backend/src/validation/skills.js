import Joi from "joi";

export const skillsValidator = Joi.object({
    IdAccount: Joi.string().min(6).max(255).required().messages({
        "string.empty": "IdAccount cannot be empty",
        "string.min": "IdAccount must have at least {#limit} characters",
        "string.max": "IdAccount must have at most {#limit} characters",
        "any.required": "IdAccount is required",
    }),
    TitleSkills: Joi.string().min(6).max(30).required().messages({
        "string.empty": "Title Skills cannot be empty",
        "string.min": "Title Skills must have at least {#limit} characters",
        "string.max": "Title Skills must have at most {#limit} characters",
        "any.required": "Title Skills is required",
    }),
    ContentSkills: Joi.string().min(6).max(30).required().messages({
        "string.empty": "Content Skills cannot be empty",
        "string.min": "Content Skills must have at least {#limit} characters",
        "string.max": "Content Skills must have at most {#limit} characters",
        "any.required": "Content Skills is required",
    }),
    Skills: Joi.array().items(
        Joi.object({
            Name: Joi.string().min(3).max(30).required().messages({
                "string.empty": "Name skills cannot be empty",
                "string.min": "Name skills must have at least {#limit} characters",
                "string.max": "Name skills must have at most {#limit} characters",
                "any.required": "Name skills is required",
            }),
            Percentage: Joi.number().integer().min(0).max(100).required().messages({
                "number.base": "Percentage must be a number",
                "number.integer": "Percentage must be an integer",
                "number.min": "Percentage must be at least {#limit}",
                "number.max": "Percentage must be at most {#limit}",
                "any.required": "Percentage is required",
            })
        })
    )
})