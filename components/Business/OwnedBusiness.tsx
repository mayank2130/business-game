import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useBusinessContext } from "@/lib/context";
import CompanyComponent from "./CompanyComponent";
import { useRouter } from "expo-router";

const OwnedBusiness = () => {
  const { ownedBusinesses, getCurrentIncome } = useBusinessContext();
  const router = useRouter();
  if (ownedBusinesses.length === 0) {
    return (
      <Text style={styles.noBusinessText}>
        You don't own any businesses yet.
      </Text>
    );
  }

  return (
    <ScrollView style={{ marginBottom: 40 }}>
      {ownedBusinesses.map((item) => (
        <View key={`${item.id}-${item.name}-${item.value}`}>
          <CompanyComponent
            name={item.name}
            type={item.value}
            income={`$ ${getCurrentIncome(item.id).toLocaleString()}`}
            iconName={item.icon ? item.icon : "office-building"}
            iconColor="blue"
            status="Pending"
            onPress={() =>
              router.push({
                pathname: "/business/ownedBusiness/[id]",
                params: { data: JSON.stringify(item) },
              })
            }
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  businessItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  businessName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  businessPrice: {
    fontSize: 14,
    color: "#666",
  },
  noBusinessText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default OwnedBusiness;
