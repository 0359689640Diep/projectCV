import classNames from "classnames/bind";

import styles from "./List.module.scss";
import {  useEffect, useRef, useState } from "react";
import { getResult, deleteResult, updateResult } from "../../../../Services/result";
import Notification from "../../../../components/Notification";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles)

function ListResult() {

    const [data, SetData] = useState([]);
    const [update, SetUpdate] = useState(-1);
    const navigate = useNavigate();

    const getAPI = async () => {
        try {
            const resultData = await getResult();
            if(resultData.status === 403){
                Notification(resultData.data.message, "warning");   
                navigate("/login");
            }else{
                SetData(resultData.data);
            };            
        } catch (error) {
            Notification("The system is maintenance", "error");
            console.log("error: ".error);
        }
    }

    useEffect(() => {
        getAPI();
    }, []);

    const handleDelete = async (id) => {
        try {
            const resultDelete = await deleteResult(id);
            Notification(resultDelete.data.message, "success");  
            if(resultDelete.status === 403){
                Notification(resultDelete.data.message, "warning");   
                navigate("/login");
            }else{
                getAPI();
            };
        } catch (error) {
          console.log(error);  
          Notification("The system is maintenance", "error");
        }
    }

    const Edit = (item, key) => {

        const [Name, SetName] = useState(item.item.Name);
        const [Degree, SetDegree] = useState(item.item.Degree);
        const [Date, SetDate] = useState(item.item.Date);
        const [SchoolName, SetSchoolName] = useState(item.item.SchoolName);
        const [Describe, SetDescribe] = useState(item.item.Describe);
        const [Type, SetType] = useState(item.item.Type);

        const inputRef = useRef(null);

        useEffect(() => {
            inputRef.current.focus();
        }, []);

        const handleName  = (e) => {SetName(e)}
        const handleDegree  = (e) => {SetDegree(e)}
        const handleDate  = (e) => {SetDate(e)}
        const handleSchoolName  = (e) => {SetSchoolName(e)}
        const handleDescribe  = (e) => {SetDescribe(e)}
        const handleType  = (e) => {SetType(e)}

        const handleUpdateResult = async () => { 
            try {
                const resultUpdate = await updateResult({Name, Degree, Date, SchoolName, Describe, Type}, update);
                if(resultUpdate.status >= 404){
                    Notification(resultUpdate.data.message, "warning");
                }
                else if(resultUpdate.status === 403){

                    Notification(resultUpdate.data.message, "warning");     
                    navigate("/login");
                }                   
                else{
                    Notification(resultUpdate.data.message, "success");
                    SetUpdate(-1);
                    getAPI();
                };
                
            } catch (error) {
                Notification("The system is maintenance", "error");
                console.log(error);
            }
        }
        return(
            <tr key={key}>
                <td> <input ref={inputRef} onChange={(e) => handleName(e.target.value)} name="Name" value={Name}/></td>
                <td> <input onChange={(e) => handleDegree(e.target.value)} name="Degree" value={Degree} /></td>
                <td> <input type="date" onChange={(e) => handleDate(e.target.value)} name="Date" value={Date} /></td>
                <td> <input onChange={(e) => handleSchoolName(e.target.value)} name="SchoolName" value={SchoolName} /> </td>
                <td> <input onChange={(e) => handleDescribe(e.target.value)} name="Describe" value={Describe} /></td>
                <td>
                    <select name="Describe"  onChange={(e) => handleType(e.target.value)}>
                        <option value={Type} >{Type === 0 ? "Education" : "Experience"}</option>
                        <option value="0">Education</option>
                        <option value="1">Experience</option>
                    </select>
                </td>
                <td> <button onClick={() => {handleUpdateResult()}} className={cx("Update")}>Update</button></td>
            </tr>            
        )
    }

    return (
        <section className={cx("warpper")}>
            <table className={cx("table")}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Degree</th>
                        <th>Date</th>
                        <th>School Name</th>
                        <th>Describe</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    data && Object.keys(data).length !== 0 ? 
                <tbody>
                    {
                        
                        data.map((item, index) => (
                            update === item._id ? <Edit item={item} key={index}/> :
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.Degree}</td>
                                <td>{item.Date}</td>
                                <td>{item.SchoolName}</td>
                                <td>{item.Describe}</td>
                                <td>{item.Type === 0 ? "Education": "Experience"}</td>
                                <td>
                                    <button onClick={() => {handleDelete(item._id)}} className={cx("Delete")}>Delete</button>
                                    <button onClick={() => {SetUpdate(item._id)}} className={cx("Edit")}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                    : ""
                }
                
            </table>
        </section>
    )
}

export default ListResult;