import Link from "next/link"
import styles from './Header.module.css'
import Login from "./Login"
import { ShoppingCart } from "./ShoppingCart"
import { validateAccessToken } from "@/app/utils/validateToken";
import Logout from "./Logout";

 const Header = async () => {
  
  const props =  await validateAccessToken();
  const isLogged = props? props.logged: null;
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
