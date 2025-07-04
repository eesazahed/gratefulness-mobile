import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import HapticTab from "@/components/HapticTab";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useAuth } from "@/context/AuthContext";

const TabLayout = () => {
  const { token } = useAuth();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            height: 100,
            display: token ? "flex" : "none",
          },
          default: {
            height: 100,
          },
        }),
        tabBarLabelPosition: "below-icon",
        tabBarIconStyle: {
          marginTop: 15,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={28} />
          ),
          href: token ? "/(tabs)" : null,
        }}
      />
      <Tabs.Screen
        name="grateful"
        options={{
          title: "Grateful",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="create" color={color} size={28} />
          ),
          href: token ? "/(tabs)/grateful" : null,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" color={color} size={28} />
          ),
          href: token ? "/(tabs)/calendar" : null,
        }}
      />
      <Tabs.Screen
        name="entries"
        options={{
          title: "Entries",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-books" color={color} size={28} />
          ),
          href: token ? "/(tabs)/entries" : null,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={28} />
          ),
          href: token ? "/(tabs)/settings" : null,
        }}
      />
      <Tabs.Screen
        name="monthlysummary"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
