import React from 'react'
import { NavLink } from 'react-router-dom';

function Cards() {
    return (
      <>
        <div className="cards">
          <div className="card">
            <NavLink className="card-navlink" to="/catalog">
              <img
                src="./img/cookie5.jpg"
                alt="CardImage 1"
                className="card-image"
              />
              <div className="card-caption">Вкусные пирожные</div>{" "}
            </NavLink>
          </div>
          <div className="card">
            <NavLink className="card-navlink" to="/catalog">
              <img
                src="./img/cookie8.jpg"
                alt="CardImage 2"
                className="card-image"
              />
              <div className="card-caption">Ароматный хлеб</div>
            </NavLink>{" "}
          </div>
          <div className="card">
            <NavLink className="card-navlink" to="/catalog">
              <img
                src="./img/cookie1.jpg"
                alt="CardImage 3"
                className="card-image"
              />
              <div className="card-caption">Сладкие торты</div>
            </NavLink>
          </div>
          <div className="card">
            <NavLink className="card-navlink" to="/catalog">
              <img
                src="./img/cookie6.jpg"
                alt="CardImage 4"
                className="card-image"
              />
              <div className="card-caption">Свежие булочки</div>
            </NavLink>
          </div>
        </div>
      </>
    );
}

export default Cards