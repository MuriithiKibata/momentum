import React, { JSX } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Badge from "@/components/Badge";
import { globalStyles } from "@/styles/global";
import { colors } from "@/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from "@expo/vector-icons/Entypo";
interface CategoryProps {
    category: string,
    description: string,
    active?: number

}

const iconMap: Record<string, JSX.Element> = {
  "Personal": <Ionicons name="person" size={24} color={colors.primary} />,
  "Shopping": <MaterialIcons name="shopping-cart" size={24} color={colors.primary} />,
  "Health": <AntDesign name="heart" size={24} color={colors.gray} />,
  "Work": <Entypo name="briefcase" size={24} color={colors.primary} />,
  "School": <Ionicons name="school" size={24} color={colors.primary} />,
  "Other": <AntDesign name="appstore" size={24} color={colors.primary} />
};


function CategoryCards({category, description, active}: CategoryProps) {


  console.log(active)

  return (
    <>
      <TouchableOpacity style={[globalStyles.card, localStyles.cardWidth]}>
        <View style={[globalStyles.flexRowContainer]}>
          <View
            style={[
              localStyles.iconBgColor,
              localStyles.iconPadding,
              localStyles.iconBorder,
            ]}
          >
            {iconMap[category]}
          </View>
          <Badge number_active={active} textStyle={localStyles.textStyling} />
        </View>
        <View>
          <Text style={[globalStyles.title, localStyles.titleMargin]}>
            {category}
          </Text>
          <Text style={[globalStyles.paragraph, globalStyles.textSmall]}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const localStyles = StyleSheet.create({
    cardWidth: {
        width: "45%",
    },
  iconPadding: {
    padding: 10,
  },
  iconBgColor: {
    backgroundColor: "#93C5FD",
  },

  iconBorder: {
    borderRadius: 8,
  },

  textStyling: {
    fontSize: 10,
    fontWeight: "500",
    color: "#6B7280",
  },

  titleMargin: {
    marginTop: 10,
    marginBottom: 3,
  },
});

export default CategoryCards