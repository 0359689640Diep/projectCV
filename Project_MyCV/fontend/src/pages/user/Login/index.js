import className from "classnames/bind";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.scss";
import { images } from "../../../asset/img";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { singIn } from "../../../Services/account";
import Notification from "../../../components/Notification";

const cx = className.bind(styles);

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await singIn({email,password});
            if(response.status >= 400){
                Notification(response.data.message, "warning");
                return ;
            }

            localStorage.setItem("accessToken", response.data.accessToken);
            Notification(response.data.message, "success");
            navigate("/admin");
        } catch (error) {
            console.log(error);
            Notification("500 Server not found", "error");
        }
    };

    return ( 
        <main className={cx("loginMain")}>
            <section className={cx("container")}>
                <article className={cx("images")}>
                    <img src={images.Lovlyze} alt="lovlyze"/>
                </article>
                <section className={cx("content")}>
                    <form action="/login" method="post">
                        <Input 
                            name="Gmail"
                            type="email"
                            required
                            title="gmail cannot be empty"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input 
                            name="Password"
                            type="password"
                            required
                            title="password cannot be empty"
                            id="password"
                            Icons = {true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            name="Login"
                            onClick={handleLogin}
                            width="30%"
                            height="15%"
                            margin="4% 35%"
                        />
  
                    </form>
                </section>
            </section>
        </main>
    );
}

export default Login;
