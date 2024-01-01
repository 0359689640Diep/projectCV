import classNames from "classnames/bind";

import styles from "./Home.module.scss";

const cx  = classNames.bind(styles);
function admin() {
    return ( 
        <section className={cx("item")}>

            <h1  >admin</h1>
        </section>
     );
}

export default admin;