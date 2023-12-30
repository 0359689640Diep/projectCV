import classNames from "classnames/bind";

import styles from "./DefaultLayout.scss";
import Header from "../../Header";
import Footer from "../../Footer";

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