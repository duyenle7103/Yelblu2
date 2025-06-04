import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { i18n, LocalizationKey } from "@/Localization";

import { RootScreens } from "..";

export const Welcome = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {
  return (
    <View style={styles.container}>
      <Text>{i18n.t(LocalizationKey.WELCOME)}</Text>
      <StatusBar style="auto" />
      <Button onPress={() => props.onNavigate(RootScreens.LOGIN)}>
        {i18n.t(LocalizationKey.START)}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
