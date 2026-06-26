import { View, Text } from "react-native";
import { Stack } from "expo-router";
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { User } from "@/types";

export default function AuthLayout() {
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState<boolean>(false)
 useEffect(() => {
    const getuser = async () => {
        setLoading(true)
        const user = await SecureStore.getItemAsync("user")
        setUser(user ? JSON.parse(user) : null)
        setLoading(false)
        return user
    }
    getuser()
 },[])
     
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading Session...</Text>
      </View>
    );
  }

  if (user !== null && user.token) {
    return <Redirect href="/(tabs)" />;
  }
    

    return (
<Stack screenOptions={{headerShown: true}}>
    <Stack.Screen name="login" />
    <Stack.Screen name="signup" />
</Stack>
 )
} 