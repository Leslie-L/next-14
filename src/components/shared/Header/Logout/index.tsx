"use client"
import { handleLogOut } from '@/actions'
import styles from '../Header.module.css'
export default function Logout() {
    const handleAction = async () => {
        
        await handleLogOut();
      }
    
    return(
        <button onClick={handleAction} className={styles.item}>Log out</button>
    )
}