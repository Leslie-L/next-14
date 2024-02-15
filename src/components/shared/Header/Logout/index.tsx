"use client"
import { logout } from '@/actions'
import styles from '../Header.module.css'
export default function Logout() {
    const handleAction = async () => {
        await logout();
      }
    
    return(
        <button onClick={handleAction} className={styles.item}>Log out</button>
    )
}