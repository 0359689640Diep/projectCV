import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Home.module.scss";
import Message from "./Message";
import { getMessage } from "../../../Services/message";

const cx = classNames.bind(styles);

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Call the API when the component mounts
        fetchAPI();
    }, []);

    // Call API
    const fetchAPI = async () => {
        try {
            const result = await getMessage();
            setData(result.dataMessage);
        } catch (error) {
            console.log(error);
        }
    };
    // săp xếp mảng
    data.sort((a, b) => {
        if (a.Status === 0 && b.Status !== 0) {
            return -1; // a lên trên b
        } else if (a.Status !== 0 && b.Status === 0) {
            return 1; // b lên trên a
        } else {
            return 0; // giữ nguyên vị trí của a và b
        }
    });

    return (
        <section className={cx("listMessage")}>
            {data.map((item) => (
                <Message key={item._id} item={item}/>
            ))}
        </section>
    );
}

export default Home;
