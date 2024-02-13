import { env } from "@/config/env"
import { shopifyUrls } from "./urls"

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all)
    const { collection } = await response.json()
    
    return collection
  } catch (error) {
    console.log(error)
  }
}
export const getCollectionProducts = async (idSelected: string) => {
  try {
    
    const response = await fetch(shopifyUrls.products.all);
    const {products} = await response.json();
    const resProds = products.filter((item:products)=>item.handlec===idSelected)
    return resProds;
    
  } catch (error) {
    console.log(error)
  }
}