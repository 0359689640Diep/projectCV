import classNames from "classnames/bind";

import styles from "./DefaultLayout.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <section className={cx("page")}>
            <Header/>
            {children}
            <Footer/>
        </section>  
    );
}

export default DefaultLayout;
