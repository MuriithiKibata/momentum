import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Redirect } from "expo-router";
import { AuthStore } from "@/store";
import { useEffect } from "react";
export default function RootLayout() {
   
  const [fontsLoaded] = useFonts({
    Manrope: require("../../assets/Manrope.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return <Stack
  screenOptions = {{
    headerShown: false,
  }}>
    
  </Stack>;


  
}
