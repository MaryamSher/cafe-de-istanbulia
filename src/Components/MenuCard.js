import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container ">
        {menuData.map((currElm) => {
          return (
            <div className="card-container" key={currElm.id}>
              <div className="card ">
                <div className="card-body">
                  <span className="card-number  card-circle subtle">
                    {currElm.id}
                  </span>
                  <span className="card-author subtle ">
                    {currElm.category}
                  </span>
                  <h2 className="card-title">{currElm.title}</h2>
                  <img src={currElm.image} className="card-media " />
                  <br />
                  <span className="card-description ">
                    PRICE = Rs /- {currElm.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
