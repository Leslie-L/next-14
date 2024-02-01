import ProductsWrepper from "@/components/store/ProductsWrapper"
import { getProducts } from "@/services/shopify"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params
  const products = await getProducts();
  
  

  return (
    <ProductsWrepper products={products} />
  )
}