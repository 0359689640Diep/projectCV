import classNames from "classnames/bind";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useMemo, useEffect } from "react";

import styles from "./Notification.module.scss"

const cx = classNames.bind(styles);

function Notification({ content, title, type, handleClose }) {  
  const icon = useMemo(() => {
    switch (type) {
      case 'error':
        return <i style={{ color: "red" }} className="bi bi-x-circle"></i>;
      case 'warning':
        return <i style={{ color: "yellow" }} className="bi bi-exclamation-circle"></i>;
      default:
        return <i style={{ color: "green" }} className="bi bi-check2-circle"></i>;
    }
  }, [type]);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true); // Thiết lập hiển thị khi nhận props mới
  }, [content, title, type]);

  const handleNotificationClose = () => {
    setVisible(false);
    if (handleClose) {
      handleClose(); // Gọi hàm đóng Notification từ component cha nếu có
    }
  };

  return (
    <section className={cx("container")} style={{display: visible ? "block" : "none"}}>
      <section className={cx('header')}>
        <article className={cx('title')}>
          {icon}
          <h1>{title}</h1>
        </article>
        <i className={cx("bi bi-x", styles.close)} onClick={handleNotificationClose}></i>
      </section>
      <article className={cx("content")}>
        <p>{content}</p>
      </article>
    </section>
  );
}

export default Notification;
