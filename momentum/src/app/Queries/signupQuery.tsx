import { POST_FETCH_OPTIONS } from "@/option";
import * as SecureStore from "expo-secure-store";
import useFetch from "@/Hooks/useFetch";
import { Platform } from "react-native";
import { UserRegData } from "@/types";
const API_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:3000/signup"
    : "http://localhost:3000/signup";

export default function useSignup() {
  const { loading, data, fetchData, error } = useFetch({
    url: API_URL,
    options: POST_FETCH_OPTIONS,
    manual: true,
  });

  async function handleLogin(regData: UserRegData) {
    const response = await fetchData({
      body: JSON.stringify(regData),
    });
    if (response && response.token) {
      SecureStore.setItemAsync("token", response.token);

      return response;
    } else {
        return error
    }
  }
  return {loading, data, handleLogin, error}
}
