import classNames from "classnames/bind";

import styles from "./More.module.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../Input";

const cx = classNames.bind(styles);

function More({name, id, type,  dataOnMore, value}) {
    const [data, setData] = useState([]);
    const [InputMore, setInputMore] = useState("");

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
            if(InputMore.length === 0){
                toast.warning(`${name} cannot empty`);
            }else{
                setData([...data,  InputMore]);
                setInputMore("");
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
                        name={name}
                        id={id}
                        required= {true}
                        type={type}
                        value={InputMore}
                        onChange={(e) => {setInputMore(e.target.value)}}
                        onKeyPress={(e) => handleUpData(e)}
                    />
                </section>
                <section className={cx("list-skills")}>
                    <table className={cx("table")}>
                        <thead>
                            <tr>
                                <th>{name}</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            data.length >0 ?
                            <tbody>
                            {
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td> {item}</td>
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

export default More;