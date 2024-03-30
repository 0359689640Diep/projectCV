import Skills from "../model/skills.js";
import { skillsValidator } from "../validation/skills.js";

export const createSkills = async (req, res) => {
    try {
        const {error} = skillsValidator.validate(req.body, {abortEarly: false});
        if(error){
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({message: errors[0]});
        }
         await Skills.create(req.body);
        return res.status(200).json({message: "Create Skills successful"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "The system is maintenance"})
        
    }
}

export const getAllSkills = async (req, res) => {
    try {
        const resultGetAllSkills = await Skills.find();
        if(resultGetAllSkills.length === 0){
            return res.status(404).json({message: "Not data"});
        }
        return res.status(200).json({data: resultGetAllSkills});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "The system main temp"})        
    }

}

export const deleteSkills = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Skills.findByIdAndDelete({_id: Object(id)});
        if(result !== null){
            return res.status(200).json({message: "Delete skills successful"});
        }
        return res.status(404).json({message: "The requested skills could not be found"})        
    } catch (error) {
        return res.status(500).json({message: "The system is maintenance"})        
    }
}

export const updateSkills = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(req.body);
        const {error} = skillsValidator.validate(req.body, {abortEarly: false});
        if(error){
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({message: errors[0]});
        }
        await Skills.findByIdAndUpdate({_id: Object(id)}, {...req.body});
        return res.status(201).json({message: "Update skills successful"});
    } catch (error) {
        return res.status(500).json({message: "The system is maintenance"})       
    }
}