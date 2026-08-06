import { StyleSheet } from "react-native";

const appStyle = StyleSheet.create({


  // INDEX STYLE
 
  indexContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  indexContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  indexLogo: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    color: "#0F172A",
  },

  indexTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  indexSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#64748B",
    marginBottom: 30,
  },

  indexInputContainer: {
    marginBottom: 18,
  },

  indexLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 8,
  },

  indexInput: {
    height: 52,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
  },

  indexForgotButton: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },

  indexForgotText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },

  indexPrimaryButton: {
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563EB",
  },

  indexPrimaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  indexSignupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  indexSignupText: {
    fontSize: 15,
    color: "#64748B",
  },

  indexSignupLink: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2563EB",
  },


   // SIGNUP STYLE
 
  signupContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  signupContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  signupLogo: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 35,
    color: "#0F172A",
  },

  signupTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  signupSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#64748B",
    marginBottom: 25,
  },

  signupInputContainer: {
    marginBottom: 16,
  },

  signupLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 8,
  },

  signupInput: {
    height: 52,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0F172A",
    backgroundColor: "#FFFFFF",
  },

  signupPrimaryButton: {
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563EB",
    marginTop: 10,
  },

  signupPrimaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  signupLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  signupLoginText: {
    fontSize: 15,
    color: "#64748B",
  },

  signupLoginLink: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2563EB",
  },


  // DASHBOARD STYLE
  
  dashboardContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  dashboardContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  dashboardTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },

  dashboardSubtitle: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 30,
  },

  dashboardCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  dashboardCardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 6,
  },

  dashboardCardText: {
    color: "#64748B",
    fontSize: 14,
  },

  dashboardLogoutButton: {
    height: 52,
    backgroundColor: "#DC2626",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  dashboardLogoutText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default appStyle;