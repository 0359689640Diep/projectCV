import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ name, type, href = "", onClick,width, height, margin }) {

  const buttonStyle = { width, height, margin };

  return (
    <Link to={href} className={cx("href")}>
      <button className={cx("button")} style={buttonStyle} type={type} onClick={onClick}>
        {name}
      </button>
    </Link>
  );
}

export default Button;
