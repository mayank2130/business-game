import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CompanyProps } from "./Home";

export const CompanyComponent: React.FC<CompanyProps> = ({
  name,
  type,
  income,
  iconName,
  iconColor,
  status,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.companyOuterContainer}>
    <View style={styles.companyContainer}>
      <View style={[styles.companyIcon, { backgroundColor: iconColor }]}>
        <MaterialCommunityIcons name={iconName} size={24} color="white" />
      </View>
      <View style={styles.companyInfo}>
        <Text style={styles.companyName}>{name}</Text>
        <Text style={styles.companyType}>{type}</Text>
      </View>
      <TouchableOpacity style={styles.arrowButton}>
        <MaterialCommunityIcons name="chevron-right" size={24} color="gray" />
      </TouchableOpacity>
    </View>
    <View style={styles.companyIncome}>
      <Text style={styles.incomeText}>{income}</Text>
      {status && <Text style={styles.statusText}>{status}</Text>}
    </View>
  </TouchableOpacity>
);

export default CompanyComponent;
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
    marginBottom: 16,
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
    marginBottom: 8,
  },
  companyOuterContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "white",
    borderRadius: 10,
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
