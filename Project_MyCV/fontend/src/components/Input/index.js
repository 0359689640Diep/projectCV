import classNames from "classnames/bind";
import { useRef, useEffect } from "react";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

  function Input({ name, type, required = false, multiple = false, min = 0, onKeyPress,title, id, value, onChange, onFocus = false }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (onFocus) {
      // Sử dụng setTimeout để trì hoãn hành động focus
      const timeoutId = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0);

      // Dọn dẹp timeout để tránh tình trạng rò rỉ bộ nhớ
      return () => clearTimeout(timeoutId);
    }
  }, [onFocus]);

  return (
    <>
      <label htmlFor={id} className={cx('label')}>
        {name}
      </label>
      <input 
        type={type} 
        required={required} 
        multiple = {multiple}
        title={title} 
        name={id} 
        id={id} 
        className={cx('input')} 
        value={value}
        min={min}
        onChange={onChange}
        ref={inputRef}
        onKeyPress = {onKeyPress}
      />
    </>
  );
}

export default Input;
