import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import Colors from "../../constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerTitle: "Consulting Ĉap",
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
        },

        headerRight: () => (
          <Link href="../(modals)/login" asChild>
            <Pressable>
              {({ pressed }) => (
                <Ionicons
                  name="log-in-outline"
                  size={28}
                  color={Colors.dark}
                  style={{
                    alignItems: "center",
                    marginRight: 15,
                    opacity: pressed ? 0.5 : 1,
                  }}
                />
              )}
            </Pressable>
          </Link>
        ),
        tabBarActiveTintColor: Colors.paleGreen,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor: Colors.dark, //3
        },
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarLabelStyle: {
            fontSize: 14,
          }, /// This is the text that appears on the tab
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarLabel: "My Network",
          tabBarLabelStyle: {
            fontSize: 14,
          }, // This is the text that appears on the tab
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 14,
          }, // This is the text that appears on the tab
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarLabelStyle: {
            fontSize: 14,
          }, // This is the text that appears on the tab
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: "Account",
          tabBarLabelStyle: {
            fontSize: 14,
          }, // This is the text that appears on the tab
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};
const styles = StyleSheet.create({});

export default Layout;
