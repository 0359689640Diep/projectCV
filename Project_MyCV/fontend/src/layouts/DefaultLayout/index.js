import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./DefaultLayout.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import HeaderAdmin from "../components/HeaderAdmin";

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    const [isAdmin, setIsAdmin] = useState(false);

    // Sử dụng useEffect để kiểm tra token khi component render
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const isAdminPage = window.location.port === "3000" && window.location.pathname.includes("/admin");
        if (token && isAdminPage) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []); // Chỉ chạy một lần sau khi component mount
    return (
        <section className={cx("page")}>
            {isAdmin ? ( // Kiểm tra isAdmin để render giao diện tương ứng
                <section className={cx("container")}>
                    <SideBar/>
                    <main className={cx("mainAdmin")}>
                        <HeaderAdmin/>
                        {children}
                    </main>
                </section>
            ) : (
                <>
                    <Header/>
                    {children}
                    <Footer/>
                </>
            )}
        </section>  
    );
}

export default DefaultLayout;
