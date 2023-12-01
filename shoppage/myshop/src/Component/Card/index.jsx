import React, { useEffect, useState } from "react";
import "./style.css";

function Card() {
  const [getdata, setGetdata] = useState([]);
  const [basket, setBasket] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, []);

  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setGetdata(data);
  }

  function addtoBasket(items) {
    if (!basket.find((x) => x.id === items.id)) {
      items.count = 1;
      setBasket([...basket, items]);
    } else {
      setBasket(
        basket.map((x) => {
          if (x.id === items.id) x.count++;
          return x;
        })
      );
    }
  }
  function removefromBasket(newItem) {
    if (newItem.count > 1) {
      newItem.count--;
      setBasket(
        basket.map((x) => {
          if (x.id === newItem.id) return newItem;
          else return x;
        })
      );
    }
  }

  function allRemovefromBasket(newItem) {
    setBasket(basket.filter((x) => x !== newItem));
  }

  function addtoFavorites(items ) {
    const isFavorite = favorites.find((x) => x.id === items.id);
    if (isFavorite) {
      const newfavorites = favorites.filter((x) => x.id !== x.id);
      setFavorites(newfavorites);
    } else {
      setFavorites([...favorites, items]);
    }
  }
  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  return (
    <div>
      <h2>new basket</h2>
      <ul className="newbasket">
        {basket.map((x) => {
          return (
            <ul className="new_basket_element" key={x.id}>
              <img className="newimg" src={x.image} alt="" />
              <div className="cc">
                <li>{x.id}</li>
                <li>{x.name}</li>
              </div>
              <div className="addRemoveBtns">
                <button onClick={() => removefromBasket(x)}>-</button>
                <span>{x.count}</span>
                <button onClick={() => addtoBasket(x)}>+</button>
              </div>
              <button className="add" onClick={() => allRemovefromBasket(x)}>
                Delete Item
              </button>
            </ul>
          );
        })}
      </ul>

      <h2>FAVORITES</h2>
      <ul className="newbasket">
        {favorites.map((x) => {
          return (
            <ul className="new_basket_element" key={x.id}>
              <img className="newimg" src={x.image} alt="" />
              <div className="cc">
                <li>{x.id}</li>
                <li>{x.name}</li>
              </div>
              <button className="newheart" onClick={addtoFavorites}>
                <i class="fa-regular fa-heart"></i>
              </button>
            </ul>
          );
        })}
      </ul>

      <div className="mybasket">
        {getdata.map((x) => {
          return (
            <ul className="product" key={x.id}>
              <div className="basket_element">
                <img src={x.image} alt="" />

                <li>
                  {" "}
                  <span>id</span>
                  {x.id}
                </li>
                <li>
                  <span>title:</span>
                  {x.title}
                </li>
                <li>
                  <span>price:</span>
                  {x.price}
                </li>
                <li>
                  {" "}
                  <span>description:</span>
                  {x.description.slice(0, 40)}
                </li>
                <li>
                  <span>category:</span>
                  {x.category}
                </li>
                <div>
                  <button className="add" onClick={() => addtoBasket(x)}>
                    {" "}
                    CLICK HERE
                  </button>
                  <button className="heart" onClick={()=>addtoFavorites(x)}>
                    <i class="fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
