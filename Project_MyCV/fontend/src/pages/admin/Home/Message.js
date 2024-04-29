import classNames from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { updateStatusMessage, deleteEmail, replyGmail } from "../../../Services/message";
import Notification from "../../../components/Notification";

const cx = classNames.bind(styles);

function Message({item, callAPi}) {

    const [display, setDisplay] = useState(false);
    const [reply, setReply] = useState("");
    const navigate = useNavigate();

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
            Notification(result.data.message, "success");
            if(result.status === 403){
                Notification(result.data.message, "warning");   
                navigate("/login");
            }else{
                callAPi();
            };            
        } catch (error) {
            console.log(error);
            Notification("The system is maintenance", "error");
        }
    };


    const handleReplyEmail = async (id) =>{
        try {
            const result = await replyGmail({"ReplyMessage": reply}, id);   
            if(result.Status >= 404){
                Notification(result.data.message, "warning");
            }
            else if(result.status === 403){

                Notification(result.data.message, "warning");     
                navigate("/login");
            }
            else{
                Notification(result.data.message, "success");
                setReply("");
                callAPi();
            }
        } catch (error) {
            Notification("The system is maintenance", "error");            
            console.log(error);
        }
    }

    return ( 
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
                    <p>{item.ReplyMessage}</p>   
                </article>
                <article  className={cx("itemButtonReplyMessage")}>
                    <Input
                        name="Reply The Message"
                        type="text"
                        required
                        value={reply}
                        onFocus={() => {}}
                        id={`itemReplyMessage-${item._id}`}
                        onChange={(e) => setReply(e.target.value)}
                    />
                    <Button
                        name="Send Message"
                        width="15%"
                        height="10%"
                        padding="1%"
                        onClick={() => handleReplyEmail(item._id)}
                    />
                </article>
            </section>
        </section>        
    );
}

export default Message;
