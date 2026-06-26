import * as SecureStore from "expo-secure-store"
export const getToken = async () => {
    const data = await SecureStore.getItemAsync("user")

    const parsedData = data ? JSON.parse(data) : null
    let token;
    
    if (parsedData.token !== null) {
        token = parsedData.token
        return token
    }

    return null

}