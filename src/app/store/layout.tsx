import { getCollections } from "@/services/shopify/collections"
import Link from "next/link"
import styles from './layout.module.css'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections:ProductType[] = await getCollections()
  
  return (
    <main>
      <nav className={styles.navbar}>
        {
          collections.map((collection) => (
            <Link className={styles.navbar_link} key={collection.id} href={'/store/' + collection.handle}>
              {collection.title}
            </Link>
          ))
        }
      </nav>
      {children}
    </main>
  )
}