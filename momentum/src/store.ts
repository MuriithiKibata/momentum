import { create } from 'zustand'
import * as SecureStore from 'expo-secure-store'
import { User } from './types'
interface UserData {
    FirstName: string | null
    LastName: string | null
    token: string | null
}


interface UserState {
    user: UserData | null
    loading: boolean
    setUser: (user: UserData | null) => Promise<void>
    getUser: () => Promise<void>

}



export const AuthStore = create<UserState>((set) => ({
    user: null,
   loading: true,

    setUser: async (user) => {
        if (user) {
            await SecureStore.setItemAsync("user", JSON.stringify(user))
        } else {
            await SecureStore.deleteItemAsync("user")
        }
        set({user})
    },
    getUser: async () => {
            set({loading: true})
            const user = await SecureStore.getItemAsync("user")
            if (user) {
                set({user: JSON.parse(user)})
                 set({ loading: false });
            } else {
                set({user: null})
                set({ loading: false });
            }
    
    },

   
}))
