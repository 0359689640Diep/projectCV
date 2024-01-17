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
    Phone: Joi.array()
        .items(Joi.number().required()).required().messages({
        "array.empty": "Phone array cannot be empty",
        "any.required": "Phone is required",
        "number.empty": "Phone cannot be empty"
    }),
    From: Joi.string().min(8).max(255).required().messages({
        "string.empty": "From cannot be empty",
        "string.min": "From must have at least {#limit} characters",
        "string.max": "From must have at most {#limit} characters",
        "any.required": "From is required", 
    }),
    Language: Joi.array()
        .items(Joi.string().required()).required().messages({
        "array.empty": "Language array cannot be empty",
        "any.required": "Language is required",
        "string.empty": "Language cannot be empty"
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
    Job: Joi.array()
        .items(Joi.string().required()).required().messages({
        "array.base": "Job must be an array",
        "array.empty": "Job array cannot be empty",
        "any.required": "Job is required",
        "string.empty": "Job cannot be empty"
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
    })
});

export const validateImage = (data) => {
    console.log(data);
}
