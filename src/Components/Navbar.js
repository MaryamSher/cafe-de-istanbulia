import React from "react";

const Navbar = ({ updateList }) => {
  const btnCategory = [
    "STARTER",
    "BURGERS",
    "SANDWICHES",
    "WRAP & ROLLS",
    "PASTA",
    "PIZZA",
    "NAAN",

  ];
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {btnCategory.map((currElm) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => updateList(currElm)}
              >
                {currElm}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
