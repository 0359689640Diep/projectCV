import classNames from "classnames/bind";

import { images } from "../../asset/img";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

function LoadingIcon () {
    return (
        <section className={cx("warrper")}>
            <img src={images.Loading} alt="Loading..."/>
        </section>
    )
}

export default LoadingIcon;