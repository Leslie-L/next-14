'use client'
import { IoLogoWechat } from "react-icons/io5";
import { FaWindowMinimize } from "react-icons/fa";
import styles from "./Chat.module.css"
import { useState } from "react";
import {Messages} from './Messages'
export default function Chat(){
    const [isClosed,setIsClosed]= useState(false)
    const handleClose = ()=>setIsClosed(!isClosed)
    const render = isClosed ?   {}:{display:'none'};
    return(
        <>
            
               
                <div className={styles.chat} style={render}>
                    <div className={styles.chat__minimize}>
                        <button onClick={handleClose}>
                            <FaWindowMinimize />
                        </button>
                    </div>
                    <Messages/>
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