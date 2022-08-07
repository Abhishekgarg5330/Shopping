import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStateContext } from '../context/StateContext'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import './Checkout.css'
import FooterPayment from './FooterPayment'

function Checkout () {
  const navigate = useNavigate()
  const {
    showCart,
    setShowCart,
    totalQuantities,
    toggleAdd,
    toggleCartItemQuantity,
    totalPrice,
    cartItems
  } = useStateContext()
  const [isLogin, setIsLogin] = React.useState(false)
  React.useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin () {
    if (localStorage.getItem('phone') === null) {
      setIsLogin(false)
      navigate('/login')
    } else {
      setIsLogin(true)
    }
  }
  return (
    <div className='checkout'>
      <div className='checkout-div'>
        <div
          onClick={() => {
            navigate('/')
          }}
        >
          <ArrowBackRoundedIcon />
        </div>
        <p style={{ textAlign: 'center' }}>Checkout</p>
      </div>

      <div className='outer-box'>
        <div className='pick-up'>
          <h3>PICK UP</h3>
          <hr></hr>
          <div style={{ padding: '2% 0%' }}>
            <p>Test</p>
            <p>Dalchini Office Noide Uttar Pradesh</p>
            <p>Order Expires within 30 mins</p>
          </div>
        </div>
        <div className='cart-detail'>
          <h3>CART DETAILS</h3>
          <hr></hr>
          <div className='details-outer-box'>
            <div className='detail-title'>
              <div>Items</div>
              <div>Qty</div>
              <div>Amount</div>
            </div>
            <div className='details-val'>
              <div className='detail'>
                <div className='container'>
                  {cartItems.map(item => (
                    <div className='prod' key={item.id} style={{padding: '10px'}}>
                      <div>{item.title}</div>
                      <div
                        style={{ marginRight: '22%' }}
                        className='item-title'
                      >
                        <div className='flex bottom'>
                          <div style={{paddingLeft: '10px'}}>
                            <p className='quantity-dec'>
                              <span
                                className='minus'
                                onClick={() =>
                                  toggleCartItemQuantity(item.id, 'dec')
                                }
                              >
                                -
                              </span>
                              <span className='num' onClick={() => {}}>
                                {item.quantity}
                              </span>
                              <span
                                className='plus'
                                onClick={() =>
                                  toggleCartItemQuantity(item.id, 'inc')
                                }
                              >
                                +
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>Rs.{item.quantity}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='price'>
        <div>Total </div>
        <div>Rs.{totalPrice}</div>
      </div>
      <FooterPayment />
    </div>
  )
}
export default Checkout
