import { cookies } from 'next/headers'

import { createClient } from '../server'
export default async function insertOrder(cart: CartItem[]){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
  
    const { data, error } = await supabase.auth.getUser()
    
    const date = Date.now()
    if (error || !data?.user) {
        const uuid = data.user?.id
        const { error } = await supabase
        .from('Compras')
        .insert({ id: uuid, productos: cart, created_at:date})
    }
    
}