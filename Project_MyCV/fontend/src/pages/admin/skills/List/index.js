import classNames from "classnames/bind";
import styles from "./List.module.scss";
import { useEffect, useState } from "react";
import { getSkill } from "../../../../Services/skills";
import { toast } from "react-toastify";
import Update from "../Update";

const cx = classNames.bind(styles);

function ListSkills() {
    
    const [data, setData] = useState([]);


    const getAllSkills = async () => {
        try {
            const result = await getSkill();
            setData(result.data);
        } catch (error) {
            toast.error("Can not data")
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