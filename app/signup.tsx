import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, Alert,} from "react-native";
import { router } from "expo-router";

const Signup = () => {  ``
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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.logo}>
          Clinician App
        </Text>

        <Text style={styles.title}>
          Create Account
        </Text>

        <Text style={styles.subtitle}>
          Create your clinician account to get started.
        </Text>

        {/* Full Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Full Name
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#94A3B8"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

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
            placeholder="Create a password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            Confirm Password
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            placeholderTextColor="#94A3B8"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Create Account */}
        <Pressable
          style={styles.primaryButton}
          onPress={handleSignUp}
        >
          <Text style={styles.primaryButtonText}>
            Create Account
          </Text>
        </Pressable>

        {/* Sign In */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an account?
          </Text>

          <Pressable onPress={goToSignIn}>
            <Text style={styles.loginLink}>
              {" "}Sign In
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
    marginBottom: 35,
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
    marginBottom: 25,
  },

  inputContainer: {
    marginBottom: 16,
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

  primaryButton: {
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563EB",
    marginTop: 10,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  loginText: {
    fontSize: 15,
    color: "#64748B",
  },

  loginLink: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2563EB",
  },
});

export default Signup;