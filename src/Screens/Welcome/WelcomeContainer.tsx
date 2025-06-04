import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { RootStackParamList } from "@/Navigation";

import { RootScreens } from "..";
import { Welcome } from "./Welcome";

type WelcomeScreenNavigatorProps = NativeStackScreenProps<
  RootStackParamList,
  RootScreens.WELCOME
>;

export const WelcomeContainer = ({
  navigation,
}: WelcomeScreenNavigatorProps) => {
  const onNavigate = (screen: RootScreens) => {
    navigation.navigate(screen);
  };

  return <Welcome onNavigate={onNavigate} />;
};
