import classNames from "classnames/bind";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CreateAccount.module.scss";
import Input from "../../../../components/Input/index.js";
import Button from "../../../../components/Button/index.js";
import Product from "./MoreProduct";
import { postAccount } from "../../../../Services/account.js";
import PDFViewer from "../../../../components/PDFViewer/index.js";
import Notification from "../../../../components/Notification.js";

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
    const navigate = useNavigate();

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
            const formData  = new FormData();
            formData.append("Name", Name);
            formData.append("Email", Email);
            formData.append("Birthday", Birthday);
            formData.append("From", From);
            formData.append("Password", Password);
            formData.append("Majors", Majors);
            formData.append("Maxim", Maxim);
            formData.append("Describe", Describe);
            formData.append("Job", Job);
            formData.append("Language", Language);
            formData.append("Phone", Phone);
            formData.append("CV", CV);
            formData.append("Logo", Logo);
            formData.append("IconLogo", IconLogo);
      
            // Lặp qua từng phần tử trong object Image
            for (const key in Image) {
                if (Object.hasOwnProperty.call(Image, key)) {
                    const file = Image[key];
                    formData.append("Image", file);
                }
            }
            const retultformData  = await postAccount(formData);

            if(retultformData.status === 200){
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
                Notification(retultformData.data.message, "success");
            }else if(retultformData.status === 403){

                Notification(retultformData.data.message, "warning");     
                navigate("/login");
            }
            else{
                Notification(retultformData.data.message, "warning");     
            }
        } catch (error) {
            Notification("The system is maintenance", "error");
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
                    Icons = "true"
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
                <PDFViewer
                    name="CV"
                    value={setCV}
                />
                <Input 
                    name="Images"
                    type="file"
                    required
                    title="Can not be empty"
                    id="Images"
                    multiple
                    onChange={(e) => setImages(e.target.files)}
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
        </section>
     );
}

export default Account;