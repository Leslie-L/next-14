import Link from "next/link"
import styles from './Header.module.css'
import Login from "./Login"
import { ShoppingCart } from "./ShoppingCart"
import Logout from "./Logout";
import validateUser from "@/supabase/validateUser"

 const Header = async () => {
  
  const isLogged =  await validateUser();
 
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
          <div className={styles.Header__user}>
            {
                isLogged&&
                <Link href="/orders" className={styles.item}>
                  Orders
                </Link>
            }
            <ShoppingCart />
            {
              isLogged?
              <Logout/>:
              <Login/>
            }
            
            
            
        </div>
        </nav>
      </header>
    )
}

  
export default Header;
