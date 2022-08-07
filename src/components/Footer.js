import React, { useState } from 'react'
import './Footer.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useStateContext } from '../context/StateContext'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [isLogin, setIsLogin] = React.useState(false)
  const [word, setWord] = useState('Continue')
  React.useEffect(() => {
    checkLogin()
  }, [])

  function checkLogin () {
    if (localStorage.getItem('user') === null) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }
  const {
    showCart,
    setShowCart,
    totalQuantities,
    totalPrice,
    cartItems
  } = useStateContext()
  var [toggle, settoggle] = React.useState(0.5)
  var [col, setcol] = React.useState('rgb(218,218,218)')

  function makeBlur1 () {
    if (!showCart && toggle === 0.5) {
      setcol('white')
      settoggle(1)
    } else {
      setcol('rgb(218,218,218)')
      settoggle(0.5)
    }
    document.getElementById('product_div').style.opacity = toggle
    document.getElementById('product_div').style.backgroundColor = col
  }
  function someFunc () {
    makeBlur1()
    setShowCart(!showCart)
  }
  return (
    <div className='footer'>
      <div></div>
      <div
        className="details"
      >
        <div>
          <p style={{ margin: '5px 5px' }}>{`${totalQuantities} Item(s)`}</p>
          <p>{`Total Rs. ${totalPrice}`}</p>
        </div>
        <div>
          <button onClick={() => someFunc()} style={{backgroundColor: 'gray', opacity:'0.8', border: 'none', color:'white'}}>
            {!showCart && <KeyboardArrowUpIcon fontSize='large' />}
            {showCart && <KeyboardArrowDownIcon fontSize='large' />}
          </button>
        </div>
      </div>
      <div className='footer__button'>
        <div>
          {isLogin ? (
            <Link to='/checkout'>
              {!showCart}
              <div>Continue</div>
            </Link>
          ) : (
            <Link to='/login'>
              {showCart}{' '}
              <div
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Login
              </div>
            </Link>
          )}
        </div>
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

export default Footer
