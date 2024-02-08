import {signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "./config";

export default async function signInUserEmail(user) {
    try {
        
        const userCredential  = await signInWithEmailAndPassword(auth, user.email, user.password);
        console.log(userCredential.user)
        const token = userCredential.user.stsTokenManager.accessToken
         const date = userCredential.user.stsTokenManager. expirationTime
        return {token,date}
    } catch (error) {
        console.log(error)
        return null
    }
    
}
