import classNames from "classnames/bind";
import { useState } from "react";
 import {toast } from 'react-toastify';

import styles from "./EditAccount.module.scss";
import Input from "../../../../components/Input/index.js";
import Textarea from "../../../../components/Textarea";
import Button from "../../../../components/Button/index.js";
import Product from "../CreateAccount/MoreProduct";
import UploadImage from "../../../../components/UploadImage";
import { deleteAccount, updateAccount } from "../../../../Services/account.js";

const cx = classNames.bind(styles);

function FormListAccount({Item, onUpdateData}) {
    
    const [Name, setName] = useState(Item.Name);
    const [Email, setEmail] = useState(Item.Email);
    const [Birthday, setBirthday] = useState(Item.Birthday);
    const [From, setFrom] = useState(Item.From);
    const [Password, setPassword] = useState(Item.Password);
    const [Majors, setMajors] = useState(Item.Majors);
    const [Maxim, setMaxim] = useState(Item.Maxim);
    const [Describe, setDescribe] = useState(Item.Describe);
    const [CV, setCV] = useState(Item.CV);
    const [Image, setImages] = useState(Item.Image);
    const [Logo, setLogo] = useState(Item.Logo);
    const [IconLogo, setIconLogo] = useState(Item.IconLogo);
    const [Job, setJob] = useState(Item.Job);
    const [Phone, setPhone] = useState(Item.Phone);
    const [Language, setLanguage] = useState(Item.Language);

    const handleJob = (data) => {
        setJob(data);
    };
    const handleLanguage = (data) => {
        setLanguage(data);
    };
    const handlePhone = (data) => {
        setPhone(data);
    };
    const handleCV = (data) => {
        setCV(data[0]);
    };
    const handleLogo = (data) => {
        setLogo(data[0]);
    };
    const handleImage = (data) => {
        setImages(data);
    };
    const handleIconLogo = (data) => {
        setIconLogo(data[0]);
    };
    
    const handleDeleteAccount = async (id) => {
        try {
            let result = await deleteAccount(id);
            toast.success(result.message);   
             // Gọi hàm callback để cập nhật lại DOM
            onUpdateData();
        } catch (error) {
            toast.error("Hệ thống đang bảo trì");   
        }
    }

    const handleUpdateAccount = async (id) => {
            const formData = new FormData();

            formData.append("Name", Name)
            formData.append("Email", Email)
            formData.append("Birthday", Birthday)
            formData.append("Password", Password)
            formData.append("Majors", Majors)
            formData.append("Maxim", Maxim)
            formData.append("Describe", Describe)
            formData.append("From", From)
            formData.append("Job", Job)
            formData.append("Phone", Phone)
            formData.append("Language", Language)
            if(typeof CV === "object"){
                formData.append("CV", CV)
            }
            if(typeof Logo === "object"){
                formData.append("Logo", Logo)
            }
            if(typeof IconLogo === "object"){
                formData.append("IconLogo", IconLogo)
            }
            if(Image instanceof FileList){
                for (const key in Image) {
                    if (Object.hasOwnProperty.call(Image, key)) {
                        const file = Image[key];
                        formData.append("Image", file);

                    }
                }                
            }

            const retultformData = await updateAccount(formData, id);
            if(retultformData.status >= 400) {
                toast.warning(retultformData.data.message);
            }else{
                toast.success(retultformData.data.message);
                onUpdateData();
            }
    }

    return ( 
        <section className={cx("wrapper")}>
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
                <Textarea 
                    name="Maxim"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Maxim"
                    value = {Maxim}
                     onChange={(e) => setMaxim(e.target.value)}
                />
                <Textarea 
                    name="Describe"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Describe"
                    value = {Describe}
                     onChange={(e) => setDescribe(e.target.value)}
                />

                <Product value = {Job} name = "Job" type="text" onDataUpdate={handleJob}/>
                <Product value = {Language} name = "Language" type="text" onDataUpdate={handleLanguage}/>
                <Product value = {Phone} name = "Phone" type="number" onDataUpdate={handlePhone}/>
            </article>
            <article className={cx("itemRight")}>
                <UploadImage 
                    name="CV"
                    type="file"
                    Item = {CV}
                    id="CV"
                    value="1"
                    onImageChange = {handleCV}
                />
                <UploadImage 
                    name="Images"
                    type="file"
                    Item = {Item.Image}
                    id="Images"
                    value="1"
                    multiple = {true} 
                    onImageChange = {handleImage}
                />
               <UploadImage 
                    name="Logo"
                    type="file"
                    Item = {Item.Logo}
                    id="Logo"
                    value="1"
                    onImageChange = {handleLogo}
                />      
               <UploadImage 
                    name="IconLogo"
                    type="file"
                    Item = {Item.IconLogo}
                    id="IconLogo"
                    value="1"
                    onImageChange = {handleIconLogo}
                />   
                <Button
                    name="Delete Account"
                    width = "30%"
                    height = "7%"
                    onClick={ () => handleDeleteAccount(Item._id)}
                />                       
                <Button
                    name="Update Account"
                    width = "30%"
                    height = "7%"
                    margin = "0 5%"
                    onClick={ () => handleUpdateAccount(Item._id)}
                />                       
            </article>

        </section> 
    );
}

export default FormListAccount;