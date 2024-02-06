import { env } from "@/config/env";

export const shopifyUrls = {
    products:{
        'all':`http://localhost:3000/api/products`,
        'mainProducts': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/465664934182/products.json`,
    },
    collections: {
        'all': `http://localhost:3000/api/collections`,
        'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`
    }
}