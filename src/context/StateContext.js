import { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setcartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct
  let index

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item.id === product.id)
    console.log(product.id)
    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * quantity)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity)
    if (checkProductInCart) {
      const updateCartItems = cartItems.map(cartProduct => {
        if (cartProduct.id === product.id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
      })
      setcartItems(updateCartItems)
    } else {
      product.quantity = quantity
      setcartItems([...cartItems, { ...product }])
    }
  }

  const toggleCartItemQuantity = (id, value) => {
    // console.log(id)
    foundProduct = cartItems.find(item => item.id === id)

    index = cartItems.findIndex(product => product.id === id)
    const newCartItem = cartItems.filter(item => item.id !== id)
    if (value === 'inc') {
      let newCartItems = [
        ...newCartItem,
        { ...foundProduct, quantity: foundProduct.quantity + 1 }
      ]
      setcartItems(newCartItems)
      setTotalPrice(prevTotalPrice => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      // incQty()
    } else if (value === 'dec') {
      if (foundProduct.quantity > 1) {
        let newCartItems = [
          ...newCartItem,
          { ...foundProduct, quantity: foundProduct.quantity - 1 }
        ]
        setcartItems(newCartItems)
        setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        // decQty()
      } else {
        // console.log("e");
        // setToggleAdd(false)
      }
    }
  }

  const incQty = () => {
    setQty(prevQty => prevQty + 1)
  }
  const decQty = () => {
    setQty(prevQty => {
      if (prevQty - 1 < 1) return 1
      return prevQty - 1
    })
  }
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
