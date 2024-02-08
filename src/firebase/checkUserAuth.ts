import { cookies } from 'next/headers'
import { adminSDK } from './configAdmin';

export default async function checkUserAuth() {
    const cookiesStore = cookies()
    const cookie  =cookiesStore.get('accessToken')?.value
   

    
 try {
    const token = await adminSDK.auth().verifyIdToken(cookie);
    
   if (!token) {
     return null
   }

   // the user is authenticated!
   const { uid } = token;
   const user = await adminSDK.auth().getUser(uid);

   return {
     user,
     "logged":true
   };
 } catch (error) {
   return null
 }
}