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
      <footer className='foot'>
        <h1>CAFE DE ISTANBULIA</h1>
        <ul className='socials'>
          <li> <a href="https://www.facebook.com/"> <i class="fab fa-facebook-f"></i></a>  </li>
          <li> <a href="https://www.twitter.com/"> <i class="fab fa-twitter"></i></a> </li>
          <li> <a href="https://www.pinterest.com/"> <i class="fab fa-pinterest-p"></i></a>  </li>
          <li> <a href="https://www.instagram.com/"> <i class="fab fa-instagram"></i></a>  </li>
        </ul>
        
        <div className="contact-info">
          <p>Plaza No 158-A, F/F Commercial</p>
          <p>Contact : 0300-7177849</p>
        </div>
        <div className='copyright'>

          <p>Created & Designed by Maryam Sher</p>
        
        </div>
        <p className='cp'>Copyright © 2022 </p>
      </footer>
    </>
  );
};

export default Resturant;
