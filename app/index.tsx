import React, { useState } from "react";
import { SafeAreaView, View,Text, TextInput, Pressable, StyleSheet, Alert,} from "react-native";
import { router } from "expo-router";

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>
          Clinician App
        </Text>

        <Text style={styles.title}>
          Welcome Back
        </Text>

        <Text style={styles.subtitle}>
          Sign in to continue to your clinician account.
        </Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Email
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Forgot Password */}
        <Pressable
          style={styles.forgotButton}
          onPress={() => {
            Alert.alert(
              "Forgot Password",
              "Password recovery will be implemented later."
            );
          }}
        >
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </Pressable>

        {/* Sign In Button */}
        <Pressable
          style={styles.primaryButton}
          onPress={handleSignIn}
        >
          <Text style={styles.primaryButtonText}>
            Sign In
          </Text>
        </Pressable>

        {/* Sign Up */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>
            Don't have an account?
          </Text>

          <Pressable onPress={goToSignUp}>
            <Text style={styles.signupLink}>
              {" "}Sign Up
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  logo: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    color: "#0F172A",
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#64748B",
    marginBottom: 30,
  },

  inputContainer: {
    marginBottom: 18,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
  },

  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },

  forgotText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },

  primaryButton: {
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563EB",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  signupText: {
    fontSize: 15,
    color: "#64748B",
  },

  signupLink: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2563EB",
  },
});

export default Index;