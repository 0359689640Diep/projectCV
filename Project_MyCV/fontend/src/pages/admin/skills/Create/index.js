import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Create.module.scss";
import Input from "../../../../components/Input";
import MoreSkills from "./MoreSkills";
import { useState } from "react";
import Button from "../../../../components/Button";
import { createSkill } from "../../../../Services/skills";
import Notification from "../../../../components/Notification";

const cx = classNames.bind(styles);

function CreateSkills() {

    const [Skills, SetSkills] = useState([]);
    const [TitleSkills, SetTitleSkills] = useState("");
    const [ContentSkills, SetContentSkills] = useState("");
    const navigate = useNavigate();

    const handleCreateSkills = async () => {
        try {
            const result = await createSkill({TitleSkills , ContentSkills, Skills});
            if(result.status >= 400){
                Notification(result.data.message, "warning");
            }
            else if(result.status === 403){
                Notification(result.data.message, "warning");     
                navigate("/login");
            }
            else{
                SetTitleSkills("");
                SetContentSkills("");
                SetSkills("");
                Notification(result.data.message, "success");
            }        
        } catch (error) {
            Notification("The system is maintenance", "error");
        }
    }

    return (
        <section className={cx("warpper")}>
            <Input
                name="Title Skills"
                type="text"
                required={true}
                id="TitleSkills"
                value={TitleSkills}
                onChange={(e) => {SetTitleSkills(e.target.value)}}
            />
            <Input
                name="Content Skills"
                type="text"
                required={true}
                id="ContentSkills"
                value={ContentSkills}
                onChange={(e) => {SetContentSkills(e.target.value)}}
            />
            <MoreSkills
                value={Skills}
                dataOnMore={SetSkills}
            />
            <Button
                name="Create Skills"
                onClick={() => {handleCreateSkills()}}

                width= "130px"
                height= "45px"
            />
        </section>
    );

}
 export default CreateSkills;