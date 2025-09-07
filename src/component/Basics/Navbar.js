import React, { useState } from 'react';

const Navbar = ({ filterItem, menuList }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Desktop buttons */}
      <div className="btn-group">
        {menuList.map((curElem, index) => (
          <button
            key={index}
            className="btn-group__item"
            onClick={() => filterItem(curElem)}
          >
            {curElem}
          </button>
        ))}
      </div>

      {/* Hamburger button for mobile */}
      <div
        className="hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? 'show' : ''}`}>
        {menuList.map((curElem, index) => (
          <button
            key={index}
            onClick={() => {
              filterItem(curElem);
              setMobileOpen(false); // close menu on click
            }}
          >
            {curElem}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;  