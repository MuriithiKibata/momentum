import React from "react";
import { globalStyles } from "@/styles/global";
import { View, Text, ScrollView } from "react-native";
import Badge from "./Badge";
import { Checkbox } from "expo-checkbox";
function Cards() {
  return (
    <View style={[globalStyles.flexContainer, globalStyles.card]}>
      <View style={globalStyles.flexRowContainer}>
        <Checkbox/>
        <View style={globalStyles.flexColumnContainer}>
          <Text style={globalStyles.title}>Read On Performance Management</Text>

          <Text style={globalStyles.text}>
            Write notes on what was taught in class and check if lecturer
            replied
          </Text>
          <Badge priority="High" label="High Priority" />
        </View>
      </View>
    </View>
  );
}

export default Cards;
