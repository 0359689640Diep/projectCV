import className from "classnames/bind";

import styles from "./SideBar.module.scss";
import { images } from "../../../asset/img";
import MenuItem from "../../../components/Popper/Menu";
import { dataAccount, dataProject, dataResule, dataSkills } from "./data";

const cx = className.bind(styles);

function SideBar() {
    return ( 
    <aside className={cx("aside")}>
        <article className={cx("logo")}>
            <img src={images.logo} alt="logo"/>
        </article>
        <section className={cx("containerAside")}>
            <MenuItem title="Account" data = {dataAccount}></MenuItem>
            <MenuItem title="Project" data = {dataProject}></MenuItem>
            <MenuItem title="Resule" data = {dataResule}></MenuItem>
            <MenuItem title="Skills" data = {dataSkills}></MenuItem>
        </section>
    </aside> );
}

export default SideBar;