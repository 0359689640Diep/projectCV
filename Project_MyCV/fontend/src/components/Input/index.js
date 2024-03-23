import classNames from "classnames/bind";
import { useRef, useEffect, useState } from "react";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

  function Input(
    { name, type, required = false, onKeyPress,title, id, value, onChange, min = 0,  multiple = false, onFocus = false, Icons = false}
    ) {
  const inputRef = useRef(null);

  const [eyes, setEyes] = useState("bi bi-eye-slash");
  const [types, setTypes] = useState(type);

  const handleEye = () => {
    if(eyes === "bi bi-eye-slash"){
      setEyes("bi bi-eye");
      setTypes("text");
    }else{
      setTypes(type);
      setEyes("bi bi-eye-slash");
      
    }
 }
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
    <section className = {cx("wrapper")} >
      <label htmlFor={id} className={cx('label')}>{name}</label>
      <input 
        type={types} 
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
        onKeyPress ={onKeyPress}
      />
            {
        Icons ? (
          <i onClick={handleEye} className={eyes}></i>
        ) :(
          <></>
        )
      }

    </section>
  );
}

export default Input;
