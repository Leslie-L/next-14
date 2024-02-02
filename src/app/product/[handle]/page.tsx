import ProductViwe from "@/components/ProductView"
import { getProducts } from "@/services/shopify"

interface ProductPageProps{
    searchParams:{
        id:string
    }
}
export default async function ProductPage({ searchParams }: ProductPageProps) {
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
  
    return <ProductViwe product={product} />
  }