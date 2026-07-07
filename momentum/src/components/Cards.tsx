import React, {useState} from "react";
import { globalStyles } from "@/styles/global";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Badge from "./Badge";
import { Checkbox } from "expo-checkbox";
import { Todo } from "@/types";
type priority = "High" | "Medium" | "Low";
interface CardsProps {
    title?: string;
    description?: string;
    priority?: priority;
    completed?: boolean;
    todo?: Todo;
}

function Cards({priority = "Medium", title, description, completed = false, todo}: CardsProps) {
  const [checked, setChecked] = useState(false);


  return (
    <View
      style={[
        globalStyles.flexContainer,
        globalStyles.card,
        borderColors[priority],
      ]}
    >
      <View style={globalStyles.flexRowContainer}>
        <Checkbox
          style={styles.checkbox}
          value={completed ? true : checked}
          disabled={completed}
          onValueChange={(newValue) => setChecked(newValue)}
        />
        <View style={globalStyles.flexColumnContainer}>
          <Text
            style={[
              globalStyles.title,
            completed || checked ? globalStyles.textStrikethrough : null,
            ]}
          >
            {todo?.Name}
          </Text>

          <Text
            style={[
              globalStyles.text,
              completed || checked ? globalStyles.textStrikethrough : null,
            ]}
          >
          {description}
          </Text>
          {completed ? null :
          <Badge priority={priority} label="High Priority" />
}
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
