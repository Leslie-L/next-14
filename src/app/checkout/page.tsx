import validateUser from "@/supabase/validateUser";
import { redirect } from "next/navigation";
export default async function Checkout() {
 const isLogged =  await validateUser();
  if(!isLogged)
    redirect('/login')
    
}