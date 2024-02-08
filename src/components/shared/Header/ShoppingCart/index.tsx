"use client";
import { FaShoppingCart } from "react-icons/fa";
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from "@/provider/useShoppingCart";

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();
  console.log(cart)
  const total = cart.reduce((prev,current)=>current.quantity+prev,0)
  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>
        {total}
      </span>
      <FaShoppingCart />
    </button>
  )
}