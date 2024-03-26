import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Create.module.scss";
import Input from "../../../../components/Input";
import Textarea from "../../../../components/Textarea";
import Button from './../../../../components/Button/index';
import Option from "../../../../components/Option";
import { createResult } from "../../../../Services/result";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);
const type = [{0: "Education"},{1: "Experience"}];

function CreateResult() {
    const [Name, setName] = useState("");  
    const [Degree, setDegree] = useState("");  
    const [SchoolName, setSchoolName] = useState("");  
    const [Date, setDate] = useState("");  
    const [Describe, setDescribe] = useState("");  
    const [Type, setType] = useState("");  

    const handleType = (value) => {
        setType(value);
    }
    const handleDescribe = (value) => {
        setDescribe(value);
    }
    const handleSchoolName = (value) => {
        setSchoolName(value);
    }
    const handleDate = (value) => {
        setDate(value);
    }
    const handleDegree = (value) => {
        setDegree(value);
    }
    const handleName = (value) => {
        setName(value);
    }
    const handleSubmit = async () => {

        const data = localStorage.getItem("user");
        const userId = JSON.parse(data)._id;
        const newData = {"IdAccount" : userId, Name, SchoolName,Describe, Type, Date, Degree};
        const resultCreate = await createResult(newData);

        if(resultCreate.status >= 400){
            toast.warning(resultCreate.data.message);
        }else{
            toast.success(resultCreate.data.message);
            setName("");
            setDegree("");
            setSchoolName("");
            setDate("");
            setDescribe("");
            setType("");

        }

    }
      
    return (
        <section className= {cx("Container")}>
            <Input
                name="Name"
                type="text"
                required = {true}
                id="Name"
                value={Name}
                onChange={(e) => {handleName(e.target.value)}}
            />
            <Input
                name="Degree"
                type="text"
                required = {true}
                id="Degree"
                value={Degree}
                onChange={(e) => {handleDegree(e.target.value)}}
            />
            <Input
                name="SchoolName"
                type="text"
                required = {true}
                id="SchoolName"
                value={SchoolName}
                onChange={(e) => {handleSchoolName(e.target.value)}}
            />
            <Input
                name="Date"
                type="date"
                required = {true}
                id="Date"
                value={Date}
                onChange={(e) => {handleDate(e.target.value)}}
            />
            <Textarea
                name="Describe"
                id="Describe"
                rols="20"
                rows="20"
                required={true}
                value={Describe}
                onChange={(e) => {handleDescribe(e.target.value)}}

            />
            <Option
                name="Type"
                data={type}
                value = {Type}
                valueChange={handleType}
            />
            <Button
                name="Create Result"
                width = "145px"
                height = "40px"    
                onClick={handleSubmit}            
            />
        </section>
    );
}

export default CreateResult;