import Cards from "@/components/Cards";
import { globalStyles } from "@/styles/global";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
function archive() {
  return (
    <ScrollView
      style={[globalStyles.flexColumnContainer, localStyles.containerPadding]}
    >
      <Text style={[globalStyles.title, localStyles.titlePadding]}>
        Archive
      </Text>
      <Text
        style={[
          globalStyles.font,
          globalStyles.textSmall,
          localStyles.textMedium,
        ]}
      >
        Completed and discarded tasks
      </Text>
      <Text
        style={[
          globalStyles.font,
          globalStyles.textSmall,
          globalStyles.fontWeightMedium,
          localStyles.textMedium,
          localStyles.letterSpacing,
          localStyles.capitalized,
          localStyles.titlePadding
        ]}
      >
        Completed Today
      </Text>
        <View style={[globalStyles.flexColumnContainer]}>
          <Cards completed={true} priority={"High"}/>
          <Cards completed={true} priority={"Low"}/>
          <Cards completed={true} priority={"High"}/>
          <Cards completed={true} priority={"High"}/>
          <Cards completed={true} priority={"High"}/>
          <Cards completed={true} priority={"High"}/>
            
        </View>

    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 10,
    paddingTop: 15,
    marginBottom: 30,
  },

  titlePadding: {
    marginBottom: 5,
  },

  textMedium: {
    fontSize: 14,
  },

  letterSpacing: {
    letterSpacing: 0.3,
    marginTop: 25,
  },

  capitalized: {
    textTransform: "uppercase",
  },

  
  
})

export default archive;
