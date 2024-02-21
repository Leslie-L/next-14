"use client"
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoBagHandle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import styles from './Orders.module.css'
type Order = {
    created_at: string
    productos: [] | CartItem[]
}
export default function Orders({ user }: { user: User | null }) {
    const [orders, setOrders] = useState<Order[]>([]);
    const redirect = useRouter()
    const supabase = createClientComponentClient();
    const uuid =  user?.id
    useEffect(()=>{
        const getData = async()=>{
            const { data, error, status } = await supabase
            .from('Compras')
            .select(`created_at,productos`)
            .eq('idUser', uuid)
            console.log(error)
            if (data) {
                setOrders(data )
            }
        }
        getData();
    },[])
    return(
        <section>
            <h1>Tus Ordenes</h1>
            {
                orders.length===0 && 
                <p>No has hecho ninguna orden.</p>
            }
            <div className={styles.container}>
                {
                    orders.length>0 &&
                    orders.map(item=>{
                        let date = new Date(item.created_at)
                        let day = date.getDate()
                        let month = date.getMonth() + 1
                        let year = date.getFullYear()
                        const dateFinal = `${day}/${month}/${year}`;
                        const cantItems = item.productos.length
                        const total = item.productos.reduce((prev,actual)=>{
                            return(actual.price*actual.quantity)+prev
                        },0)
                        return(
                            <div  className={styles.item} key={item.created_at}>
                                <div className={styles.item_icon}>
                                    <IoBagHandle />
                                </div>
                                <div className={styles.item_details}>
                                    <span>Fecha: {dateFinal}</span>
                                    <span>Cantidad de productos:{cantItems}</span>
                                    <span>Total: ${total}</span>
                                </div>
                                <button className={styles.item_button}>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}