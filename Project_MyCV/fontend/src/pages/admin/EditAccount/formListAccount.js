import classNames from "classnames/bind";
import { useState } from "react";
 import {toast } from 'react-toastify';

import styles from "./EditAccount.module.scss";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import Product from "../CreateAccount/MoreProduct";
import UploadImage from "../../../components/UploadImage";
import { deleteAccount } from "../../../Services/account";

const cx = classNames.bind(styles);

function FormListAccount({Item, onUpdateData}) {
    const [Job, setJob] = useState("");
    const [Phone, setPhone] = useState("");
    const [Language, setLanguage] = useState("");

    const handleJob = (data) => {
        setJob(data);
    };
    const handlePhone = (data) => {
        setPhone(data);
    };
    const handleLanguage = (data) => {
        setLanguage(data);
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
                    value = {Item.Name}
                    // onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    name="Email"
                    type="email"
                    required
                    title="Can not be empty"
                    id="Email"
                    value = {Item.Email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    name="Birthday"
                    type="date"
                    required
                    title="Can not be empty"
                    id="Birthday"
                    value = {Item.Birthday}
                    // onChange={(e) => setBirthday(e.target.value)}
                />
                <Input 
                    name="From"
                    type="text"
                    required
                    title="Can not be empty"
                    id="From"
                    value = {Item.From}
                    // onChange={(e) => setFrom(e.target.value)}
                />
                <Input 
                    name="Password"
                    type="password"
                    required
                    title="Can not be empty"
                    id="Password"
                    value = {Item.Password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                    name="Majors"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Majors"
                    value = {Item.Majors}
                    // onChange={(e) => setMajors(e.target.value)}
                />
                <Textarea 
                    name="Maxim"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Maxim"
                    value = {Item.Maxim}
                    // onChange={(e) => setMaxim(e.target.value)}
                />
                <Textarea 
                    name="Describe"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Describe"
                    value = {Item.Describe}
                    // onChange={(e) => setDescribe(e.target.value)}
                />

                <Product value = {Item.Job} name = "Job" type="text" onDataUpdate={handleJob}/>
                <Product value = {Item.Language} name = "Language" type="text" onDataUpdate={handleLanguage}/>
                <Product value = {Item.Phone} name = "Phone" type="number" onDataUpdate={handlePhone}/>
            </article>
            <article className={cx("itemRight")}>
                <UploadImage 
                    name="CV"
                    type="file"
                    Item = {Item.CV}
                    id="CV"
                    // onChange={(e) => setCV(e.target.files[0])}
                />
                <UploadImage 
                    name="Images"
                    type="file"
                    Item = {Item.Images}
                    id="Images" 
                    // onChange={(e) => setImages(e.target.files[0])}
                />
               <UploadImage 
                    name="Logo"
                    type="file"
                    Item = {Item.Logo}
                    id="Logo"
                    // onChange={(e) => setLogo(e.target.files[0])}
                />      
               <UploadImage 
                    name="IconLogo"
                    type="file"
                    Item = {Item.IconLogo}
                    id="IconLogo"
                    // onChange={(e) => setIconLogo(e.target.files[0])}
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
                    // onClick={handleUpAccount}
                />                       
            </article>

        </section> 
    );
}

export default FormListAccount;