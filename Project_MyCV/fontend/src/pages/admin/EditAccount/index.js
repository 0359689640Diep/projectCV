import classNames from "classnames/bind";

import styles from "./EditAccount.module.scss";
// import Tables from "../../../components/Popper/Tables";
import FormListAccount from "./formListAccount.js";

const cx = classNames.bind(styles);

function EditAccount() {
    return ( 
        <section className= {cx("wrapper")}>
            <FormListAccount/>
        </section>
     );
}

export default EditAccount;