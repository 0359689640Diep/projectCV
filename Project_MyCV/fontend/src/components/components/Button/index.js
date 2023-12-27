import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ name, type }) {
  return (
    <button classNames={cx("button")} type = {type} >{name}</button>
  );
}

export default Button;
