import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./EditAccount.module.scss";
// import Tables from "../../../components/Popper/Tables";
import FormListAccount from "./formListAccount.js";
import { getAccount } from "../../../Services/account.js";

const cx = classNames.bind(styles);

function EditAccount() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, [])

    // call API
    const fetchAPI = async() => {
        try {
            const result = await getAccount();
            setData(result.dataAccount);
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <section className= {cx("container")}>
            {data.map((item) => (
                <FormListAccount key={item._id} Item ={item} />
            ))}
        </section>
     );
}

export default EditAccount;