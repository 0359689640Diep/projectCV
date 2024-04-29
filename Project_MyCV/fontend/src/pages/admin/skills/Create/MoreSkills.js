import classNames from "classnames/bind";

import styles from "./Create.module.scss";
import Input from "../../../../components/Input";
import { useEffect, useState } from "react";
import Notification from "../../../../components/Notification";

const cx = classNames.bind(styles)

function MoreSkills({dataOnMore, value}) {

    const [data, setData] = useState([]);
    const [Name, setName] = useState("");
    const [Percentage, setPercentage] = useState("");

    useEffect(() => {
        if(value && value.length > 0){
            setData(value)
        }
        if(value === ""){
            setData([]);
        }
    }, [value]);

    useEffect(() => {
        dataOnMore(data);
    }, [data, dataOnMore]);


    const handleUpData = (e) => {
        if(e.key === "Enter"){
            if(Name.length === 0){
                Notification("Name cannot empty", "warning");
            }
            else if(Percentage.length === 0){
                Notification("Percentage cannot empty", "warning");
            }else{
                if(Percentage < 0 || Percentage > 100){
                    Notification("Percentages do not exceed 0 and 100", "warning");
                }else{  
                    setData([...data,{"Name": Name, "Percentage": Percentage}]);
                    setName("");
                    setPercentage("");
                    
                }
            }
        }
    }

    const handleDelete = (id) => {
        const newData = data.filter((item, index) => index !== id);
        setData(newData);
        dataOnMore(newData);
    }

    return (
        <section className={cx("warpper")}>
            <section className={cx("container")}>
                <section className={cx("input_item")}>
                    <Input
                        name="Name Skills"
                        id="Name"
                        required={true}
                        type="text"
                        value={Name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                    <Input
                        name="Percentage"
                        id="Percentage"
                        required={true}
                        type="number"
                        max="100"
                        min="0"
                        value={Percentage}
                        onChange={(e) => {setPercentage(e.target.value)}}
                        onKeyPress={(e) => handleUpData(e)}
                    />
                </section>
                <section className={cx("list-skills")}>
                    <table className={cx("table")}>
                        <thead>
                            <tr>
                                <th>Name Skills</th>
                                <th>Percentage</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            data.length >0 ?
                            <tbody>
                            {
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td> {item.Name}</td>
                                        <td> {item.Percentage} %</td>
                                        <td><button onClick={() => {handleDelete(index)}} className={cx("Delete")}>Delete</button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        : ""
                        }
                    </table>
                </section>
            </section>
        </section>
    )
}

export default MoreSkills;
