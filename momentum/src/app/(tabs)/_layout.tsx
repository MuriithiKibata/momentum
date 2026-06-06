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
        tabBarInactiveTintColor: colors.gray,
        
        tabBarStyle: {
          alignSelf: "center",
          bottom: 20,
          borderRadius: 40,
          height: 65,
          width: "90%",
          backgroundColor: "#ffffff",
          shadowColor: "#000000",
          alignItems: "center",
          justifyContent: "center",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          elevation: 10,
        },
        tabBarItemStyle: {
        }, 

        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 12,
          fontWeight: "600",
          fontFamily: "Inter"
        },
      }}
    >
      <Tabs.Screen
        name="index" // Automatically connects to index.tsx
        options={{
          title: "Today",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="tv" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category" // Automatically connects to category.tsx
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="archive" // Automatically connects to archive.tsx
        options={{
          title: "Archive",
          tabBarIcon: ({ color }) => (
            <EvilIcons name="archive" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile" // Automatically connects to profile.tsx
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="new_task"
        options={{
          href: null,
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
