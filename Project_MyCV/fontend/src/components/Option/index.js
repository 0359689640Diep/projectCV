import classNames from "classnames/bind";
import styles from './Option.module.scss';

const cx = classNames.bind(styles);


function Option({ name, data, valueChange, required = false, value }) {
    return (
        <section className={cx("warpper")}>
            <p className={cx('title')}>{name}</p>
            <select 
                className={cx("select")} 
                defaultValue="" 
                required={required} 
                onChange={(e) => valueChange(e.target.value)}>
                    <option disabled >{value}</option>
                    {data.map((item, index) => {
                        const key = Object.keys(item)[0]; // Lấy key từ đối tượng
                        const value = item[key]; // Lấy giá trị từ đối tượng
                        return (
                            <option key={index} value={key}>
                                {value}
                            </option>
                        );
                    })}
            </select>
        </section>
    )
}

export default Option;
