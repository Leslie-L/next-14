"use client"
import logOut from "@/firebase/logout";
import styles from '../Header.module.css'
export default function Logout() {
    return(
        <button onClick={logOut} className={styles.item}>Log out</button>
    )
}