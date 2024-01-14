import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./CreateAccount.module.scss";
import Input from "../../../components/Input";
import Button from  "../../../components/Button";
import Product from "./MoreProduct";
import { postAccount } from "../../../Services/account";
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
        const formData = new FormData();
        formData.append("Name", Name);
        formData.append("Email", Email);
        formData.append("Images", Image);
        formData.append("Birthday", Birthday);
        formData.append("Phone", Phone);
        formData.append("From", From);
        formData.append("Language", Language);
        formData.append("Password", Password);
        formData.append("Majors", Majors);
        formData.append("Maxim", Maxim);
        formData.append("Describe", Describe);
        formData.append("CV", CV);
        formData.append("Logo", Logo);
        formData.append("IconLogo", IconLogo);
        formData.append("Job", Job);

        try {
            const retult = await postAccount(formData);
            setError(retult.response.data.message);
        } catch (error) {
            setError(error.response.data.message);
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
                    onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    name="Email"
                    type="email"
                    required
                    title="Can not be empty"
                    id="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    name="Birthday"
                    type="date"
                    required
                    title="Can not be empty"
                    id="Birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                />
                <Input 
                    name="From"
                    type="text"
                    required
                    title="Can not be empty"
                    id="From"
                    onChange={(e) => setFrom(e.target.value)}
                />
                <Input 
                    name="Password"
                    type="password"
                    required
                    title="Can not be empty"
                    id="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                    name="Majors"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Majors"
                    onChange={(e) => setMajors(e.target.value)}
                />
                <Input 
                    name="Maxim"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Maxim"
                    onChange={(e) => setMaxim(e.target.value)}
                />
                <Input 
                    name="Describe"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Describe"
                    onChange={(e) => setDescribe(e.target.value)}
                />

            </article>
            <article className={cx("itemRight")}>
                <Product name = "Job" type="text" onDataUpdate={handleJob}/>
                <Product name = "Language" type="text" onDataUpdate={handleLanguage}/>
                <Product name = "Phone" type="number" onDataUpdate={handlePhone}/>
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
                    content={error}
                    title="Message"
                />
            )}
        </section>
     );
}

export default Account;