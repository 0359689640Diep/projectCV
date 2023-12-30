import classNames from "classnames/bind";

import styles from "./Home.module.scss";

const cx  = classNames(styles);
function admin() {
    return ( 
        <main className={cx("mainHomeAdmin")}>
            <h1>admin</h1>
        </main>
     );
}

export default admin;