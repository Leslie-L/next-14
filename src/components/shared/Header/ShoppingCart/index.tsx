"use client";
import { FaShoppingCart } from "react-icons/fa";
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from "@/provider/useShoppingCart";
import { useState } from "react";

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  
  const total = cart.reduce((prev,current)=>current.quantity+prev,0)
  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      <span className={styles.ShoppingCart__counter}>
        {total}
      </span>
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {
            cart.map(item => (
              <div key={item?.id} className={styles.ShoppingCart__items_item}>
                <p >{item?.title}</p>
                <p><b>Cantidad:</b> {item.quantity}</p>
              </div>
            ))
          }
          <button className={styles.ShoppingCart__buyButton}>
            Buy
          </button>
        </div>
      )}
    </button>
  )
}