
import Resule from "../model/resule.js";
import { resuleValidator } from "../validation/resule.js";

const getAll = async (req, res) => {
    try {
        let result = await Resule.find();

        if (result.length === 0) {
            return res.status(404).json({ message: "No data" });
        }

        return res.status(200).json({ data: result });
    } catch (error) {

        return res.status(500).json({ message: "The system is under maintenance" });
    }
};


const createResul = async (req, res) => {
    try {
        const {IdAccount, Type, ...data} = req.body;
        const { error } = resuleValidator.validate(data, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors[0]
            });
        }
        await Resule.create({...req.body});     
           return res.status(200).json({
            message: "Create a successful summary"
           })
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })
    }
}

const deleteResul = async (req, res) => {
    try {
        const id  = req.params.id;
        const result = await Resule.findByIdAndDelete({_id: Object(id)});
        if(result !== null){
            return res.status(200).json({message: "Resule deletion was successful"})
        };
        return res.status(404).json({message: "The requested resule could not be found"})
    } catch (error) {
        return res.status(500).json({message: "The system is maintenance"})
    }
}

const editResult = async (req, res) => {
    try {
        const {IdAccount, Type, ...data} = req.body;
        const {error} = resuleValidator.validate(data, {abortEarly: false});
        if(error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({message:  errors[0]});
        }
        const id = req.params.id;
        await Resule.findByIdAndUpdate({_id: Object(id)}, {...req.body});
        return res.status(201).json({message: "Update successful"});
    } catch (error) {
        return res.status(500).json({message: "The system is maintenance"})
    }
}

const getAllResult = async (req, res) => {
    try {
        const type = req.params.type;
        const result = await Resule.find({Type: type});
        if(result.length === 0){
            return res.status(404).json({message: "No data"});
        }
        return res.status(200).json({data: result});

    } catch (error) {
        return res.status(500).json({message: "The system is maintenance"});
    }
}



export {createResul, deleteResul, editResult, getAllResult, getAll}