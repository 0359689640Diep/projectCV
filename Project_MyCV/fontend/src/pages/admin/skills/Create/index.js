import classNames from "classnames/bind";

import styles from "./Create.module.scss";
import Input from "../../../../components/Input";
import MoreSkills from "./MoreSkills";
import { useState } from "react";
import Button from "../../../../components/Button";
import { createSkill } from "../../../../Services/skills";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);

function CreateSkills() {

    const [Skills, SetSkills] = useState([]);
    const [TitleSkills, SetTitleSkills] = useState("");
    const [ContentSkills, SetContentSkills] = useState("");


    const handleCreateSkills = async () => {
        try {
            const data = localStorage.getItem("user");
            const userId = JSON.parse(data)._id;
            const result = await createSkill({"IdAccount": userId, TitleSkills , ContentSkills, Skills});
            if(result.status >= 400){
                toast.warning(result.data.message);
            }else{
                SetTitleSkills("");
                SetContentSkills("");
                SetSkills("");
                toast.success(result.data.message);
            }        
        } catch (error) {
            toast.error("The system is maintenance");
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