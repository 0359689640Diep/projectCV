import classNames from "classnames/bind";

import styles from "./EditAccount.module.scss";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";
import Product from "../CreateAccount/MoreProduct";
import UploadImage from "../../../components/UploadImage";

const cx = classNames.bind(styles);

function FormListAccount() {
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
                    value = "value"
                    // onChange={(e) => setName(e.target.value)}
                />
                <Input 
                    name="Email"
                    type="email"
                    required
                    title="Can not be empty"
                    id="Email"
                    // value = {Email}
                    // onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    name="Birthday"
                    type="date"
                    required
                    title="Can not be empty"
                    id="Birthday"
                    // value = {Birthday}
                    // onChange={(e) => setBirthday(e.target.value)}
                />
                <Input 
                    name="From"
                    type="text"
                    required
                    title="Can not be empty"
                    id="From"
                    // value = {From}
                    // onChange={(e) => setFrom(e.target.value)}
                />
                <Input 
                    name="Password"
                    type="password"
                    required
                    title="Can not be empty"
                    id="Password"
                    // value = {Password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <Input 
                    name="Majors"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Majors"
                    // value = {Majors}
                    // onChange={(e) => setMajors(e.target.value)}
                />
                <Textarea 
                    name="Maxim"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Maxim"
                    // value = {Maxim}
                    // onChange={(e) => setMaxim(e.target.value)}
                />
                <Textarea 
                    name="Describe"
                    type="text"
                    required
                    title="Can not be empty"
                    id="Describe"
                    // value = {Describe}
                    // onChange={(e) => setDescribe(e.target.value)}
                />

                {/* <Product value = {Job} name = "Job" type="text" onDataUpdate={handleJob}/>
                <Product value = {Language} name = "Language" type="text" onDataUpdate={handleLanguage}/>
                <Product value = {Phone} name = "Phone" type="number" onDataUpdate={handlePhone}/> */}
            </article>
            <article className={cx("itemRight")}>
                <UploadImage 
                    name="CV"
                    type="file"
                    id="CV"
                    // onChange={(e) => setCV(e.target.files[0])}
                />
                <UploadImage 
                    name="Images"
                    type="file"
                    id="Images" 
                    // onChange={(e) => setImages(e.target.files[0])}
                />
               <UploadImage 
                    name="Logo"
                    type="file"
                    id="Logo"
                    // onChange={(e) => setLogo(e.target.files[0])}
                />      
               <UploadImage 
                    name="IconLogo"
                    type="file"
                    id="IconLogo"
                    // onChange={(e) => setIconLogo(e.target.files[0])}
                />   
                <Button
                    name="Delete Account"
                    width = "30%"
                    height = "7%"
                    // onClick={handleUpAccount}
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