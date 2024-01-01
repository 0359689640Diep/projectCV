import classNames from 'classnames/bind';
import {Link} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

import styles from "./Header.module.scss";
import { images } from "../../../asset/img/index.js";
import routesConfig from "../../../config/router.js";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header>
      <div className={cx("logo")}>
      <Link to = {routesConfig.Home}> 
        <img src={images.logo} alt="logo"/>
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
            <li>0359689640</li>
            <li> <Link to={routesConfig.Login}><i className="bi bi-person-gear"></i></Link>  </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
