import React from "react";
import { globalStyles } from "@/styles/global";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Badge from "./Badge";
import { Checkbox } from "expo-checkbox";

type priority = "High" | "Medium" | "Low";
interface CardsProps {
    title?: string;
    description?: string;
    priority?: priority;
    completed?: boolean;
}
function Cards({priority = "Medium", title, description, completed = false}: CardsProps) {
  return (
    <View style={[globalStyles.flexContainer, globalStyles.card, borderColors[priority]]}>
      <View style={globalStyles.flexRowContainer}>
        <Checkbox style={styles.checkbox}/>
        <View style={globalStyles.flexColumnContainer}>
          <Text style={globalStyles.title}>Read On Performance Management</Text>

          <Text style={globalStyles.text}>
            Write notes on what was taught in class and check if lecturer
            replied
          </Text>
          <Badge priority={priority} label="High Priority" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "flex-start",
        marginTop: 10
    }
})

const borderColors: Record<string, ViewStyle> = {
    High: { borderLeftColor: "#FF6B6B" }, // Red
    Medium: { borderLeftColor: "#FFA726" }, // Orange
    Low: { borderLeftColor: "#e2e8f0" }, // Slate
}

export default Cards;
