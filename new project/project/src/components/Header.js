import React from "react";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <div className="back">
        <div className="back-wrp">
         
             <h1 className="logo">Вкусная булка</h1>
             <NavLink to="/catalog" className="catalog">
          Каталог
        </NavLink>
       
          <ul className="nav">
            <a href="# "> О нас</a>
            <a href="# ">Конакты</a>
            <a href="# "> Адресс </a>
            
          </ul>
        </div>
       
      </div>
    </header>
  );
}

export default Header;
