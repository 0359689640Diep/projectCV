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
            <li> <a href="#home"> Home </a> </li>
            <li> <a href="#about"> About </a> </li>
            <li> <a href="#resume"> Resume </a> </li>
            <li> <a href="#skills"> Skills </a> </li>
            <li> <a href="#project"> Project </a> </li>
            <li> <a href="#contact"> Contact </a> </li>
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
    </header>
  );
}

export default Header;
