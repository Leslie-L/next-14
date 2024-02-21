import { FaCheckCircle } from "react-icons/fa";
import style from './Notification.module.css'
export default function Notification(){
    return(
        <div className={style.notification}>
            <FaCheckCircle />
            <span>Producto Agregado</span>
        </div>
    )
}