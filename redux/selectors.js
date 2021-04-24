import { useSelector, useDispatch } from 'react-redux'

export const cartToggle = () => {
  const cartHidden = useSelector((state) => state.cartHidden)
  const dispatch = useDispatch()

  const toggleCartHidden = () =>
    dispatch({
      type: 'TOGGLE_CART_HIDDEN',
    })

  return { cartHidden, toggleCartHidden }
}

// NOTE: Should this be memoized?
export const selectCartItemsCount = () => {
  const count = useSelector((state) =>
    state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  )
  return { count }
}

export const selectCartItems = () => {
  const cartItems = useSelector((state) => state.cartItems)
  return { cartItems }
}

export const selectCartTotal = () => {
  const cartItems = useSelector((state) => state.cartItems)

  const priceTotal = cartItems
    .reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity
    }, 0)
    .toFixed(2)

  return { priceTotal }
}

export const addItemToCart = () => {
  const dispatch = useDispatch()

  return (item) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })
}

export const removeOneItemFromCart = () => {
  const dispatch = useDispatch()

  return (item) =>
    dispatch({
      type: 'REMOVE_ONE_FROM_CART',
      payload: item,
    })
}

export const removeItemFromCart = () => {
  const dispatch = useDispatch()

  return (id) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
}

/*
export const useCounter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })

  return { count, increment }
}
*/
