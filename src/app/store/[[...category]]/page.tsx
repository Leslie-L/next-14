import ProductsWrepper from "@/components/store/ProductsWrapper"
import { getProducts } from "@/services/shopify"
import { getCollections, getCollectionProducts } from "@/services/shopify/collections"

interface CategoryProps {
  params: {
    category: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const { category } = props.params
  let products = []
  const collections = await getCollections()
  const categories  = category
  if (categories?.length > 0) {
    
    products = await getCollectionProducts(categories[0])
  }else {
    products = await getProducts()
  }
  
  return (
    <ProductsWrepper products={products} />
  )
}