import React, { useRef } from 'react'
import { useStateContext } from '../context/StateContext'
import './CartDetails.css'
import CloseIcon from '@mui/icons-material/Close'

export const CartDetails = () => {
  var [toggle, settoggle] = React.useState(1)
  var [col, setcol] = React.useState('white')

  const {
    qty,
    showCart,
    setShowCart,
    totalQuantities,
    cartItems,
    totalPrice,
    toggleCartItemQuantity
  } = useStateContext()
  const cartRef = useRef()
  function makeBlur1 () {
    if (showCart) {
      setcol('white')
      settoggle(1)
    }
    document.getElementById('product_div').style.opacity = toggle
    document.getElementById('product_div').style.backgroundColor = col
  }
  function someFunc () {
    makeBlur1()
    setShowCart(!showCart)
   
  }
  return (
    <div className='cart-wrapper'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '10px 0px'
        }}
      >
        <div></div>
        <div>
          <p>Cart Details</p>
        </div>
        <div>
          {showCart && (
            <button type='button' onClick={() => someFunc()} className='cross'>
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '20px 10px'
        }}
      >
        <p>Items</p>
        <p>Qty</p>
        <p>Amount</p>
      </div>
      <div>
        <div className='product-container'>
          {cartItems.length >= 1 &&
            cartItems.map(item => (
              <div className='product' key={item.id}>
                <div className='item-title'>
                  <div className='flex top'>
                    <h5>{item.title}</h5>
                  </div>
                  <div className='flex bottom' style={{ marginRight: '15%' }}>
                    <div>
                      <p className='quantity-dec'>
                        <span
                          className='minus'
                          onClick={() => toggleCartItemQuantity(item.id, 'dec')}
                        >
                          -
                        </span>
                        <span className='num' onClick={() => {}}>
                          {item.quantity}
                        </span>
                        <span
                          className='plus'
                          onClick={() => toggleCartItemQuantity(item.id, 'inc')}
                        >
                          +
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>{`Rs. ${item.price * item.quantity}`}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <h2>Total</h2>
        <h2>{`Rs. ${totalPrice}`}</h2>
      </div>
    </div>
  )
}
