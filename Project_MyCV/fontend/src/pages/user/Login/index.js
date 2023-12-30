import className from "classnames/bind";
import { useState } from "react";
import axios from "axios";

import styles from "./Login.module.scss";
import { images } from "../../../asset/img";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Notification from "../../../components/Notification"

const cx = className.bind(styles);

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // Thêm state để lưu thông báo lỗi

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7000/api/account/signin", {
                email: email,
                password: password
            });
            localStorage.setItem("accsessToken", response.data.accsessToken);
            window.location.replace("/admin");
        } catch (error) {
            setError(error.response.data.message); // Lưu thông báo lỗi vào state
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            name="Login"
                            type="submit"
                            onClick={handleLogin}
                            width="30%"
                            height="15%"
                            margin="4% 35%"
                        />
                        {error && ( // Hiển thị Notification khi có lỗi
                            <Notification
                                content={error}
                                title="Message"
                                type="error"
                            />
                        )}
                    </form>
                </section>
            </section>
        </main>
    );
}

export default Login;
