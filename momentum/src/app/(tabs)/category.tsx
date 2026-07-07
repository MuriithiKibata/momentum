import { globalStyles } from "@/styles/global";
import React from "react";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import CategoryCards from "@/components/CategoryCards";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "@/colors";
import useGetCategory from "../Queries/categoryQuery";
import { Category } from "@/types";
function category() {

  const { data, loading } = useGetCategory();


  return (
    <ScrollView style={[localStyles.parentPadding]}>
      <View style={[localStyles.container, localStyles.margin]}>
        <Text
          style={[
            globalStyles.font,
            globalStyles.fontWeightBold,
            localStyles.title,
          ]}
        >
          Category
        </Text>
        <TouchableOpacity style={[localStyles.container]}>
          <AntDesign
            name="plus"
            size={15}
            color={colors.primary}
            style={globalStyles.fontWeightMedium}
          />
          <Text
            style={[globalStyles.fontWeightMedium, localStyles.colorsPrimary]}
          >
            New
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[localStyles.layout]}>
        {data?.map((cat: Category) => (
          <CategoryCards
            key={cat.ID}
            category={cat.Name}
            description={"Groceries & Supplies"}
            active={cat.todo_count}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  
  title: {
    fontSize: 24,
  },

  colorsPrimary: {
    color: colors.primary,
  },

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
  margin: {
    marginBottom: 20,
  }
});

export default category;
