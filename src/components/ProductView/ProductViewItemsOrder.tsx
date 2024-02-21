"use client";
import { SyntheticEvent, useEffect, useState } from "react";

import styles from "./ProductViewItemsOrder.module.css";
import { useShoppingCart } from "@/provider/useShoppingCart";
import Notification from "./Notification";


interface ProductViewItemsOrderProps {
  maxQuantity: number,
  product: ProductType
}

export const ProductViewItemsOrder = ({ maxQuantity,product }: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();
  const [notification,setNotification]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setNotification(false)
    },2000)
  },[notification])
  const handleAddToCart = () => {
    //event.preventDefault();
    setNotification(true)
    addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
      id: product.id,
      image:product.image
    });
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    handleAddToCart()
  };

  const handleSubtract = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
    
  }

  const handleAdd = (event: SyntheticEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  }

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewItemsOrder__form}
      >
        <button
          className={styles.ProductViewItemsOrder__submit}
          type="submit"
        >
          <span>🛒 Add to cart</span>
        </button>
      </form>
      {
        notification &&
          <Notification/>
      }
    </div>
  )
};