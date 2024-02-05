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
    const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
    products = await getCollectionProducts(selectedCollectionId)
  }else {
    products = await getProducts()
  }

  return (
    <ProductsWrepper products={products} />
  )
}