import { create } from 'zustand'

type Store = {
  cart: CartItem[]|[]
  addToCart: (cartItem: CartItem) => void
  removeCartItem: (id:string) => void
  addOne:(id:string) => void
  substractOne:(id:string) => void
  deleteCart:() => void
}
const saveArrayToLocalStorage = (array: CartItem[]) => {
  localStorage.setItem('cartFutureV1', JSON.stringify(array))
}
export const useShoppingCart = create<Store>()((set) => ({
  cart: (() => {

    if (typeof window === 'undefined') {
      return []
    }

    const cart = localStorage.getItem('cartFutureV1')
    if (cart) {
      return JSON.parse(cart)
    }

    return []
  })(),
  
  addToCart: (cartItem: CartItem) => set((state) => { 
    const currentCart = state.cart;
    const itemExist =  currentCart.find(item=>item.id===cartItem.id)
    if(!itemExist){
      saveArrayToLocalStorage([...state.cart, cartItem])
      return ({ cart: [...state.cart, cartItem] })
    }
    itemExist.quantity = itemExist.quantity+cartItem.quantity
    saveArrayToLocalStorage([...currentCart])
    return ({ cart: [...currentCart] })
  }),
  addOne:(id:string) => set((state) => {
    const currentCart = state.cart
    const itemExist = currentCart.find((item) => item.id === id)
    if(itemExist)
      itemExist.quantity = itemExist.quantity-1
    saveArrayToLocalStorage(currentCart)
    return ({ cart: currentCart })
  }),
  substractOne:(id:string) => set((state) => {
    const currentCart = state.cart
    const itemExist = currentCart.find((item) => item.id === id)
    if(itemExist){
      itemExist.quantity = itemExist.quantity-1
      if(itemExist.quantity===0){
         const newCart = currentCart.filter((item) => item.id !== id)
         saveArrayToLocalStorage(newCart)
         return ({ cart: newCart })
      }
    }
    saveArrayToLocalStorage(currentCart)
    return ({ cart: currentCart })
  }),
  removeCartItem: (id:string) => set((state) => {
    const currentCart = state.cart
    const newCart= currentCart.filter((item) => item.id !== id)
    
    saveArrayToLocalStorage(newCart)
    return ({ cart: newCart })
    
  }),
  deleteCart:() => set((state) => {
    const currentCart: CartItem[] = []
    saveArrayToLocalStorage(currentCart)
    return ({ cart: currentCart})
  }),
}))