import Joi from "joi";

export const skillsValidator = Joi.object({
    TitleSkills: Joi.string().min(6).max(30).required().messages({
        "string.empty": "Name cannot be empty",
        "string.min": "Name must have at least {#limit} characters",
        "string.max": "Name must have at most {#limit} characters",
        "any.required": "Name is required",
    }),
    ContentSkills: Joi.string().min(6).max(30).required().messages({
        "string.empty": "Name cannot be empty",
        "string.min": "Name must have at least {#limit} characters",
        "string.max": "Name must have at most {#limit} characters",
        "any.required": "Name is required",
    }),
    Skills: Joi.array().items(
        Joi.object({
            Name: Joi.string().min(3).max(30).required().messages({
                "string.empty": "Name cannot be empty",
                "string.min": "Name must have at least {#limit} characters",
                "string.max": "Name must have at most {#limit} characters",
                "any.required": "Name is required",
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