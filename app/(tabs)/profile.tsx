import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headingText}>Profile</Text>
      </View>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => router.push("/capital/loans")}
      >
        <Text style={styles.openButtonText}>Pay Back Loans</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => router.push("/capital/loans")}
      >
        <Text style={styles.openButtonText}>Handle Lawsuits</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => router.push("/capital/loans")}
      >
        <Text style={styles.openButtonText}>Central Taxes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => router.push("/capital/loans")}
      >
        <Text style={styles.openButtonText}>Business Lisences</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  openButton: {
    backgroundColor: "#32CD32",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: "center",
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
