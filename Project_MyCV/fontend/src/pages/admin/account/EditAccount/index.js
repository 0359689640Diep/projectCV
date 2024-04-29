import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./EditAccount.module.scss";
import FormListAccount from "./formListAccount.js";
import { getAccount } from "../../../../Services/account.js";
import Notification from "../../../../components/Notification.js";

const cx = classNames.bind(styles);
function EditAccount() {
    
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    // call API
    const fetchAPI = async() => {
        try {
            const result = await getAccount();
            if(result.status === 403){
                Notification(result.data.message, "warning");   
                navigate("/login");
            }else{
                setData(result.dataAccount);
            };
        } catch (error) {
           return "no data";
        }
    }
    useEffect(() => {
        fetchAPI();
    }, []);
    

    return ( 
        <section className= {cx("container")}>
            {data.map((item) => (
                <FormListAccount key={item._id} Item ={item} onUpdateData={fetchAPI}/>
            ))}
        </section>
     );
}

export default EditAccount;