import * as Localization from "expo-localization";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Sentry from "@/Config/sentry";
import { i18n, Language } from "@/Localization";
import { persistor, store } from "@/Store";

import { ApplicationNavigator } from "./Navigation";


i18n.locale = Localization.getLocales()[0].languageTag;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}

export default Sentry.wrap(App);