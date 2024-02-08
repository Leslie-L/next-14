import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./config";
import {  doc, setDoc} from "firebase/firestore"; 


export default async function createUserEmail(user) {
    const data = {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone:user.phone
    }
  
    try {
        const userCredential  = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const userCreated = userCredential.user;
        const uid = userCreated.uid
         await setDoc(doc(db,'Users',uid),data)
         const token = userCreated.stsTokenManager.accessToken
         const date = userCreated.stsTokenManager. expirationTime
         
        return {token,date}
        
    } catch (error) {
       
        return null
    }
    
}




