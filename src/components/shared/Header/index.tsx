import Link from "next/link"
import styles from './Header.module.css'
export default function Header() {
    return(
        <header>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <Link href="/">
              <li className={styles.item}>Home</li>
            </Link>
            <Link href="/store">
              <li className={styles.item}>Store</li>
            </Link>
          </ul>
        </nav>
      </header>
    )
}