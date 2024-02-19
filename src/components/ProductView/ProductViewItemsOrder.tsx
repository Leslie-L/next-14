"use client";
import { SyntheticEvent, useState } from "react";

import styles from "./ProductViewItemsOrder.module.css";
import { useShoppingCart } from "@/provider/useShoppingCart";


interface ProductViewItemsOrderProps {
  maxQuantity: number,
  product: ProductType
}

export const ProductViewItemsOrder = ({ maxQuantity,product }: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useShoppingCart();

  const handleAddToCart = () => {
    //event.preventDefault();
   
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
    </div>
  )
};