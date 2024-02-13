import {signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "./config";

export default async function signInUserEmail(user:any) {
    try {
        
        const userCredential  = await signInWithEmailAndPassword(auth, user.email, user.password);
        //@ts-ignore
        const token = userCredential.user.stsTokenManager.accessToken
        //@ts-ignore
         const date = userCredential.user.stsTokenManager. expirationTime
        return {token,date}
    } catch (error) {
        console.log(error)
        return null
    }
    
}
