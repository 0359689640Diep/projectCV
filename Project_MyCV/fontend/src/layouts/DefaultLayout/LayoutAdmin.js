import classNames from "classnames/bind";

import styles from "./DefaultLayout.scss";
import SideBar from "../components/SideBar";
import HeaderAdmin from "../components/HeaderAdmin";

const cx = classNames.bind(styles);
function DefaultLayoutAdmin({children}) {

    return ( 
        <section className={cx("page")}>
            <section className={cx("container")}>
                <SideBar/>
                <main className={cx("mainAdmin")}>
                    <article className={cx("headerAdmin")}>
                        <HeaderAdmin/>
                    </article>
                    <article className={cx("main")}>
                            {children}
                    </article>

                </main>
            </section>
        </section>  
     );
}

export default DefaultLayoutAdmin;