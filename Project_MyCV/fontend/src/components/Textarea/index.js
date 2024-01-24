import classNames from "classnames/bind";
import { useRef, useEffect } from "react";
import styles from "./Textarea.module.scss";

const cx = classNames.bind(styles);

  function Textarea({ name, rols, rows, required = false, title, id, value, onChange, onFocus = false }) {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (onFocus) {
      // Sử dụng setTimeout để trì hoãn hành động focus
      const timeoutId = setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
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
      <textarea 
        rols={rols} 
        rows = {rows}
        required={required} 
        title={title} 
        name={id} 
        id={id} 
        className={cx('Textarea')} 
        value={value}
        onChange={onChange}
        ref={textareaRef}
      />
    </>
  );
}

export default Textarea;
