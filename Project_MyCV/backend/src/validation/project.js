import Joi from "joi";
export const projectValidator = Joi.object({
    Name: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Name cannot be empty",
        "string.min": "Name must have at least {#limit} characters",
        "string.max": "Name must have at most {#limit} characters",
        "any.required": "Name is required",
    }),

    Author: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Author cannot be empty",
        "string.min": "Author must have at least {#limit} characters",
        "string.max": "Author must have at most {#limit} characters",
        "any.required": "Author is required", 
    }),

    Introduce: Joi.string().min(8).max(255).required().messages({
        "string.empty": "Introduce cannot be empty",
        "string.min": "Introduce must have at least {#limit} characters",
        "string.max": "Introduce must have at most {#limit} characters",
        "any.required": "Introduce is required",
    }),
    Task: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Task cannot be empty",
        "string.min": "Task must have at least {#limit} characters",
        "string.max": "Task must have at most {#limit} characters",
        "any.required": "Task is required",
    }),
    Technology: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Technology cannot be empty",
        "string.min": "Technology must have at least {#limit} characters",
        "string.max": "Technology must have at most {#limit} characters",
        "any.required": "Technology is required",
    }),

    ObjectInProject: Joi.string().min(8).max(255).required().messages({
        "string.empty": "Object In Project cannot be empty",
        "string.min": "Object In Project must have at least {#limit} characters",
        "string.max": "Object In Project must have at most {#limit} characters",
        "any.required": "Object In Project is required",
    }),
    LinkProject: Joi.string().min(8).max(255).required().messages({
        "string.empty": "Link Project cannot be empty",
        "string.min": "Link Project must have at least {#limit} characters",
        "string.max": "Link Project must have at most {#limit} characters",
        "any.required": "Link Project is required",
    })
});