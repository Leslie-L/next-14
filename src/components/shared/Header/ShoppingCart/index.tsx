"use client";
import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from "@/provider/useShoppingCart";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const ShoppingCart = () => {
  const { cart,removeCartItem } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleOpen = () => setIsOpen(!isOpen);
  const handleDelete=(id:string)=>{
    removeCartItem(id);
  }
  const handleBuy= ()=>{
    handleOpen();
    router.push('/checkout')
  }
  const total = cart.reduce((prev,current)=>current.quantity+prev,0)
  if(total===0)
    return(<FaShoppingCart />)
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
                <Image                
                  src={item.image ||""}
                  width={40}
                  height={40}
                  alt={item.title} 
                  loading="eager" 
                /> 
                <div className={styles.ShoppingCart__items_item_container}>
                  <p >{item?.title}</p>
                  <p><b>Cantidad:</b> {item.quantity}</p>
                </div>
                <button onClick={()=>handleDelete(item.id)}  className={styles.ShoppingCart__items_item_button}>
                   <MdDeleteForever />
                </button>
              </div>
            ))
          }
          <button onClick={handleBuy} className={styles.ShoppingCart__buyButton}>
            Buy
          </button>
        </div>
      )}
    </button>
  )
}