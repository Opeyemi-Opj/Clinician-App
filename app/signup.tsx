import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, Alert,} from "react-native";

import { router } from "expo-router";
import appStyle from "../styles/appStyles";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      Alert.alert(
        "Missing Information",
        "Please complete all fields."
      );

      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Password Error",
        "Passwords do not match."
      );

      return;
    }

    // Temporary.
    // Later this will call your FastAPI backend.
    Alert.alert(
      "Success",
      "Your account has been created.",
      [
        {
          text: "Continue",
          onPress: () => router.replace("/"),
        },
      ]
    );
  };

  const goToSignIn = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView style={appStyle.signupContainer}>
  <View style={appStyle.signupContent}>

    <Text style={appStyle.signupLogo}>
      Clinician App
    </Text>

    <Text style={appStyle.signupTitle}>
      Create Account
    </Text>

    <Text style={appStyle.signupSubtitle}>
      Create your clinician account to get started.
    </Text>

    <View style={appStyle.signupInputContainer}>
      <Text style={appStyle.signupLabel}>
        Full Name
      </Text>

      <TextInput
        style={appStyle.signupInput}
        placeholder="Enter your full name"
        placeholderTextColor="#94A3B8"
        value={fullName}
        onChangeText={setFullName}
      />
    </View>

    <View style={appStyle.signupInputContainer}>
      <Text style={appStyle.signupLabel}>
        Email
      </Text>

      <TextInput
        style={appStyle.signupInput}
        placeholder="Enter your email"
        placeholderTextColor="#94A3B8"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
    </View>

    <View style={appStyle.signupInputContainer}>
      <Text style={appStyle.signupLabel}>
        Password
      </Text>

      <TextInput
        style={appStyle.signupInput}
        placeholder="Create a password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>

    <View style={appStyle.signupInputContainer}>
      <Text style={appStyle.signupLabel}>
        Confirm Password
      </Text>

      <TextInput
        style={appStyle.signupInput}
        placeholder="Confirm your password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
    </View>

    <Pressable
      style={appStyle.signupPrimaryButton}
      onPress={handleSignUp}
    >
      <Text style={appStyle.signupPrimaryButtonText}>
        Create Account
      </Text>
    </Pressable>

    <View style={appStyle.signupLoginContainer}>
      <Text style={appStyle.signupLoginText}>
        Already have an account?
      </Text>

      <Pressable onPress={goToSignIn}>
        <Text style={appStyle.signupLoginLink}>
          {" "}Sign In
        </Text>
      </Pressable>
    </View>

  </View>
</SafeAreaView>
  );
};

export default Signup;

