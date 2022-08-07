import React from 'react'
import { useStateContext } from '../context/StateContext'
import { Link, useNavigate } from 'react-router-dom'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import './Checkout.css'
const FooterPayment = () => {
  const navigate = useNavigate()

  const {
    showCart,
    setShowCart,
    totalQuantities,
    totalPrice,
    cartItems
  } = useStateContext()
  return (
    <div className='footer'>
      <div></div>
      <div
        className='selectName'
        onClick={() => {
          alert('Payment Successful')
          navigate('/')
        }}
      >
        Select Payment
      </div>
      <div>
        <button
          style={{
            border: 'none',
            backgroundColor: 'rgb(24,180,116)',
            color: 'white',
            marginTop: '15px'
          }}
        >
          <ArrowForwardRoundedIcon fontSize='large' />
        </button>
      </div>
      <div></div>
    </div>
  )
}
export default FooterPayment
