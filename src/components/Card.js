import React, { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { Button } from "./Button";
import "./Card.css";

const Card = ({ data}) => {
   const {onAdd, cartItems, toggleCartItemQuantity} = useStateContext();
   const [toggleAdd, setToggleAdd] = useState(true);
  return (
    <div className="card">
      <div style={{display: 'flex'}}>

        <div>
          <img src={data.img} className="card__img" />
        </div>

        <div className="card_details">
          <h2 style={{margin: '20px 5px 10px'}}>{data.title}</h2>
          <h4 style={{margin: '5px 5px', color: "gray" }}>{data.description}</h4>
          <div style={{display: 'flex', margin: '10px 10px'}}>
            <h3 style={{margin: '0px 30px 0px 0px'}}>{`₹${data.price}`}</h3>
            <h3 style={{ textDecoration: "line-through", color: "gray" }}>{data.maxPrice}</h3>
          </div>
        </div>

      </div>
      <div>
        <div
          style={{
            justifyContent: "end",
            margin: "5px 5px",
            paddingBottom: "0",
          }}
        >
         { toggleAdd && <button className="card__button" onClick={() => {onAdd(data,1)}}>ADD</button> }
          <div>
        <div className="product-container">
          {/* {toggleAdd &&  <Button data={data}/> } */}
        </div>

      </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
