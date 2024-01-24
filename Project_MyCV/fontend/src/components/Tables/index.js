import classNames from "classnames/bind";
// import { Link } from "react-router-dom";

import styles from "./Tables.module.scss";

const cx = classNames.bind(styles);

function Tables(title, data) {
    return ( 
        <table className={cx("tables")}>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>From</th>
                <th>Password</th>
                <th>Majors</th>
                <th>Maxim</th>
                <th>Describe</th>
                <th>Job</th>
                <th>Language</th>
                <th>Phone</th>
                <th>CV</th>
                <th>Images</th>
                <th>Logo</th>
                <th>Icon Logo</th>
                <th>Action</th>
            </tr>
            <tr>
               <td>Name</td>
                <td>Email</td>
                <td>Birthday</td>
                <td>From</td>
                <td>Password</td>
                <td>Majors</td>
                <td>Maxim</td>
                <td>Describe</td>
                <td>Job</td>
                <td>Language</td>
                <td>Phone</td>
                <td>CV</td>
                <td>Images</td>
                <td>Logo</td>
                <td>Icon Logo</td>
                <td>Action</td>
            </tr>

        </table>
     );
}

export default Tables;