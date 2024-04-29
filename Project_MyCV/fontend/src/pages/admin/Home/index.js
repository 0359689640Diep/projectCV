import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss";
    import Message from "./Message";
import { getMessage } from "../../../Services/message";
import Notification from "../../../components/Notification";

const cx = classNames.bind(styles);

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    // Call API
    const fetchAPI = async () => {
        try {
            const result = await getMessage();
             if(result.status === 403){
                Notification(result.data.message, "warning");   
                navigate("/login");
            }else{
                setData(result.dataMessage);
            }
        } catch (error) {
            Notification("no data", "warning");
        }
    };

    useEffect(() => {
        // Call the API when the component mounts
        fetchAPI();
    }, []);    

    // săp xếp mảng
    if(data){
        data.sort((a, b) => {
            if (a.Status === 0 && b.Status !== 0) {
                return -1; // a lên trên b
            } else if (a.Status !== 0 && b.Status === 0) {
                return 1; // b lên trên a
            } else {
                return 0; // giữ nguyên vị trí của a và b
            }
        });
    }

    return (
        <section className={cx("listMessage")}>
            {data ? 
                data.map((item) => (
                <Message key={item._id} item={item} callAPi={fetchAPI}/>
            )) 
            : ""
            }
        </section>
    );
}

export default Home;
