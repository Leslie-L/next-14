'use client'
import { IoLogoWechat } from "react-icons/io5";
import { FaWindowMinimize } from "react-icons/fa";
import styles from "./Chat.module.css"
import { useEffect, useState } from "react";
import {Messages} from './Messages'
import { createAgent } from "@/app/utils/AI/createAgent";
import { getProducts } from "@/services/shopify";

export default function Chat(){
    const [isClosed,setIsClosed]= useState(false)
    const [agent, setAgent]=useState('')
    const handleClose = ()=>setIsClosed(!isClosed)
    const render = isClosed ?   {}:{display:'none'};

    useEffect(()=>{
        getProducts().then(products=>{
            const productTitles = products.map((product) => product.title+", con un precio de "+product.price)
            const flatProductTitles = productTitles.join("\n")
            setAgent(createAgent(flatProductTitles))
        })  
    },[])
    
    return(
        <>
            
               
                <div className={styles.chat} style={render}>
                    <div className={styles.chat__minimize}>
                        <button onClick={handleClose}>
                            <FaWindowMinimize />
                        </button>
                    </div>
                    <Messages agent={agent}/>
                </div>
            
            {
                !isClosed &&
                <button className={styles.button} onClick={handleClose}>
                    <IoLogoWechat />
                    <p className={styles.button_label}>Asistente Virtual</p>
                </button>
            }
        </>
        
    );
}