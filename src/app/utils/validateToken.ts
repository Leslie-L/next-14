
import { cookies } from 'next/headers'

export const validateAccessToken = () => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  if(accessToken)
    return true
  return null
}