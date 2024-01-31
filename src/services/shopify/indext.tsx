import { env } from "@/config/env";
import { shopifyUrls } from "./urls";

export const getProducts =async ()=>{
    try {
        const src =  await fetch(shopifyUrls.products.all,{
            headers:{
              'X-Shopify-Access-Token':env.SHOPYFY_APY_KEY
            }
          })
          const data =  await src.json()
          return data.products;
    } catch (error) {
        console.log(error)
    }
  }