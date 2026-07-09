import React, {useState} from "react";
import { globalStyles } from "@/styles/global";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import Badge from "./Badge";
import { Checkbox } from "expo-checkbox";
import { Todo } from "@/types";
import useCompleteTodoQuery from "@/app/Queries/completeTodoQuery";
type priority = "High" | "Medium" | "Normal";
interface CardsProps {
  todo?: Todo;
  fetchTodos?: () => void;
}

function Cards({todo, fetchTodos}: CardsProps) {
  const [checked, setChecked] = useState(false);
  const { handleCompleteTodo, loading } = useCompleteTodoQuery() 

  const handleComplete = async (id: number | undefined, newValue: boolean): Promise<void> => {
   setChecked(newValue);
   await handleCompleteTodo(id)
  fetchTodos?.()

  };

  return (
    <View
      style={[
        globalStyles.flexContainer,
        globalStyles.card,
        borderColors[todo?.Priority || "Low"],
      ]}
    >
      <View style={globalStyles.flexRowContainer}>
        <Checkbox
          style={styles.checkbox}
          value={todo?.Completed ? true : checked}
          disabled={todo?.Completed}
          onValueChange={(newValue) => handleComplete(todo?.ID, newValue)}
        />
        <View style={globalStyles.flexColumnContainer}>
          <Text
            style={[
              globalStyles.title,
            todo?.Completed || checked ? globalStyles.textStrikethrough : null,
            ]}
          >
            {todo?.Name}
          </Text>

          <Text
            style={[
              globalStyles.text,
              todo?.Completed || checked ? globalStyles.textStrikethrough : null,
            ]}
          >
          {todo?.Description}
          </Text>
          {todo?.Completed? null :
          <Badge priority={todo?.Priority} label="High Priority" />
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
