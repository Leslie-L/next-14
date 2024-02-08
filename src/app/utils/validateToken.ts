
import checkUserAuth from '@/firebase/checkUserAuth'
import { cookies } from 'next/headers'

export const validateAccessToken =async () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const respuesta = await checkUserAuth()
  
  return respuesta;
  /*
  if(accessToken)
    return true
  return null
  */
}