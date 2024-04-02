import className from "classnames/bind";

import styles from "./SideBar.module.scss";
import MenuItem from "../../../components/Menu";
import { dataAccount, dataProject, dataResule, dataSkills } from "./data";
import { useEffect, useState } from "react";
import { getAccountByRequest } from "../../../Services/account";

const cx = className.bind(styles);

function SideBar() {

    const [Logo, SetLogo] = useState('');

    const getLogo = async () => {
        const result = await getAccountByRequest("Logo");
        SetLogo(result.dataAccount[0].Logo);
    }

    useEffect(() => {
        getLogo();
    }, [])

    return ( 
    <aside className={cx("aside")}>
        <article className={cx("logo")}>
            <img src={Logo} alt="logo"/>
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