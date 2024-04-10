import className from "classnames/bind";

import styles from "./ItempProject.module.scss";
import { useEffect, useState } from "react";


const cx = className.bind(styles);

function ItemProject({item, idShow, hidlen = "show"}){

    const [data, setData] = useState([]);

    useEffect(() => {
        if( idShow !== undefined && idShow !== null  ){
            const newData = item.filter(Item => Item._id === idShow);
            setData(newData);
        }
    },[item, idShow]);



    if(data.length > 0 && idShow !== null){
        
        const handleClose = (e) => {
            // Ngăn chặn sự lan truyền của sự kiện
            e.stopPropagation();
            setData([]);
            hidlen(null);
        }


        const {Name, Image, Task, Author, Introduce, Technology, ObjectInProject, LinkProject, ...date} = data[0];
    
        return (
            <section className={cx("warpper")}>
                {
                   data.length > 0  ? 
                    <section className={cx("desProject", {'visible': true})}>
                        <article className = {cx("imageDesProject")}>
                            <img src={Image[1]} alt="imgProject"/>
                        </article>
                        <section className = {cx("contentDesProject")}>
                            <section className = {cx("itemContentDesProject")}>
                                <h2>Introduce</h2>
                                <p>{Introduce}</p>
                                <h2>Technology</h2>
                                <ul>
                                {Technology.map((itemTechnology, indexTechnology) => {
                                    return (
                                        <li key={indexTechnology}>{itemTechnology}</li>
                                    )
                                })}
                                </ul>
                                <h2>Objects included in the project</h2>
                                <ul>
                                    {ObjectInProject.map((itemObjectInProject, indexObjectInProject) => {
                                        return (
                                            <li key={indexObjectInProject}>{itemObjectInProject}</li>
                                        )
                                    })}
                                </ul>
                                <a href={`${LinkProject}`}>
                                    <button>Experience now</button>
                                </a>
                            </section>
                            <article className = {cx("icontDesProject")}>
                                 <i onClick={(e) => handleClose(e)} className="bi bi-x-circle"></i>
                            </article>
                        </section>
                    </section>     
                    :        
                    ""    
                }
            </section>
        )
    }

}

export default ItemProject;