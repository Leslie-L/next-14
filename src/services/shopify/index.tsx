import { env } from "@/config/env";
import { shopifyUrls } from "./urls";
export const dynamic = 'force-dynamic';
export const getProducts =async (id?:string):Promise<ProductType[]>=>{
    try {
      const src =  await fetch(shopifyUrls.products.all)
      const { products } = await src.json()
      return products;
    } catch (error) {
        console.log(error)
        return [];
    }
  }
  export const getProduct =async (id:string):Promise<ProductType|undefined>=>{
    try {
      const src =  await fetch(shopifyUrls.products.all)
      const { products } = await src.json()
      
      const transformed = products.find((item:ProductType)=>item.id == id)
      return transformed
    } catch (error) {
        console.log(error)
    }
  }
  export const getMainProducts = async () => {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPYFY_APY_KEY
      }),
      cache: 'force-cache',
      next: {
        tags: ['main-products']
      }
    })
  
    const {products} = await response.json()
  
    return products
  }