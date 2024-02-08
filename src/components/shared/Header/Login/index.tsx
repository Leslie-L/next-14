'use client'
import { useEffect, useState } from "react";
import styles from "../Header.module.css"
import Link from "next/link";


export default function Login() {
        return(
            <Link href="/login">
              <span className={styles.item}>Login</span>
            </Link>
        )
    
}