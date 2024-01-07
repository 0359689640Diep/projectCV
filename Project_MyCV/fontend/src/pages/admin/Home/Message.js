import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Home.module.scss";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Notification from "../../../components/Notification";
import { updateStatusMessage, deleteEmail, sendEmail } from "../../../Services/message";

const cx = classNames.bind(styles);

function Message({item}) {

    const [display, setDisplay] = useState(false);
    const [alert, setAlert] = useState("");
    const [reply, setReply] = useState("");

    const handleDisplay = () => {
        setDisplay(!display);
    };

    const handleLogId = (id) => {
        try {
            updateStatusMessage(id);
        } catch (error) {
            console.log(error);
        }
    };
    const handleRemoteEmail = async (id) => {
        try {
            const result = await deleteEmail(id);
            setAlert(result.message);
            removeEmailFromUI(id);
        } catch (error) {
            console.log(error);
            setAlert("The system is maintenance");
        }
    };
    function removeEmailFromUI(id) {
        // Code để xóa email từ giao diện người dùng (ví dụ: sử dụng DOM manipulation)
        const emailElement = document.getElementById(id);
        emailElement.parentNode.removeChild(emailElement);
    }

    const handleReplyEmail = async (id, NameUserReceiver, EmailReceiver) =>{
        try {
            const body ={
                    _id: id,
                    NameUserReceiver,
                    EmailReceiver,
                    "TitleMessage": "Reply To Gmail",
                    ReplyMessage: reply  
            }
            let result = await  sendEmail(body);
            setAlert(result.message);
        } catch (error) {
            setAlert("The system is maintenance");
            console.log(error);
        }
    }

    return ( 
        <>
        <section className={cx("message")}  id={item._id} onClick={() => handleLogId(item._id)}>
            <article className={cx("title")} onClick={handleDisplay} 
                style={{color: item.Status === 0 ? "#fdfeff" : ""}}>
                <p className={cx("nameTitle")}>{item.NameUserReceiver}</p>
                <h1 className={cx("titleMessage")}>{item.TitleMessage}</h1>
                <i className={cx("bi bi-trash3", "remote")} onClick={() => handleRemoteEmail(item._id)}></i>
            </article>
            <section
                className={cx("container")}
                style={{ display: display ? "block" : "none" }}
            >
                <article className={cx("itemTilteMessage")}>
                    <h1>{item.TitleMessage}</h1>
                </article>
                <article className={cx("itemAccountReceiver")}>
                    <span>{item.NameUserReceiver}</span>
                    <p>{item.EmailReceiver}</p>
                </article>
                <article className={cx("itemContentMessage")}>
                    <p>{item.Content}</p>
                </article>
                <article className={cx("itemReplyMessage")}>
                    <h3>I'm: </h3>
                    <p>{item.ReplyMessage}</p>   
                </article>
                <article  className={cx("itemButtonReplyMessage")}>
                    <Input
                        name="Reply The Message"
                        type="text"
                        required
                        id={`itemReplyMessage-${item._id}`}
                        onFocus={() => {}}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <Button
                        name="Send Message"
                        width="15%"
                        height="10%"
                        padding="1%"
                        onClick={() => handleReplyEmail(item._id, item.NameUserReceiver, item.EmailReceiver)}
                    />
                </article>
            </section>
        </section>        
            {alert && (
                <Notification
                    content={alert}
                    title="Message"
                />
            )}
        </>
    );
}

export default Message;
