import classNames from "classnames/bind";

import styles from "../project.module.scss";
import Input from './../../../../components/Input/index';
import UploadImage from "../../../../components/UploadImage";
import { useState } from "react";
import More from "../../../../components/More";
import Button from "../../../../components/Button";
import { updateProject, deleteProject } from "../../../../Services/project";
import Notification from "../../../../components/Notification";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Update({data, callAPI}){

    const [Name, SetName] = useState(data.Name);
    const [Introduce, SetIntroduce] = useState(data.Introduce);
    const [LinkProject, SetLinkProject] = useState(data.LinkProject);
    const [Image, SetImage] = useState(data.Image);
    const [Author, SetAuthor] = useState(data.Author);
    const [Technology, SetTechnology] = useState(data.Technology);
    const [Task, SetTask] = useState(data.Task);
    const [ObjectInProject, SetObjectInProject] = useState(data.ObjectInProject);
    const navigate = useNavigate();

    const handleUpdateProjet = async (id) => {

        const formData = new FormData();

        formData.append("Name", Name);
        formData.append("Introduce", Introduce);
        formData.append("LinkProject", LinkProject);
        formData.append("Author", Author);
        formData.append("Technology", Technology);
        formData.append("Task", Task);
        formData.append("ObjectInProject", ObjectInProject);


        // Lặp qua từng phần tử trong object Image
        for (const key in Image) {
            if (Object.hasOwnProperty.call(Image, key)) {
                const file = Image[key];
                formData.append("Image", file);
            }
        }

        const result = await updateProject(formData, id);
        if(result.status >= 400){
            Notification(result.data.message, "warning");
        }else if(result.status === 403){

                Notification(result.data.message, "warning");     
                navigate("/login");
        }
        else{
            Notification(result.data.message, "success");
            
            callAPI();
        };
    }

    const handleDelete = async (id) => {
        try {
            const result = await deleteProject(id);
            Notification(result.data.message, "success");
            if(result.status === 403){
                Notification(result.data.message, "warning");   
                navigate("/login");
            }else{
                callAPI();
            }           
        } catch (error) {
            console.log(error);
            Notification("The system is maintenance", "error");
        }
    }

    return (
        <section className={cx("content")}>
            <Input
                name="Name"
                type="text"
                id="Name"
                value={Name}
                onChange={(e) => (SetName(e.target.value))}
            />
            <Input
                name="Introduce"
                type="text"
                id="Introduce"
                value={Introduce}
                onChange={(e) => (SetIntroduce(e.target.value))}
            />
            <Input
                name="Link Project"
                type="text"
                id="LinkProject"
                value={LinkProject}
                onChange={(e) => (SetLinkProject(e.target.value))}
            />
            <UploadImage
                name="Image"
                id="Image"
                required={true}
                multiple={true}
                Item={data.Image}
                value='1'
                onImageChange={SetImage}
            />
            <More
                name="Author"
                id="Author"
                type="text"
                value={Author}
                dataOnMore={SetAuthor}
            />
            <More
                name="Task"
                id="Task"
                type="text"
                value={Task}
                dataOnMore={SetTask}
            />
            <More
                name="Technology"
                id="Technology"
                type="text"
                value={Technology}
                dataOnMore={SetTechnology}
            />
            <More
                name="Object In Project"
                id="ObjectInProject"
                type="text"
                value={ObjectInProject}
                dataOnMore={SetObjectInProject}
            />
            <Button
                name="Update Project"
                width = "150px"
                height = "40px"
                onClick={() => {handleUpdateProjet(data._id)}}
            />
            <Button
                name="Delete Project"
                width = "150px"
                height = "40px"
                margin = "0 2%"
                onClick={() => {handleDelete(data._id)}}
            />
        </section>
    );
}

export default Update;