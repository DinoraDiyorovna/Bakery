
import { useLocation} from "react-router-dom";

// import React, { useState, useEffect } from "react";
function CartPage() {
  const { state } = useLocation() ?? null;
  // const nav = useNavigate();

  const getTotalPrice = () => {
  return state.reduce((total, item) => total + Number(item.price), 0);
  };
  const uniqueItems = state.filter((item, index) => {
    return state.findIndex((obj) => obj.id === item.id) === index;
  });
  console.log(state);
  if (state == null) {
    return <div>cart empty</div>;
  } else {
    return (
      <>
        <div className="cart-page">
        {uniqueItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-img-wrp"> <img alt="" src={"./img/" + item.img} /> </div>
            <div className="cart-text">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}руб.</b>
              <h3>Количество: {state.filter((i) => i.id === item.id).length}</h3>
            </div>
          </div>
        ))}
        <h3 className="total-price">Общая сумма: {getTotalPrice()}руб.</h3></div>
      </>
    );
  }
}

export default CartPage;