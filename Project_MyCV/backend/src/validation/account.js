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

export const signUpValidator = Joi.object({
    userName: Joi.string().min(6).max(255).required().messages({
        "string.empty": "username cannot be empty",
        "string.min": "username must have at least {#limit} characters",
        "string.max": "username must have at most {#limit} characters",
        "any.required": "username is required",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "email is required",
        "string.email": "email is not in correct",  
    }).required().messages({
        "any.required": "email is required",
    }),
    password: Joi.string().min(8).max(255).required().messages({
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
});
