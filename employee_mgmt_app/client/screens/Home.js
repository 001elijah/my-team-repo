import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import HistoryScreen from "./HistoryScreen";
import MessagesScreen from "./MessagesScreen";
import HomeIcon from "../assets/icons/HomeIcon";
import BookIcon from "../assets/icons/BookIcon";
import MessageIcon from "../assets/icons/MessageIcon";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#858EA9",
        tabBarStyle: {
          height: 84,
          paddingTop: 27,
          alignItems: "center",
          justifyContent: "space-around",
          border: "none",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#FFF",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`w-12 h-12 rounded-full ${
                focused ? "bg-[#2578CC]" : "bg-[#FFF]"
              } items-center justify-center`}
            >
              <HomeIcon fill={color} />
            </View>
          ),
          title: "Home",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`w-12 h-12 rounded-full ${
                focused ? "bg-[#2578CC]" : "bg-[#FFF]"
              } items-center justify-center`}
            >
              <BookIcon fill={color} />
            </View>
          ),
          title: "History",
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`w-12 h-12 rounded-full ${
                focused ? "bg-[#2578CC]" : "bg-[#FFF]"
              } items-center justify-center`}
            >
              <MessageIcon fill={color} />
            </View>
          ),
          title: "Messages",
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;