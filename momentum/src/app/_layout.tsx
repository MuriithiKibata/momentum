import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Redirect } from "expo-router";
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
