import classNames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({ name, type, required = false, title, id, value, onChange }) {
  return (
    <>
      <label htmlFor={id} className={cx('label')}>
        {name}
      </label>
      <input 
        type={type} 
        required={required} 
        title={title} 
        name={id} 
        id={id} 
        className={cx('input')} 
        value={value}
        onChange={onChange}
        />
    </>
  );
}

export default Input;
