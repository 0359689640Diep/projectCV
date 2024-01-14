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
        "string.empty": "username cannot be empty",
        "string.min": "username must have at least {#limit} characters",
        "string.max": "username must have at most {#limit} characters",
        "any.required": "username is required",
    }),
    Email: Joi.string().email().required().messages({
        "any.required": "email is required",
        "string.email": "email is not in correct",  
    }).required().messages({
        "any.required": "email is required",
    }),
    Image: Joi.array().items(Joi.string().required()).required().messages({
        "array.base": "Image must be an array",
        "array.empty": "Image array cannot be empty",
        "any.required": "Image is required",
        "string.empty": "Image path cannot be empty",
    }),
    Birthday: Joi.date().iso().custom(isDateBeforeNow).required().messages({
            "date.base": "Birthday must be a valid date",
            "date.format": "Birthday must be in ISO format",
            "any.required": "Birthday is required",
            "any.custom": "The date must be before the current date",
        }),
    Phone: Joi.array()
        .items(Joi.number().required()).required().messages({
        "array.base": "Phone must be an array",
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
        .items(Joi.number().required()).required().messages({
        "array.base": "Language must be an array",
        "array.empty": "Language array cannot be empty",
        "any.required": "Language is required",
        "number.empty": "Language cannot be empty"
    }),
    Password: Joi.string().min(8).max(255).required().messages({
        "string.empty": "password cannot be empty",
        "string.min": "password must have at least {#limit} characters",
        "string.max": "password must have at most {#limit} characters",
        "any.required": "password is required",
    }),
    confirmPassword: Joi.string().min(6).max(255).valid(Joi.ref("password")).required().messages({
        "string.empty": "confirm password cannot be empty",
        "string.min": "confirm password must have at least {#limit} characters",
        "string.max": "confirm password must have at most {#limit} characters",
        "any.required": "confirm password is required",
        "any.only": "Re-entered password does not match the password"
    }),
    Majors: Joi.string().min(3).max(255).required().messages({
        "string.empty": "Majors cannot be empty",
        "string.min": "Majors must have at least {#limit} characters",
        "string.max": "Majors must have at most {#limit} characters",
        "any.required": "Majors is required",
    }),
    Job: Joi.array()
        .items(Joi.number().required()).required().messages({
        "array.base": "Job must be an array",
        "array.empty": "Job array cannot be empty",
        "any.required": "Job is required",
        "number.empty": "Job cannot be empty"
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
    CV: Joi.string().required().messages({
        "string.empty": "CV path cannot be empty",
        "any.required": "CV is required",
    }),
    IconLogo: Joi.string().required().messages({
        "string.empty": "IconLogo path cannot be empty",
        "any.required": "IconLogo is required",
    }),
    Logo: Joi.string().required().messages({
        "string.empty": "Logo path cannot be empty",
        "any.required": "Logo is required",
    }),
});

export const validateImage = (data) => {
    console.log(data);
}
