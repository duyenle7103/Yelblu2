import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";

import { RootStackParamList } from "@/Navigation";
import { apiLogin } from "@/Services/auth/login";
import { loginSuccess } from "@/Store/reducers/auth"; // path chính xác tới auth slice

import { RootScreens } from "..";
import { Login } from "./Login";

type LoginScreenNavigatorProps = NativeStackScreenProps<
    RootStackParamList,
    RootScreens.LOGIN
>;

export const LoginContainer = ({ navigation }: LoginScreenNavigatorProps) => {
    const dispatch = useDispatch();

    const [identity, setIdentity] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const onLogin = async () => {
        if (!identity || !password) {
            Alert.alert("Error", "Please fill in all required fields.");
            return;
        }

        const response = await apiLogin(identity, password);

        if (!response.success) {
            Alert.alert("Login Failed", response.message);
            return;
        }

        // Dispatch login success action to Redux store
        dispatch(
            loginSuccess({
                accessToken: response.accessToken,
                refreshToken: response.refreshToken,
                user: response.userInfo,
            })
        );

        // Navigate to main screen after successful login
        navigation.navigate(RootScreens.RECIPE_SEARCH);
    };

    const onNavigateToRegister = () => {
        // navigation.navigate(RootScreens.REGISTER);
    };

    const onNavigateToForgotPassword = () => {
        // navigation.navigate(RootScreens.FORGOT_PASSWORD);
    };

    return (
        <Login
            identity={identity}
            password={password}
            remember={remember}
            setIdentity={setIdentity}
            setPassword={setPassword}
            setRemember={setRemember}
            onLogin={onLogin}
            onNavigateToRegister={onNavigateToRegister}
            onNavigateToForgotPassword={onNavigateToForgotPassword}
        />
    );
};
