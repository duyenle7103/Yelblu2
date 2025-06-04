import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StatusBar } from "react-native";

import { RootScreens } from "@/Screens";
import { LoginContainer } from "@/Screens/Auth";
import {RecipeSearchContainer} from "@/Screens/RecipeSearch";
import { WelcomeContainer } from "@/Screens/Welcome";

import { MainNavigator } from "./Main";

export type RootStackParamList = {
  [RootScreens.MAIN]: undefined;
  [RootScreens.WELCOME]: undefined;
  [RootScreens.LOGIN]: undefined;
  // [RootScreens.REGISTER]: undefined;
  // [RootScreens.FORGOT_PASSWORD]: undefined;
  [RootScreens.RECIPE_SEARCH]: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RootScreens.WELCOME}>
        <RootStack.Screen
          name={RootScreens.WELCOME}
          component={WelcomeContainer}
        />
        <RootStack.Screen
          name={RootScreens.LOGIN}
          component={LoginContainer}
        />
        <RootStack.Screen
          name={RootScreens.MAIN}
          component={MainNavigator}
          options={{}}
        />
        <RootStack.Screen
          name={RootScreens.RECIPE_SEARCH}
          component={RecipeSearchContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export { ApplicationNavigator };
