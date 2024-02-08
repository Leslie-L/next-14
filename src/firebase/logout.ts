import {signOut} from 'firebase/auth';
import { auth } from './config';

async function logOut() {
    try {
        await signOut(auth)
      
    } catch (error) {
      console.log(error)  
    }
}
export default logOut;