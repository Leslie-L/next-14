"use client"
import { useShoppingCart } from "@/provider/useShoppingCart";
import Image from "next/image";
import styles from './CheckoutOrder.module.css'
import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from "next/navigation";

export default function CheckoutOrder({ user }: { user: User | null }) {
    const { cart,addOne,substractOne,deleteCart } = useShoppingCart();
    const totalItems = cart.reduce((prev,current)=>(current.quantity)+prev,0)
    const totalPrice  = cart.reduce((prev,current)=>(current.price*current.quantity)+prev,0)
    const redirect = useRouter()
    if(cart.length===0)
        redirect.push('/store')
    const supabase = createClientComponentClient();
    const uuid =  user?.id
    const [cardNumber, setCardNumber]=useState('')
    const [cardName, setCardName]=useState('')
    const [cardMonth, setCardMonth]=useState('')
    const [cardCVC, setCardCVC]=useState('')
    const [front,setFront]=useState(true)
    const handleDigits= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFront(true)
        // Filtrar solo números
        const numeroSinLetras = e.currentTarget.value.replace(/\D/g, '');
        // Añadir espacios cada 4 dígitos
        const numeroConEspacios = numeroSinLetras.replace(/(\d{4})/g, '$1 ').trim();
        setCardNumber(numeroConEspacios)
        
    }
    const handleBuy=async ()=>{
        
        const date = new Date().toISOString()
        const data = { idUser: uuid, productos: cart, created_at:date}
        
        const {  error, status } = await supabase
        .from('Compras')
        .insert(data)
        if(status===201)
            deleteCart();
        console.log(error)
    }
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
            <article className={styles.info_form}>
                <h2>Informacion de Pago</h2>
                <p>Esta es un fakeStore, ninguna informacion personal sera guardada. Utilice datos falsos.</p>
                <form  className={styles.info}action="">
                    <label htmlFor="">
                        Nombre:
                        <input className={styles.input} type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Apellido:
                        <input className={styles.input} type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Correo:
                        <input className={styles.input} type="email" name="" id="" />
                    </label>
                    <label htmlFor="">
                        Telefono:
                        <input className={styles.input} type="tel" name="" id="" />
                    </label>
                    <label htmlFor="">
                        
                        <textarea className={styles.input} 
                        placeholder="Ingrese su direccion" 
                        style={{border:'1px solid #ff4980'}} name="" id="" cols={30} rows={10}></textarea>
                    </label>
                </form>
                <h3>Informacion de la tarjeta</h3>
                {front &&
                    <div className={styles.card}>
                        <span className={styles.card_title}>Credit Card</span>
                    
                        <FcSimCardChip className={styles.card_chip} />
                        
                        <span className={styles.card_number} >{cardNumber.length===0?'XXXX XXXX XXXX XXXX':cardNumber}</span>
                        <p className={styles.card_month}>Valid THRU <span>{cardMonth.length===0?'00/00':cardMonth}</span></p>
                        <p className={styles.card_name}>{cardName.length===0?'NOMBRE EN LA TARJETA':cardName}</p>
                    </div>
                }
                {
                    !front &&
                    <div className={styles.card}>
                        <div className={styles.card_strip}></div>
                        <div className={styles.card_container} >
                            <div className={styles.card_signature}></div>
                            <p ><span className={styles.card_cvc}>{cardCVC.length===0?' ':cardCVC}</span>CVC</p>
                        </div>
                    </div>
                } 
                <form action="" className={styles.card_form}>
                    <label htmlFor="">
                        Numero de la tarjeta
                        <input type="text" 
                        className={styles.input}
                        onChange={handleDigits}
                        value={cardNumber}
                        placeholder="0000 0000 0000 0000" name="" id="" maxLength={19}/>
                    </label>
                    <label htmlFor="">
                        Nombre en la tarjeta
                        <input type="text" 
                        className={styles.input}
                        onChange={(e)=>{
                            setFront(true)
                            setCardName(e.currentTarget.value.toLocaleUpperCase())}}
                        value={cardName}
                         />
                    </label>
                    <label htmlFor="">
                        Mes/Año
                        <input type="month" 
                        className={styles.input}
                        onChange={(e)=>{
                            setFront(true)
                            setCardMonth(e.currentTarget.value)}}
                        value={cardMonth}
                         />
                    </label>
                    <label htmlFor="">
                        CVC
                        <input type="text" 
                        className={styles.input}
                        onChange={(e)=>{
                            setFront(false)
                            setCardCVC(e.currentTarget.value)
                        }}
                        value={cardCVC}
                        maxLength={4}
                         />
                    </label>
                </form>
                <button 
                    onClick={handleBuy}
                    className={styles.buy}>
                    Finalizar Compra
                </button>
            </article>
        </section>
    )
}