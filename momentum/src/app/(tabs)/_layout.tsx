import { Tabs } from "expo-router";
import {
  FontAwesome6,
  MaterialIcons,
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Navbar from "@/components/Navbar";
import { colors } from "@/colors";

export default function TabsLayout() {
    return (
      <Tabs
        screenOptions={{
          header: () => <Navbar />,
          tabBarActiveTintColor: "#2563eb",
          tabBarInactiveTintColor: "#000000",

          tabBarStyle: {
            paddingVertical: 10,
            flex: 0,
            width: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: "#ffffff",

            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.15,
            shadowRadius: 10,

            elevation: 10,
          },

          tabBarLabelStyle: {
            margin: 0,
            fontSize: 12,
            fontWeight: "400",
            letterSpacing: 1,
          },
        }}
      >
        <Tabs.Screen
          name="index" // Matches the index.tsx file
          options={{
            title: "Today",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="tv" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="category" // Matches the categories.tsx file
          options={{
            title: "Categories",
            tabBarIcon: ({ color }) => (
              <AntDesign name="appstore" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="archive" // Matches the archive.tsx file
          options={{
            title: "Archive",
            tabBarIcon: ({ color }) => (
              <EvilIcons name="archive" size={30} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile" // Matches the profile.tsx file
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    );
}