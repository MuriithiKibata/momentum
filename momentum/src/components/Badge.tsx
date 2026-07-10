import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native'

type BadgePriority = 'High' | 'Medium' | 'Normal';

interface BadgeProps {
    priority?: BadgePriority;
    label?: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    number_active?: number;
}

function Badge({priority = "Normal", label, style, textStyle, number_active = -1}: BadgeProps) {
  return (
   <View style={[styles.container, style, backgroundColors[priority] , styles.container]}>
    {
    (number_active > -1) ? (
        <Text style={[styles.text, textColors[priority], textStyle]}>{`${number_active} active`}</Text>
      ) : (

        <Text style={[styles.text, textColors[priority], textStyle]}>{`${priority} Priority`}</Text>
      )
    }

   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    alignSelf: "flex-start", // Prevents the badge from stretching full width
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

const backgroundColors: Record<BadgePriority, ViewStyle> = {
  High: { backgroundColor: "#FF6B6B" }, // Red
  Medium: { backgroundColor: "#FFA726" }, // Orange
  Normal: { backgroundColor: "#e2e8f0" }, // Slate
};

const textColors: Record<BadgePriority, TextStyle> = {
  High: { color: "#FECACA" }, // White text for high priority
  Medium: { backgroundColor: "#FFA726" }, // White text for medium priority
  Normal: { backgroundColor: "#e2e8f0" }, // Dark text for low priority
};



export default Badge