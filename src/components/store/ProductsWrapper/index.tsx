import ProductCard from '../ProductCard'
import styles from './Productswrapper.module.css'
interface ProductsWrapperProps {
    products: ProductType[]
}


export default function ProductsWrepper({ products }: ProductsWrapperProps) {
    return(
        <section className={styles.ProductsWrapper}>
                 {
                 products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))
                }
        </section>
    )
}