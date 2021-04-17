import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

const initialState = {
  count: 0,
  cartItems: [],
  cartHidden: 1,
}

const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      }
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        cartHidden: !state.cartHidden,
      }
    default:
      return state
  }
}

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
