import { Route } from 'react-router-dom'
import './App.css'
import { StateContext } from './context/StateContext'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { useState } from 'react'
import Login from './components/Login'
import Checkout from './components/Checkout'
import ProductList from './pages/ProductList'

function App () {
  const [user, setUserState] = useState({})

  return (
    <StateContext>
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route
            exact
            path='/login'
            element={
              user && user._id ? (
                <Checkout />
              ) : (
                <Login loginUser={setUserState} />
              )
            }
          ></Route>
          <Route
            exact
            path='/login'
            element={<Login loginUser={setUserState} />}
          />
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      </Router>
    </StateContext>
  )
}

export default App
