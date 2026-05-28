import { globalStyles } from "@/styles/global";
import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import CategoryCards from "@/components/CategoryCards";
function category() {
  return (
    <ScrollView
      style={[
    
        localStyles.parentPadding,
        localStyles.wrapping,
      ]}
    >
      <View>
        <Text style={globalStyles.title}>Category</Text>
      </View>
      <View style={[localStyles.layout]}>
        <CategoryCards
          category={"Shopping"}
          description={"Groceries & Supplies"}
        />
        <CategoryCards
          category={"Other"}
          description={"Groceries & Supplies"}
        />
        <CategoryCards
          category={"Work"}
          description={"Groceries & Supplies"}
        />
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  layout: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
    width: "100%"
  },

  parentPadding: {
    padding: 20,
  },
  wrapping: {},
});

export default category;
