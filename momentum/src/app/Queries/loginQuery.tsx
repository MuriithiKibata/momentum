import { Platform } from "react-native";
import useFetch from "@/Hooks/useFetch";
import { UserData } from "@/types";
import * as SecureStore from "expo-secure-store";
import { POST_FETCH_OPTIONS } from "@/option";


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
       await SecureStore.setItemAsync("token", response?.token)
      //  await SecureStore.setItemAsync("user", response.user)
       console.log(response.user);
       // Use a programmatic navigation method if needed
       return response
      } else {
        return error
      }
    }

    return {loading, handleLogin, data}
}