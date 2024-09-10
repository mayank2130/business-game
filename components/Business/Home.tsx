import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { fetchBusinesses } from "@/lib/storage";
import OwnedBusiness from "./OwnedBusiness";
import { useBusinessContext } from "@/lib/context";

type MaterialCommunityIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export interface CompanyProps {
  name: string;
  type: string;
  income: string;
  iconName: MaterialCommunityIconName;
  iconColor: string;
  status?: string;
  onPress:() => void;
}

const HomeScreen = () => {
  const { balance } = useBusinessContext();

  const router = useRouter();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.incomeCard}>
          <Text style={styles.incomeAmount}>$ {balance.toLocaleString()}</Text>
          <Text style={styles.incomeDescription}>Total income per hour</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push("/createBusiness")}
          >
            <Text style={styles.startButtonText}>Start a business</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mergeButton}>
            <Text style={styles.mergeButtonText}>Business mergers</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>My companies</Text>
        <OwnedBusiness />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  incomeCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  incomeAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  incomeDescription: {
    color: "green",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 18,
  },
  startButton: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginRight: 8,
  },
  startButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  mergeButton: {
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginLeft: 8,
  },
  mergeButtonText: {
    color: "#007AFF",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  companyOuterContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  companyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  companyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontWeight: "bold",
  },
  companyType: {
    color: "gray",
  },
  companyIncome: {
    alignItems: "flex-end",
    flexDirection: "row",
    columnGap: 22,
  },
  incomeText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  statusText: {
    color: "orange",
  },
  arrowButton: {
    marginLeft: 8,
  },
  arrowText: {
    fontSize: 18,
    color: "gray",
  },
});

export default HomeScreen;
