import Joi from "joi";

export const signInValidator = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": "email is required",
        "string.email": "email is not in correct",  
    }).required().messages({
        "any.required": "email  is required",
    }),
    password: Joi.string().min(8).max(255).required().messages({
        "string.empty": "password cannot be empty",
        "string.min": "password must have at least {#limit} characters",
        "string.max": "password must have at most {#limit} characters",
        "any.required": "password is required",
    })
});

const isDateBeforeNow = (value, helpers) => {
    const currentDate = new Date();
    if(new Date(value) >= currentDate){
        return helpers.message('The date must be before the current date');
    }
    return value;
}

export const CreateAccountValidator = Joi.object({
    Name: Joi.string().min(6).max(255).required().messages({
        "string.empty": "Name cannot be empty",
        "string.min": "Name must have at least {#limit} characters",
        "string.max": "Name must have at most {#limit} characters",
        "any.required": "Name is required",
    }),
    Email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.email": "Email is not in correct",  
    }).required().messages({
        "any.required": "Email is required",
    }),
    Birthday: Joi.date().iso().custom(isDateBeforeNow).required().messages({
            "date.base": "Birthday must be a valid date",
            "date.format": "Date of birth is not in correct format",
            "any.required": "Birthday is required",
            "any.custom": "The date must be before the current date",
    }),
    From: Joi.string().min(8).max(255).required().messages({
        "string.empty": "From cannot be empty",
        "string.min": "From must have at least {#limit} characters",
        "string.max": "From must have at most {#limit} characters",
        "any.required": "From is required", 
    }),

    Password: Joi.string().min(8).max(255).required().messages({
        "string.empty": "password cannot be empty",
        "string.min": "password must have at least {#limit} characters",
        "string.max": "password must have at most {#limit} characters",
        "any.required": "password is required",
    }),
    Majors: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Majors cannot be empty",
        "string.min": "Majors must have at least {#limit} characters",
        "string.max": "Majors must have at most {#limit} characters",
        "any.required": "Majors is required",
    }),

    Maxim: Joi.string().min(8).max(255).required().messages({
        "string.empty": "Maxim cannot be empty",
        "string.min": "Maxim must have at least {#limit} characters",
        "string.max": "Maxim must have at most {#limit} characters",
        "any.required": "Maxim is required",
    }),
    Describe: Joi.string().min(8).max(255).required().messages({
        "string.empty": "Describe cannot be empty",
        "string.min": "Describe must have at least {#limit} characters",
        "string.max": "Describe must have at most {#limit} characters",
        "any.required": "Describe is required",
    }),
    Job: Joi.string().min(3).max(255).required().required().messages({
        "string.empty": "Job cannot be empty",
        "string.min": "Job must have at least {#limit} characters",
        "string.max": "Job must have at most {#limit} characters",
        "any.required": "Job is required",
    }),
    Language: Joi.string().min(3).max(255).required().required().messages({
        "string.empty": "Language cannot be empty",
        "string.min": "Language must have at least {#limit} characters",
        "string.max": "Language must have at most {#limit} characters",
        "any.required": "Language is required",
    }),
    Phone: Joi.string().min(10).max(255).required().required().messages({
        "number.empty": "Phone cannot be empty",
        "string.min": "Phone must have at least {#limit} characters",
        "string.max": "Phone must have at most {#limit} characters",
        "any.required": "Phone is required",
    }),
});

export const validateImage = (data) => {
    console.log(data);
}

