import classNames from "classnames/bind";

import styles from "../project.module.scss";
import Input from './../../../../components/Input/index';
import UploadImage from "../../../../components/UploadImage";
import { useState } from "react";
import More from "../../../../components/More";
import Button from "../../../../components/Button";
import { createProject } from "../../../../Services/project";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function CreateProject() {
    
    const [Name, SetName] = useState("");
    const [Introduce, SetIntroduce] = useState("");
    const [LinkProject, SetLinkProject] = useState("");
    const [Image, SetImage] = useState([]);
    const [Author, SetAuthor] = useState([]);
    const [Technology, SetTechnology] = useState([]);
    const [ObjectInProject, SetObjectInProject] = useState([]);

    const handleCreateProjet = async () => {

        const formData = new FormData();

        formData.append("Name", Name);
        formData.append("Introduce", Introduce);
        formData.append("LinkProject", LinkProject);
        formData.append("Author", Author);
        formData.append("Technology", Technology);
        formData.append("ObjectInProject", ObjectInProject);


        // Lặp qua từng phần tử trong object Image
        for (const key in Image) {
            if (Object.hasOwnProperty.call(Image, key)) {
                const file = Image[key];
                formData.append("Image", file);
            }
        }

        const result = await createProject(formData);

        if(result.status >= 400){
            toast.warning(result.data.message);
        }else{
            toast.success(result.data.message);
            
            SetName("");
            SetIntroduce("");
            SetLinkProject("");
            SetImage("");
            SetAuthor("");
            SetTechnology("");
            SetObjectInProject("");
        };
    }

    return (
        <section className={cx("warrper")}>
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
                value={Image}
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
                name="Create Project"
                width = "150px"
                height = "40px"
                onClick={() => {handleCreateProjet()}}
            />
        </section>
    )
}

export default CreateProject;