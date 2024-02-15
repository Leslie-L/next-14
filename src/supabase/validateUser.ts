import { cookies } from 'next/headers'

import { createClient } from './server'

export default async function validateUser() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    return false
  }

  return true
}