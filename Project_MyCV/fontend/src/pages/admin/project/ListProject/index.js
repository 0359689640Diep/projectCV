import classNames from "classnames/bind";

import styles from "../project.module.scss";
import { getProject } from "../../../../Services/project";
import { useEffect, useState } from "react";
import Update from "../Update";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function ListProject() {

    const [data, SetData] = useState([]);
    const navigate = useNavigate();

    const getAllProject = async () => {
        try {
            const result = await getProject();
            if(result.status === 403){
                navigate("/login");
            }else{
                SetData(result.data); 
            }            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllProject();
    }, [])

    return (
        <section className={cx("warrper")}>
            {
                data &&
                data.map((item, index) => (
                    <Update
                        data={item}
                        key={index}
                        callAPI={getAllProject}
                    />
                ))
            }
        </section>
    )
}

export default ListProject;