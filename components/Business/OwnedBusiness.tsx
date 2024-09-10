import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useBusinessContext } from "@/lib/context";
import CompanyComponent from "./CompanyComponent";

const OwnedBusiness = () => {
  const { ownedBusinesses } = useBusinessContext();

  if (ownedBusinesses.length === 0) {
    return (
      <Text style={styles.noBusinessText}>
        You don't own any businesses yet.
      </Text>
    );
  }

  return (
    <FlatList
      data={ownedBusinesses}
      renderItem={({ item }) => (
        <View>
          <CompanyComponent
            name={item.name}
            type="Car dealership"
            income="$ 0.00"
            iconName="car"
            iconColor="blue"
            status="Pending"
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
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
