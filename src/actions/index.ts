"use server"

import createUserEmail from "@/firebase/createUser"
import signInUserEmail from "@/firebase/login";
import logOut from "@/firebase/logout";

import { cookies } from 'next/headers'
import { redirect } from "next/navigation";


export const  handleCreateUser= async (formData:FormData)=>{
    const form = Object.fromEntries(formData)
    const session = await createUserEmail(form);
    const cookiesStore = cookies()

    if(session){
        cookiesStore.set("accessToken",session.token, {
            path: "/",
            expires: new Date(session.date),
            httpOnly: true,
            sameSite: "strict"
          })
          redirect('/store')
    }
    
    
}
export const handleLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    const session= await signInUserEmail(formDataObject)
    const cookiesStore = cookies()
    if(session){
        cookiesStore.set("accessToken",session.token, {
            path: "/",
            expires: new Date(session.date),
            httpOnly: true,
            sameSite: "strict"
          })
          redirect('/store')
    }
  }
export const handleLogOut =  async()=>{
    await logOut();
    const cookiesStore = cookies()
    cookiesStore.delete("accessToken")
}