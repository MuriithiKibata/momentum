import { Platform } from "react-native";
import useFetch from "@/Hooks/useFetch";
import { UserData } from "@/types";
import * as SecureStore from "expo-secure-store";
import { POST_FETCH_OPTIONS } from "@/option";
import { AuthStore } from "@/store";
import {User} from "@/types" 
const API_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:3000/login"
    : "http://localhost:3000/login"; 


    

export default function useLogin() {
    const { data, loading, fetchData, error} = useFetch({
      url: API_URL,
      options: POST_FETCH_OPTIONS,
      manual: true
    })

   async function handleLogin(userData: UserData) {
    const response =  await fetchData({
        body: JSON.stringify(userData)
      })
      if ( response && response.token) {
        const user = {
          FirstName: response.user.FirstName,
          LastName: response.user.LastName,
          token: response.token
        }
        await AuthStore.getState().setUser(user)
       return response
      } else {
        return error
      }
    }

    return {loading, handleLogin, data}
}