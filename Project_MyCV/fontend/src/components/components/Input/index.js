import classNames from "classnames/bind";

import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Input({ name, type, required = false, title, id }) {
  return (
    <>
      <label htmlFor={id} className={cx('label')}>
        {name}
      </label>
      <input type={type} required={required} title={title} id={id} className={cx('input')} />
    </>
  );
}

export default Input;
