import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { faL } from '@fortawesome/free-solid-svg-icons'
import './Login.css'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
const Login = () => {
  const navigate = useNavigate()

  const [phone, setPhone] = useState('')
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    // storing input name
    localStorage.setItem('phone', phone)
  }, [phone])
  const loginDataSend = () => {
    // e.preventDefalut()
    if (phone) {
      navigate('/checkout', { replace: true })
      setFlag(true)
      localStorage.setItem('phone', JSON.stringify(phone))
    } else {
      setFlag(true)
      alert('Please enter all credentials')
    }
  }

  return (
    <div className='login'>
      <div>
        <div className='login_title'>
          <div
            className='login_arrow'
            onClick={() => {
              navigate('/')
            }}
          >
            <ArrowBackRoundedIcon />
          </div>
          <div className='login_label'>
            <p>Login</p>
          </div>
        </div>
        <hr></hr>
        <form method='post'>
          <div className='outer_box'>
            <div className='login_input'>
              <input
                name='phone'
                type='number'
                value={phone}
                placeholder='Enter your phone number'
                onChange={e => setPhone(e.target.value)}
              ></input>
            </div>
            <div className='login_submit_button'>
              <button type='button' onClick={loginDataSend}>
                SUBMIT
              </button>
            </div>
            <div className='login_later'>
              <button
                style={{ borderWidth: '0px', textDecoration: 'underline' }}
                type='text'
                onClick={() => {
                  navigate('/')
                }}
              >
                Will do it later
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
