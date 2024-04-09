import classNames from 'classnames/bind';
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

import styles from "./Header.module.scss";
import routesConfig from "../../../config/router.js";
import { getAccount } from '../../../Services/account.js';

const cx = classNames.bind(styles);

function Header() {

  const [to, setTo] = useState(null);
  const [DataAccount, SetDataAccount] = useState([]);
  const [hiddenNav, setHiddenNav] = useState("bi-list");
  const [active, setActive] = useState(1);

  const callAPIAccount = async () => {
    try {
      const result = await getAccount();
      SetDataAccount(result.dataAccount);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    callAPIAccount();
  }, []) 

  const handleCheckToken = () =>{
    const token = localStorage.getItem("accessToken");
    if(token){setTo(routesConfig.admin)}
    else{setTo(routesConfig.login)}
  }

  const hiddenAsShow = () => {
    if(hiddenNav === "bi-list"){
      setHiddenNav("bi-x-lg");
    }else{
      setHiddenNav("bi-list");
    }
  }

  return (
    <header>
      <div className={cx("logo")}>
      <Link to = {routesConfig.home}> 
        <img src={DataAccount && DataAccount[0] && DataAccount[0].Logo} alt="logo"/>
      </Link>
      </div>
      <div className={cx("contentHeader")}>
        <div className={cx("category")}>
          <ul>
            <li onClick={() => {setActive(1)}}> <a className={cx({"active": active === 1})} href="#home"> Home </a> </li>
            <li onClick={() => {setActive(2)}}> <a className={cx({"active": active === 2})} href="#about"> About </a> </li>
            <li onClick={() => {setActive(3)}}> <a className={cx({"active": active === 3})} href="#resume"> Resume </a> </li>
            <li onClick={() => {setActive(4)}}> <a className={cx({"active": active === 4})} href="#skills"> Skills </a> </li>
            <li onClick={() => {setActive(5)}}> <a className={cx({"active": active === 5})} href="#project"> Project </a> </li>
            <li onClick={() => {setActive(6)}}> <a className={cx({"active": active === 6})} href="#contact"> Contact </a> </li>
          </ul>
        </div>
        <div className={cx("phone")}>
          <ul>
            <li> <i className="bi bi-telephone-fill"></i> </li>
            <li>{DataAccount && DataAccount[0] && DataAccount[0].Phone[0]}</li>
            <li onClick={handleCheckToken}> <Link to={to}><i className="bi bi-person-gear"></i></Link>  </li>
          </ul>
        </div>
      </div>
      <nav className={cx("nav-table-mobile")}>
        <article className={cx("icont")}>
          <i onClick={() => {hiddenAsShow()}} className={`bi ${hiddenNav}`}></i>
        </article>
      </nav>
      <article style={{ display: hiddenNav !== 'bi-list' ? "block" : "none" }} className={cx("content")}>
        <ul>
          <li onClick={() => {setActive(1)}}> <a className={cx({"active": active === 1})} href="#home"> Home </a> </li>
          <li onClick={() => {setActive(2)}}> <a className={cx({"active": active === 2})} href="#about"> About </a> </li>
          <li onClick={() => {setActive(3)}}> <a className={cx({"active": active === 3})} href="#resume"> Resume </a> </li>
          <li onClick={() => {setActive(4)}}> <a className={cx({"active": active === 4})} href="#skills"> Skills </a> </li>
          <li onClick={() => {setActive(5)}}> <a className={cx({"active": active === 5})} href="#project"> Project </a> </li>
          <li onClick={() => {setActive(6)}}> <a className={cx({"active": active === 6})} href="#contact"> Contact </a> </li>
        </ul>
      </article>
    </header>
  );
}

export default Header;
