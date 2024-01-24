import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, title }) {
  const [display, setDisplay] = useState(false);

  const handleItemClick = () => {
    setDisplay(!display);
  };

  return (
    <section className={cx("menu-item")}>
      <article className={cx("titleMenu")} onClick={handleItemClick}>
        <p className={cx("contentTile")}>{title}</p>
        {
          display ? (
            <i className={cx("bi bi-chevron-down", "icontTitle")}></i>
          ):(
            <i className={cx("bi bi-chevron-right", "icontTitle")}></i>
          )
        }
      </article>

      <section
        className={cx("contentMenu")}
        style={{ display: display ? "block" : "none" }}
      >
        {data.map((item, index) => (
          <article className={cx("itemContent")} key={index}>
            <i className={cx(item.icont, "icontItem")}></i>
            <article className={cx("contentItem")}>
              <Link to={item.to} className={cx("value")}>
                {item.value}
              </Link>
            </article>
          </article>
        ))}
      </section>
    </section>
  );
}

export default MenuItem;
