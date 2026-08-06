import React from "react";
import { SafeAreaView, View, Text, Pressable, StyleSheet,} from "react-native";
import { router } from "expo-router";
import appStyle from "../styles/appStyles";

const Dashboard = () => {
  const handleLogout = () => {
    router.replace("/");
  };

  return (
   <SafeAreaView style={appStyle.dashboardContainer}>
  <View style={appStyle.dashboardContent}>

    <Text style={appStyle.dashboardTitle}>
      Clinician Dashboard
    </Text>

    <Text style={appStyle.dashboardSubtitle}>
      Welcome to your clinician workspace.
    </Text>

    <View style={appStyle.dashboardCard}>
      <Text style={appStyle.dashboardCardTitle}>
        Patient Queue
      </Text>

      <Text style={appStyle.dashboardCardText}>
        Your patient queue will appear here.
      </Text>
    </View>

    <View style={appStyle.dashboardCard}>
      <Text style={appStyle.dashboardCardTitle}>
        Patient Chart
      </Text>

      <Text style={appStyle.dashboardCardText}>
        Patient information will appear here.
      </Text>
    </View>

    <View style={appStyle.dashboardCard}>
      <Text style={appStyle.dashboardCardTitle}>
        Orders & Results
      </Text>

      <Text style={appStyle.dashboardCardText}>
        Orders and results will appear here.
      </Text>
    </View>

    <Pressable
      style={appStyle.dashboardLogoutButton}
      onPress={handleLogout}
    >
      <Text style={appStyle.dashboardLogoutText}>
        Logout
      </Text>
    </Pressable>

  </View>
</SafeAreaView>
  );
};


export default Dashboard;