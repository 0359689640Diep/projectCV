import classNames from "classnames/bind";

import styles from "./DefaultLayout.scss";
import Header from "../../components/Header"

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <section className={cx("page")}>
            <Header/>
            <main></main>
            <footer></footer>
        </section>  
    );
}

export default DefaultLayout;