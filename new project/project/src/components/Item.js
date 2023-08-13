

import React from "react";

function Item(props) {
  const handleAddToCart = () => {
    props.addToCart(props.item);
  };

  return (
    <div className="item">
      <img alt="" src={"./img/" + props.item.img} />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <b>{props.item.price}руб.</b>
      <div className="add-to-cart" onClick={handleAddToCart}>
        +
      </div>
    </div>
  );
}

export default Item;

