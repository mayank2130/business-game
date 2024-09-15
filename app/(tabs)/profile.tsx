import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import LoanDisplay from "@/components/Capital/LoanDisplay"; // Adjust the import path as necessary

const Profile = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headingText}>Profile</Text>
      </View>
      <LoanDisplay />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingBottom: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});

export default Profile;