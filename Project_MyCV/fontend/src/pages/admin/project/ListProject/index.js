import classNames from "classnames/bind";

import styles from "../project.module.scss";
import { getProject } from "../../../../Services/project";
import { useEffect, useState } from "react";
import Update from "../Update";

const cx = classNames.bind(styles);

function ListProject() {

    const [data, SetData] = useState([]);

    const getAllProject = async () => {
        try {
            const result = await getProject();
            SetData(result.data); 
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