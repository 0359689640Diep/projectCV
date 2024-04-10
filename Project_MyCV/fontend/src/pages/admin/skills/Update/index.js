import classNames from "classnames/bind";
import styles from "../List/List.module.scss";
import Input from "../../../../components/Input";
import MoreSkills from "../Create/MoreSkills";
import {  useState } from "react";
import { deleteSkill, updateSkill } from "../../../../Services/skills";
import { toast } from "react-toastify";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

function Update({item, callAPI}) {
    const [Skills, SetSkills] = useState(item.Skills);
    const [TitleSkills, SetTitleSkills] = useState(item.TitleSkills);
    const [ContentSkills, SetContentSkills] = useState(item.ContentSkills);

    const handleDelete = async (id) => {
        try {
            const resutlt = await deleteSkill(id);
            toast.success(resutlt.data.message);
            callAPI();
        } catch (error) {
            console.log(error);
            toast.error("The system is maintenance")
        }
    } 
    const handleUpdate = async (id) => {

        try {
            const data = localStorage.getItem("user");
            const userId = JSON.parse(data)._id;            
            const newData = {"IdAccount": userId, TitleSkills, ContentSkills, "Skills": Skills};
            const result = await  updateSkill(newData, id)
            if(result.status >= 400){
                toast.warning(result.data.message);
            }else{
                toast.success(result.data.message);
                callAPI();
            };
        } catch (error) {
            console.log(error);
            toast.error("The system is maintenance")
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