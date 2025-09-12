import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.js';
import Footer from './Footer';  // Import Footer component

// Unique navbar list
const uniqueList = [
  ...new Set(Menu.map((curElem) => {
    return curElem.category;
  })),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      {/* Header */}
      <div className="restaurant-header">
        <h1>Abhiii & Spice</h1>

        <div className="slogan-container">
          <span className="slogan-text">Where Zaika Meets Zidd</span>
         
        </div>

        <div className="brand-underline"></div>
      </div>

      {/* Page content */}
      <div className="page-content">
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData} />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Resturant;
