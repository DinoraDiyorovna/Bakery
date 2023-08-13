import Item from "../components/Item";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Catalog() {
  let items = [
    {
      id: 1,
      title: "Хлеб бородинский",
      img: "borodinskiy.jpg",
      desc: "Испечено с любовью!",
      price: "55",
    },
    {
      id: 2,
      title: "Белый хлеб",
      img: "white-bread.png",
      desc: "Испечено с любовью!",
      price: "50",
    },
    {
      id: 3,
      title: "Булочка",
      img: "bulochka.jpg",
      desc: "Испечено с любовью!",
      price: "65",
    },
    {
      id: 4,
      title: "Крендель",
      img: "krendel.jpg",
      desc: "Испечено с любовью!",
      price: "72",
    },
    {
      id: 5,
      title: "Чиабатта",
      img: "chiabatta.jpg",
      desc: "Испечено с любовью!",
      price: "30",
    },
    {
      id: 6,
      title: "Цельнозерновой хлеб",
      img: "zernovoy.jpg",
      desc: "Испечено с любовью!",
      price: "60",
    },
    {
      id: 7,
      title: "Багет",
      img: "baget.jpg",
      desc: "Испечено с любовью!",
      price: "75",
    },
    {
      id: 8,
      title: "Земгальский хлеб",
      img: "zemgal.png",
      desc: "Испечено с любовью!",
      price: "80",
    },
    {
      id: 9,
      title: "Пумперникель(вестфальский хлеб)",
      img: "vestfal.jpg",
      desc: "Испечено с любовью!",
      price: "88",
    },
    {
      id: 10,
      title: "Кельтский хлеб",
      img: "keltskiy.jpg",
      desc: "Испечено с любовью!",
      price: "68",
    },
    {
      id: 11,
      title: "Пончик",
      img: "donut.jpg",
      desc: "Испечено с любовью!",
      price: "55",
    },
    {
      id: 12,
      title: "Круассаны",
      img: "croissants.jpg",
      desc: "Испечено с любовью!",
      price: "130",
    },
    {
      id: 13,
      title: "Рулет",
      img: "rulet.jpg",
      desc: "Испечено с любовью!",
      price: "80",
    },
    {
      id: 14,
      title: "Хлебные палочки",
      img: "sticks.jpg",
      desc: "Испечено с любовью!",
      price: "68",
    },
    {
      id: 15,
      title: "Ушко",
      img: "ushko.jpg",
      desc: "Испечено с любовью!",
      price: "30",
    },
    {
      id: 16,
      title: "Крекер",
      img: "crackers.jpg",
      desc: "Испечено с любовью!",
      price: "60",
    },
    {
      id: 17,
      title: "Бублик",
      img: "bublik.jpg",
      desc: "Испечено с любовью!",
      price: "40",
    },
    {
      id: 18,
      title: "Плюшка",
      img: "plyushka.png",
      desc: "Испечено с любовью!",
      price: "55",
    },
    {
      id: 19,
      title: "Рогалик",
      img: "rogalik.jpg",
      desc: "Испечено с любовью!",
      price: "50",
    },

    {
      id: 20,
      title: "Булочка для гамбургера",
      img: "hamburger.jpg",
      desc: "Испечено с любовью!",
      price: "30",
    },
    {
      id: 21,
      title: "Шоколадный пирог",
      img: "choco-cake.jpg",
      desc: "Испечено с любовью!",
      price: "180",
    },
    {
      id: 22,
      title: "Mille-feuille, vanille, caramel",
      img: "mille.png",
      desc: "Испечено с любовью!",
      price: "150",
    },
    {
      id: 23,
      title: "Фирьменное мороженное на вафлях",
      img: "ice-cream.jpg",
      desc: "Испечено с любовью!",
      price: "80",
    },
    {
      id: 24,
      title: "Мороженное на броуни",
      img: "brownies.jpg",
      desc: "Испечено с любовью!",
      price: "70",
    },
    {
      id: 25,
      title: "Веганское миндальное печенье",
      img: "vegan-cookie.jpg",
      desc: "Испечено с любовью!",
      price: "110",
    },
    {
      id: 26,
      title: "Печенье с бурбоном и карамельным кренделем",
      img: "mini-cake.jpg",
      desc: "Испечено с любовью!",
      price: "100",
    },
    {
      id: 27,
      title: "Пирожни с темным шоколадом и миндалем",
      img: "dark-choco.jpg",
      desc: "Испечено с любовью!",
      price: "85",
    },
  ];
  const [items1, setItems] = useState(items);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const sortItemsByPrice = () => {
    setSortByPrice(!sortByPrice);
    if (!sortByPrice) {
      const sortedItems = [...items1].sort((a, b) => a.price - b.price);
      setItems(sortedItems);
    } else {
      const sortedItems = [...items1].sort((a, b) => b.price - a.price);
      setItems(sortedItems);
    }
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    
  };
  // const addToCart = (item) => {
  //   const index = cartItems.findIndex((el) => el.id === item.id);
  //   if (index !== -1) {
  //     const newCartItems = [...cartItems];
  //     newCartItems[index].quantity += 1;
  //     setCartItems(newCartItems);
  //   } else {
  //     setCartItems([...cartItems, { ...item, quantity: 1 }]);
  //   }
   
  // };

  return (
    <>
      <div className="sort-btn-wrp">
        <button className="sort-btn" onClick={sortItemsByPrice}>
          Сортировать по цене
        </button>
        <NavLink to="/shopcart" state={cartItems}>
          <FaCartPlus className="shop-cart" />
        </NavLink>
      </div>
      <main>
        <div></div>

        {items1.map((el) => (
          <Item key={el.id} item={el} addToCart={addToCart} />
        ))}
      </main>
    </>
  );
}

export default Catalog;