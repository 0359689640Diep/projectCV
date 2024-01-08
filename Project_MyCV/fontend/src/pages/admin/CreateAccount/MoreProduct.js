import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./CreateAccount.module.scss";
import Input from "../../../components/Input";

const cx = classNames.bind(styles);

function MoreProduct({ name, onDataUpdate }) {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault(); 
      setData((prevData) => [...prevData, inputValue.trim()]);
      setInputValue('');
    }
  };

  // Gọi hàm callback để truyền mảng data ra ngoài
  useEffect(() => {
    onDataUpdate(data);
  }, [data, onDataUpdate]);

  return (
    <article className={cx("containerProduct")}>
      <Input
        name={name}
        type="text"
        required
        title="Can not be empty"
        id={name}
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyDown}
      />

      <section className={cx("listProduct")}>
        {data.map((item, index) => (
          <article key={index} className={cx("itemProduct")}>
            <p>{item}</p>
            <span
              className={cx("close")}
              onClick={() => {
                setData((prevData) =>
                  prevData.filter((_, currentIndex) => currentIndex !== index)
                );
              }}
            >
              &times;
            </span>
          </article>
        ))}
      </section>
    </article>
  );
}

export default MoreProduct;
