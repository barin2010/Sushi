import React from "react";
import css from "./Header.module.css";
import burger from "../../images/header/menu.svg";
import logo from "../../images/header/logo.svg";
import bagMob from "../../images/header/bagMob.svg";

const Header = () => {
  return (
    <section className={css.header}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.menu}>
            <img className={css.menuImg} src={burger} alt="menu" />
          </div>
          <a href="!#" className={css.brandMob}>
            <img className={css.logoImgMob} src={logo} alt="logo" />
            <h1 className={css.brandTitle}>Униме Суши</h1>
          </a>
          <a href="!#" className={css.bag}>
            <img className={css.bagImg} src={bagMob} alt="bag" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
