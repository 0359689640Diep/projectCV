import classNames from "classnames/bind";
import { useState} from "react";

import styles from "./CreateAccount.module.scss";
import Input from "../../../components/Input";
import Button from  "../../../components/Button";
import Product from "./MoreProduct";
import { postAccount, uploadImage, cancenAPIAccount } from "../../../Services/account";
import Notification from "../../../components/Notification";

const cx =classNames.bind(styles);

function Account() {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Birthday, setBirthday] = useState("");
    const [From, setFrom] = useState("");
    const [Password, setPassword] = useState("");
    const [Majors, setMajors] = useState("");
    const [Maxim, setMaxim] = useState("");
    const [Describe, setDescribe] = useState("");
    const [CV, setCV] = useState("");
    const [Image, setImages] = useState("");
    const [Logo, setLogo] = useState("");
    const [IconLogo, setIconLogo] = useState("");
    const [Job, setJob] = useState("");
    const [Phone, setPhone] = useState("");
    const [Language, setLanguage] = useState("");


    // thông báo lỗi
    const [error, setError] = useState("");
    const [alert, setAlert] = useState("");

    const [notificationKey, setNotificationKey] = useState(0);

    const handleJob = (data) => {
        setJob(data);
    };
    const handlePhone = (data) => {
        setPhone(data);
    };
    const handleLanguage = (data) => {
        setLanguage(data);
    };
    
    const handleUpAccount = async () => {
        
        try {
            const body = {
                "Name": Name,
                "Email": Email,
                "Birthday": Birthday,
                "Phone": Phone,
                "From": From,
                "Language": Language,
                "Password": Password,
                "Majors": Majors,
                "Maxim": Maxim,
                "Describe": Describe,
                "Job": Job,
            }
            const formImage = new FormData();
            formImage.append("Images", Image);
            formImage.append("CV", CV);
            formImage.append("Logo", Logo);
            formImage.append("IconLogo", IconLogo);

            const retultForm = await postAccount(body);
            if(retultForm.message === "Sign up success"){

               const retultImage =  await uploadImage(formImage);

               if(retultImage.message !== true) {
                   await cancenAPIAccount();
                   setError(retultImage.response.data.error);
                    setNotificationKey(prevKey => prevKey + 1);

               }else{
                setAlert(retultForm.message);
                setError("");
                
                setName("");
                setEmail("");
                setBirthday("");
                setFrom("");
                setPassword("");
                setMajors("");
                setMaxim("");
                setDescribe("");
                setCV("");
                setImages("");
                setLogo("");
                setIconLogo("");
                setJob("");
                setPhone("");
                setLanguage("");
               }
            }else{
                setError(retultForm.response.data.message);

                setNotificationKey(prevKey => prevKey + 1);
            }            
        } catch (error) {
            console.log(error);
        }


    }

    return ( 
        <section className={cx("Container")}>
            <article className={cx("itemLeft")}>
                <Input 
                    name="Name"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Name"
                    onFocus
                    value = {Name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    name="Email"
                    type="email"
                    required
                    title="Can not be empty"
                    id="Email"
                    value = {Email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    name="Birthday"
                    type="date"
                    required
                    title="Can not be empty"
                    id="Birthday"
                    value = {Birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <Input 
                    name="From"
                    type="text"
                    required
                    title="Can not be empty"
                    id="From"
                    value = {From}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <Input 
                    name="Password"
                    type="password"
                    required
                    title="Can not be empty"
                    id="Password"
                    value = {Password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                    name="Majors"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Majors"
                    value = {Majors}
                    onChange={(e) => setMajors(e.target.value)}
                />
                <Input 
                    name="Maxim"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Maxim"
                    value = {Maxim}
                    onChange={(e) => setMaxim(e.target.value)}
                />
                <Input 
                    name="Describe"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Describe"
                    value = {Describe}
                    onChange={(e) => setDescribe(e.target.value)}
                />

            </article>
            <article className={cx("itemRight")}>
                <Product value = {Job} name = "Job" type="text" onDataUpdate={handleJob}/>
                <Product value = {Language} name = "Language" type="text" onDataUpdate={handleLanguage}/>
                <Product value = {Phone} name = "Phone" type="number" onDataUpdate={handlePhone}/>
                <Input 
                    name="CV"
                    type="file"
                    required
                    title="Can not be empty"
                    id="CV"
                    onChange={(e) => setCV(e.target.files[0])}
                />
                <Input 
                    name="Images"
                    type="file"
                    required
                    title="Can not be empty"
                    id="Images"
                    multiple
                    onChange={(e) => setImages(e.target.files[0])}
                />
               <Input 
                    name="Logo"
                    type="file"
                    required
                    title="Can not be empty"
                    id="Logo"
                    onChange={(e) => setLogo(e.target.files[0])}
                />      
               <Input 
                    name="IconLogo"
                    type="file"
                    required
                    title="Can not be empty"
                    id="IconLogo"
                    onChange={(e) => setIconLogo(e.target.files[0])}
                />   
                <Button
                    name="Create Account"
                    width = "30%"
                    height = "7%"
                    onClick={handleUpAccount}
                />                       
            </article>
            {error && (
                <Notification
                    key={notificationKey}
                    content={error}
                    title="Warning"
                    type="warning"
                />
            )}
            {alert && (
                <Notification
                    content={alert}
                    title="Message"
                />
            )}
        </section>
     );
}

export default Account;