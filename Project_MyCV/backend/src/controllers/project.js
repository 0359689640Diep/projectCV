import dotenv from "dotenv";

import { deleteImage, deleteUploadedImages } from "../helpers/image.js";
import Project from "../model/project.js";
import { projectValidator } from "../validation/project.js";

dotenv.config();
const baseUrl = process.env.baseUrl;

export const update = async (req,res) => {
    try {
        const {Image,...data} = req.body;
        const {Author, Technology, ObjectInProject, Task, ...dataObject} = data;
        const { error } = projectValidator.validate(data, { abortEarly: false });
  
        if (error) {
             // Nếu có lỗi, xóa các file ảnh đã được tải lên
            deleteUploadedImages(req.files);

            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors[0]
            });
        }

        const id = req.params.id;
        const newData = {
            "IdAccount": id,
            ...dataObject,
            Task: Task.split(","),
            Technology: Technology.split(","),
            Author: Author.split(","),
            ObjectInProject: ObjectInProject.split(","),          
        }

        // kiem tra xem anh co duoc up len hay khong
        if(Object.keys(req.files).length >0) {
            // lay anh cu dua theo id
            const imageByIdProduct = await Project.findById({_id: Object(id)}, {Image: 1});

            // neu Image khong trống  thì  
            const {Image} = req.files;
            if(Image && Image !== undefined){
                // lấy ảnh mới
                newData["Image"] = Image.map(file => file.filename);
                // xoa anh cu
                deleteImage(imageByIdProduct.Image);
            }
        }
     
        await Project.findByIdAndUpdate(id, {...newData});
        return res.status(200).json({
            message: "Update project success"
        })
    } catch (error) {
        deleteUploadedImages(req.files);
        return res.status(500).json({
            message: "The system is maintenance"
        });        
    }
}
export const create = async (req,res) => {
    try {
        const { error } = projectValidator.validate(req.body, { abortEarly: false });
        if (error) {
             // Nếu có lỗi, xóa các file ảnh đã được tải lên
            deleteUploadedImages(req.files)

            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors[0]
            });
        }

        if(req.files && req.files.Image && req.files.Image.length < 0){
            return res.status(404).json({
                message: "Image cannot be empty"
            })
        }

        const Images = req.files.Image.map(file => file.filename);

        const {Author, Technology, ObjectInProject, Task, ...data} = req.body;

        const ObjectInProjectArr = ObjectInProject.split(",");
        const AuthorArr = Author.split(",");
        const TechnologyArr = Technology.split(",");
        const TaskArr = Task.split(",");

        await Project.create({
            "IdAccount": req.user._id,
            ...data,
            Task: TaskArr,
            Technology: TechnologyArr,
            Author: AuthorArr,
            ObjectInProject: ObjectInProjectArr,
            Image: Images
        });
        return res.status(200).json({
            message: "Create project success"
        })
    } catch (error) {
        deleteUploadedImages(req.files);
        return res.status(500).json({
            message: "The system is maintenance"
        });        
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Project.findOneAndDelete({_id: Object(id)});
        if(result !== null){
            deleteImage(result.Image);
            return res.status(200).json({message: "Delete project successful"});
        }
        return res.status(404).json({
            message: "The requested project could not be found"
        })       
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })        
    }
}

export const getAll = async (req, res) => {
    try {
        const result = await Project.find();
        if(result.length === 0){
            return res.status(404).json({
                message: "No Project"
            })
        }
        result.forEach(obj => {
            obj.Image.forEach((filed, key) => {
                obj.Image[key] = baseUrl+filed;
            })
        })
        return res.status(200).json({data: result});
    } catch (error) {
        return res.status(500).json({
            message: "The system is maintenance"
        })        
    }
}