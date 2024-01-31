import { env } from "@/config/env";

export const shopifyUrls = {
    products:{
        'all':`https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`,
    }
}