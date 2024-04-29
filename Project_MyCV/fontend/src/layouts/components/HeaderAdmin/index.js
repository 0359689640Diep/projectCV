import classNames from 'classnames/bind';
import {Link} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from "./HeaderAdmin.module.scss";
import routerConfig from "../../../config/router";
import { logOut } from '../../../Services/account';


const cx = classNames.bind(styles);

function HeaderAdmin() {

    const handleLogout = async () => {
        await logOut();
        localStorage.removeItem("accessToken");
    }

    return ( 
        <section className={cx("content")}>
            <nav className={cx("nav")}>
                <Link to = {routerConfig.admin} className={cx("itemNav")}>
                    <i className="bi bi-house"></i>
                    <p>Home</p>
                </Link>
                <Link to = {routerConfig.home} className={cx("itemNav")}>
                    <i className="bi bi-people"></i>
                    <p>User</p>
                </Link>
                <Link to = {routerConfig.home} className={cx("itemNav")} onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right"></i>
                    <p>Logout</p>
                </Link>
            </nav>

        </section>
     );
}

export default HeaderAdmin;