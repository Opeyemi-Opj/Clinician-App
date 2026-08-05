import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet,} from "react-native";
import { router } from "expo-router";

const Dashboard = () => {
  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Clinician Dashboard
        </Text>

        <Text style={styles.subtitle}>
          Welcome to your clinician workspace.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Patient Queue
          </Text>

          <Text style={styles.cardText}>
            Your patient queue will appear here.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Patient Chart
          </Text>

          <Text style={styles.cardText}>
            Patient information will appear here.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Orders & Results
          </Text>

          <Text style={styles.cardText}>
            Orders and results will appear here.
          </Text>
        </View>

        <Pressable
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </Pressable>

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

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 6,
  },

  cardText: {
    color: "#64748B",
    fontSize: 14,
  },

  logoutButton: {
    height: 52,
    backgroundColor: "#DC2626",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default Dashboard;