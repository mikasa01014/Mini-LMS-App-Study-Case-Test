import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";
import { View, ActivityIndicator, TouchableOpacity } from "react-native";

import LoginScreen from "../screens/LoginScreen";
import CourseListScreen from "../screens/CourseListScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen";
import TabNavigator from "./TabNavigator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../theme/colors";

const StackNavigation = createStackNavigator();
const StackNavigation2 = createStackNavigator();

function MainStack() {
  return (
    <StackNavigation.Navigator>
      <StackNavigation.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </StackNavigation.Navigator>
  );
}

function RootStack() {
   return (
     <StackNavigation2.Navigator>
       <StackNavigation2.Group navigationKey="Main">
         <StackNavigation2.Screen
           name="Home"
           component={MainStack}
           options={{ headerShown: false }}
         />
       </StackNavigation2.Group>
       <StackNavigation2.Group
         navigationKey="Detail"
         screenOptions={{
           presentation: "modal",
           
         }}
       >
         <StackNavigation2.Screen
           name="CourseDetail"
           component={CourseDetailScreen}
           options={({ navigation }) => ({
             headerLeft: () => (
               <TouchableOpacity
                 style={{ marginLeft: 10 }}
                 onPress={() => navigation.goBack()}
               >
                 <Ionicons name="close" size={40} color={"red"} />
               </TouchableOpacity>
             ),
             title: "",
             headerStyle: {
               backgroundColor: "#1E3A8A",
             },
             headerTitleStyle: { color: colors.card },
             //  headerShown: false
           })}
         />
       </StackNavigation2.Group>
     </StackNavigation2.Navigator>
   );
}

const AppNavigator = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    );
  }


  return (
    <NavigationContainer>
      {user ? (
        <RootStack />
      ) : (
        <StackNavigation.Navigator>
          <StackNavigation.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </StackNavigation.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
