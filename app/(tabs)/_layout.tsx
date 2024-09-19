import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
        },
        tabBarStyle: { paddingBottom: 7, height: 56, gap: 1 },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="investing"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarLabel: "Investing",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="business"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarLabel: "Business",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="building-columns" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarLabel: "Earnings",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-check-dollar" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          tabBarLabel: "Items",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="car-sport" size={24} color="black" />
          ),
          headerTitle: "Buy Yourself Everything",
          headerTitleAlign: "left",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
