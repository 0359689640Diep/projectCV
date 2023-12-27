import className from "classnames/bind";

import styles from "./Login.module.scss";
import { images } from "../../asset/img";
import Input from "../../components/components/Input";

const cx = className.bind(styles);

function Login() {
    return ( 
        <main>
            <section className={cx("container")}>
                <article className = {cx("images")}>
                    <img src={images.Lovlyze} alt="lovlyze"/>
                </article>
                <section  className={cx("content")}>
                    <form form action="" method="post">
                    <Input 
                        name="Gmail"
                        type="email"
                        required = "true"
                        title= "gmail cannot be empty"
                        id="email"

                    />
                    <Input 
                        name="Password"
                        type="password"
                        required = "true"
                        title= "password cannot be empty"
                        id="password"

                    />
                    </form>
                 </section>
            </section>
        </main>
     );
}

export default Login;