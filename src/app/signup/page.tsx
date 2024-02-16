import { NewAccountForm } from "@/components/Signup"
import validateUser from "@/supabase/validateUser";
import { redirect } from "next/navigation";

export default async function NewAccountPage() {
  const isLogged =  await validateUser();
  if(isLogged)
    redirect('/store')
  return <NewAccountForm />
}