import { create } from 'zustand'



const sessionStore = create()((set) => ({
  user:null,
  updateUser: (newUser)=> set((state) => ({ user:newUser }))
  
}))
export default sessionStore