"use client"
import { useShoppingCart } from "@/provider/useShoppingCart";
import Image from "next/image";
import styles from './CheckoutOrder.module.css'

export default function CheckoutOrder() {
    const { cart } = useShoppingCart();
    const totalItems = cart.reduce((prev,current)=>(current.quantity)+prev,0)
    const totalPrice  = cart.reduce((prev,current)=>(current.price*current.quantity)+prev,0)
    return(
        <section>
            <h1 className={styles.title}>CheckOut</h1>
            <article className={styles.container}>
                <p>Cantidad de Articulos: {totalItems}</p>
                {
                    cart.map(item=>{
                        return(
                            <div key={item.id} className={styles.item}>
                                <div className={styles.item_image}>
                                    <Image
                                    
                                    src={item.image ||""}
                                    //fill
                                    width={100}
                                    height={100}
                                    alt={item.title} 
                                    loading="eager" 
                                    /> 
                                </div>
                                <div className={styles.item_detail}>
                                        <h3>{item.title}</h3>
                                        <div className={styles.item_detail__prices_menu_quentity}>
                                            <span className={styles.item_detail__prices_menu_quentity_span}>Cantidad:</span>
                                            <div className={styles.item_detail__prices_menu}>
                                                <button>-</button>
                                                <span>{item.quantity}</span>
                                                <button>+</button>
                                            </div>
                                        </div>
                                        <p className={styles.text}>Precio Unitario: ${item.price}</p>
                                        <p className={styles.text}>Total: ${Number(item.price*item.quantity).toFixed(2)}</p>
                                    
                                </div>
                            </div>
                        )
                    })
                }
                <div className={styles.division}></div>
                <div className={styles.total}>
                    <span>Total a pagar:</span>
                    <span>${totalPrice}</span>
                </div>
            </article>
        </section>
    )
}