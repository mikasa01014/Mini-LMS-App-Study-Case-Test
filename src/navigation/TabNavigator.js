import React, { useRef, useEffect } from "react";
import { View, Animated, TouchableWithoutFeedback, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import CourseListScreen from "../screens/CourseListScreen";
import ProgressScreen from "../screens/ProgressScreen";

const Tab = createBottomTabNavigator();

const CustomTab = ({ state, descriptors ,navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 16,
        left: 16,
        right: 16,
        height: 64,
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",

        // shadow iOS
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },

        // elevation Android
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        //const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabItem
            key={route.key}
            route={route}
            isFocused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

function TabItem({ route, isFocused, onPress }) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: isFocused ? 1.1 : 1,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  let iconName;
  if (route.name === "Course") iconName = "book-outline";
  if (route.name === "Progress") iconName = "stats-chart";

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{
          transform: [{ scale }],
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          paddingVertical: 4,
          borderRadius: 14,
          backgroundColor: isFocused ? "#EEF2FF" : "transparent",
        }}
      >
        <Ionicons
          name={iconName}
          size={22}
          color={isFocused ? "#2563EB" : "#94A3B8"}
        />
        {isFocused ? (
          <Text
            style={{
              fontSize: 11,
              marginTop: 4,
              color: "#2563EB",
              fontWeight: "600",
            }}
          >
            {route.name}
          </Text>
        ) : (
          <></>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      // screenOptions={({ route }) => ({
      //   headerShown: false,
      //   tabBarActiveTintColor: "#2563EB",
      //   tabBarIcon: ({ color, size }) => {
      //     const iconName =
      //       route.name === "Course" ? "book-outline" : "stats-chart";
      //     return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTab {...props} />}
    >
      <Tab.Screen name="Course" component={CourseListScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
    </Tab.Navigator>
  );
}
