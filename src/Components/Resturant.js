import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);
  const updateList = (category) => {
    const filtered = Menu.filter((currElm) => {
      return currElm.category === category;
    });

    setmenuData(filtered);
  };

  return (
    <>
      <header>
        <h1 className="resturant-name">CAFE DE ISTANBULIA</h1>
      </header>
      <Navbar updateList={updateList} />
      <MenuCard menuData={menuData} />
      <footer>
        <h1>CAFE DE ISTANBULIA</h1>
        <div className="contact-info">
          <p>Plaza No 158-A, F/F Commercial</p>
          <p>Contact : 0300-7177849</p>
        </div>
      </footer>
    </>
  );
};

export default Resturant;
