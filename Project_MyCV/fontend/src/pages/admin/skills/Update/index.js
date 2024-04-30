import classNames from "classnames/bind";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../List/List.module.scss";
import Input from "../../../../components/Input";
import MoreSkills from "../Create/MoreSkills";
import { deleteSkill, updateSkill } from "../../../../Services/skills";
import Notification from "../../../../components/Notification";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

function Update({item, callAPI}) {
    const [Skills, SetSkills] = useState(item.Skills);
    const [TitleSkills, SetTitleSkills] = useState(item.TitleSkills);
    const [ContentSkills, SetContentSkills] = useState(item.ContentSkills);
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const result = await deleteSkill(id);
           Notification(result.data.message, "success");
            if(result.status === 403){
                Notification(result.data.message, "warning");   
                navigate("/login");
            }else{
                callAPI();
            };           
        } catch (error) {
            console.log(error);
           Notification("The system is maintenance", "error");
        }
    } 
    const handleUpdate = async (id) => {

        try {         
            const newData = {TitleSkills, ContentSkills, "Skills": Skills};
            const result = await  updateSkill(newData, id);
            if(result.status >= 400){
                Notification(result.data.message, "warning");
            }else{
                Notification(result.data.message, "success");
                callAPI();
            };
        } catch (error) {
            console.log(error);
            Notification("The system is maintenance", "error");
        }
    } 
    return(
    <section  className={cx("skills")}>
        <Input
            name="Title Skills"
            id="TitleSkills"
            value={TitleSkills}
            onChange={(e) => {SetTitleSkills(e.target.value)}}
        />
        <Input
            name="Content Skills"
            id="ContentSkills"
            value={ContentSkills}
            onChange={(e) => {SetContentSkills(e.target.value)}}
        />
        <MoreSkills
            dataOnMore={SetSkills}
            value={Skills}
        />
        <Button
            name="Delete"
            width="100px"
            height = "35px"
            margin = "20px"
            onClick={() => {handleDelete(item._id)}}
        />
        <Button
            name="Update"
            width="100px"
            height = "35px"
            margin = "20px"
            onClick={(e) => {handleUpdate(item._id)}}
        />
    </section>
    )
}

export default Update;