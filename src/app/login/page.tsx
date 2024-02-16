import Login from "@/components/Login";
import validateUser from "@/supabase/validateUser";
import { redirect } from "next/navigation";

export default async function LoginPage()  {
  const isLogged =  await validateUser();
  if(isLogged)
    redirect('/store')
  return (
    <Login/>
  );
}