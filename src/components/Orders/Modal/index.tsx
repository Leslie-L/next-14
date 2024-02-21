import Image from "next/image";
import style from "./Modal.module.css"
import { RiCloseFill } from "react-icons/ri";
import { Dispatch, SetStateAction } from "react";
type Order = {
    created_at: string
    productos: [] | CartItem[]
}
export default  function Modal({ order,close }: { order:Order | undefined, close:Dispatch<SetStateAction<boolean>>}) {
    if(order)
    {   
        const total = order.productos.reduce((prev,actual)=>{
            return (actual.price*actual.quantity)+prev
        },0)
        let date = new Date(order.created_at)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        const dateFinal = `${day}/${month}/${year}`;

        return(
            <div className={style.modal}>
                <div className={style.modal_container}>
                <button className={style.modal_container_button} onClick={()=>close(false)}><RiCloseFill /></button>
                <h3 className={style.modal_container_title}>Detalle de la compra</h3>
                <span>Fecha: {dateFinal}</span>
                <div className={style.modal_container_division}></div>
                <div>
                    {
                        order.productos.map(item=>{
                            return(
                                <div className={style.modal_container_item} key={item.id}>
                                    <Image
                                        src={item.image ||""}
                                        //fill
                                        width={50}
                                        height={50}
                                        alt={item.title} 
                                        loading="eager" 
                                    /> 
                                    <span>{item.title}</span>
                                    <div  className={style.modal_container_item_detal}>
                                        <p>Cantidad: {item.quantity}</p>
                                        <p>Subtotal: ${item.quantity*item.price}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                    <div className={style.modal_container_division}></div>
                    <p className={style.modal_total}><span>Total:</span> <span>${total}</span></p>
                </div>
                
            </div>
        )
    }
}