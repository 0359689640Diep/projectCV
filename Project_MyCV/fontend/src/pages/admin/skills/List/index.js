import classNames from "classnames/bind";
import styles from "./List.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getSkill } from "../../../../Services/skills";
import Notification from "../../../../components/Notification";
import Update from "../Update";

const cx = classNames.bind(styles);

function ListSkills() {
    
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getAllSkills = async () => {
        try {
            const result = await getSkill();
            setData(result.data);
            if(result.status === 403){
                Notification(result.data.message, "warning");   
                navigate("/login");
            }else{
                setData(result.data);
            };            
        } catch (error) {
            Notification("Can not data", "error");
        }
    }

    useEffect(() => {
        getAllSkills()
    }, []);


    return (
        <section className={cx("warpper")}>
        {
            data && data.map((item, key) => (
                <Update 
                    item={item}
                    key={key}
                    callAPI={getAllSkills}
                />
            ))
        }
        </section>
    )
}
 export default ListSkills;