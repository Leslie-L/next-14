
import validateUser from "@/supabase/validateUser";
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import { createClient } from "@/supabase/server";
import Orders from "@/components/Orders";

export default async  function Checkout() {
 const isLogged =  await validateUser();
  if(!isLogged)
    redirect('/login')

  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase.auth.getUser()

  return(
    <Orders user={data.user}/>
  )
}