import { env } from "@/config/env";

export const shopifyUrls = {
    products:{
        'all':`${process.env.NEXT_PUBLIC_API_LOCAL}/api/products`,
        'mainProducts': `${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/465664934182/products.json`,
    },
    collections: {
        'all': `${process.env.NEXT_PUBLIC_API_LOCAL}/api/collections`,
        'products': (id: string) => `https://${env.SHOPIFY_HOSTNAME}/admin/api/2024-01/collections/${id}/products.json`
    }
}