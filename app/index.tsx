import React, { useState } from "react";
import {SafeAreaView, View, Text, TextInput, Pressable, Alert,} from "react-native";

import { router } from "expo-router";
import appStyle from "../styles/appStyles";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter your email and password."
      );

      return;
    }

    // Temporary navigation.
    // We will replace this with real API authentication.
    router.replace("/dashboard");
  };

  const goToSignUp = () => {
    router.push("/signup");
  };

  return (
    <SafeAreaView style={appStyle.indexContainer}>
  <View style={appStyle.indexContent}>

    <Text style={appStyle.indexLogo}>
      Clinician App
    </Text>

    <Text style={appStyle.indexTitle}>
      Welcome Back
    </Text>

    <Text style={appStyle.indexSubtitle}>
      Sign in to continue to your clinician account.
    </Text>

    <View style={appStyle.indexInputContainer}>
      <Text style={appStyle.indexLabel}>
        Email
      </Text>

      <TextInput
        style={appStyle.indexInput}
        placeholder="Enter your email"
        placeholderTextColor="#94A3B8"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
    </View>

    <View style={appStyle.indexInputContainer}>
      <Text style={appStyle.indexLabel}>
        Password
      </Text>

      <TextInput
        style={appStyle.indexInput}
        placeholder="Enter your password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>

    <Pressable
      style={appStyle.indexForgotButton}
      onPress={() => {
        Alert.alert(
          "Forgot Password",
          "Password recovery will be implemented later."
        );
      }}
    >
      <Text style={appStyle.indexForgotText}>
        Forgot Password?
      </Text>
    </Pressable>

    <Pressable
      style={appStyle.indexPrimaryButton}
      onPress={handleSignIn}
    >
      <Text style={appStyle.indexPrimaryButtonText}>
        Sign In
      </Text>
    </Pressable>

    <View style={appStyle.indexSignupContainer}>
      <Text style={appStyle.indexSignupText}>
        Don't have an account?
      </Text>

      <Pressable onPress={goToSignUp}>
        <Text style={appStyle.indexSignupLink}>
          {" "}Sign Up
        </Text>
      </Pressable>
    </View>

  </View>
</SafeAreaView>
  );
};

export default Index;
