import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext'
import './Button.css'

export const Button = ({data}) => {
  const [toggleCartItemQuantity] = useStateContext();
  return (
    <div>
       <div className="product" key={data.id}>
            <div className="item-title">
              <div className="flex bottom">
                <div>
                  <p className="quantity-dec">
                    <span className="minus" onClick={() => toggleCartItemQuantity(data.id, 'dec')}>
                      -
                    </span>
                    <span className="num">
                      
                    </span>
                    <span className="plus" onClick={() => toggleCartItemQuantity(data.id, 'inc')}>
                      +
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
