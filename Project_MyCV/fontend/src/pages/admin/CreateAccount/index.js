import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./CreateAccount.module.scss";
import Input from "../../../components/Input";
import Button from  "../../../components/Button";
import Product from "./MoreProduct";

const cx =classNames.bind(styles);

function Account() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [from, setFrom] = useState(null);
    const [password, setPassword] = useState(null);
    const [majors, setMajors] = useState(null);
    const [maxim, setMaxim] = useState(null);
    const [describe, setDescribe] = useState(null);
    const [CV, setCV] = useState(null);
    const [images, setImages] = useState(null);
    const [logo, setLogo] = useState(null);
    const [iconLogo, setIconLogo] = useState(null);
    const [job, setJob] = useState(null);
    const [phone, setPhone] = useState(null);
    const [language, setLanguage] = useState(null);

    const handleJob = (data) => {
        setJob(data);
    };
    const handlePhone = (data) => {
        setPhone(data);
    };
    const handleLanguage = (data) => {
        setLanguage(data);
    };
    // console.log(job)
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
                <Product name = "Job" onDataUpdate={handleJob}/>
                <Product name = "Language" onDataUpdate={handleLanguage}/>
                <Product name = "Phone" onDataUpdate={handlePhone}/>
                <Input 
                    name="CV"
                    type="file"
                    required
                    title="Can not be empty"
                    id="CV"
                    onChange={(e) => setCV(e.target.files)}
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
                    onChange={(e) => setLogo(e.target.files)}
                />      
               <Input 
                    name="IconLogo"
                    type="file"
                    required
                    title="Can not be empty"
                    id="IconLogo"
                    onChange={(e) => setIconLogo(e.target.files)}
                />   
                <Button
                    name="Create Account"
                    width = "30%"
                    height = "7%"
                />                       
            </article>
        </section>
     );
}

export default Account;