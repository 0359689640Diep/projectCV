import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ name,  href, to, onClick, leftIcon, rightIcon, disabled=false, ...styles }) {

  const buttonStyle = { ...styles };

  let Component = "button";
  const props = {
    onClick
  }
  if(disabled) {
    delete props.onClick;
  }
  if(to) {
    props.to = to
    Component = Link
  }else if(href) {
    props.href = to
    Component = "a"
  }
  return (
    <Component {...props} className={cx("button")} style={buttonStyle}>
      {leftIcon && <span className= {cx('icon')}> {leftIcon} </span>}
      <span className={cx('title')}>{name}</span>
      {rightIcon && <span className= {cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;
