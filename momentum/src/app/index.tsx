import { Text, View, StyleSheet } from "react-native";
import { globalStyles } from "@/styles/global";
import { useFonts } from "expo-font";
import Cards from "@/components/Cards";
export default function Index() {
  const [fontsLoaded] = useFonts({
    Manrope: require("../../assets/Manrope.ttf"),
  });

  return (
    <View style={styles.container}>
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBlock: 20,
    paddingInline: 10,
  },
});
