import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { fetchBusinesses } from "@/lib/storage";
import { BusinessOptions } from "@/constants/Business";
import CompanyComponent from "./CompanyComponent";

const OwnedBusiness = () => {
  const [businesses, setBusinesses] = useState<BusinessOptions[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchBusinesses();
        console.log("Fetched businesses:", data); // Debugging log
        setBusinesses(data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
        setError("Failed to fetch businesses. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (businesses.length === 0) {
    return (
      <Text style={styles.noBusinessText}>
        You don't own any businesses yet.
      </Text>
    );
  }

  return (
    <FlatList
      data={businesses}
      renderItem={({ item }) => (
        <>
          {/* <View style={styles.businessItem}>
            <Text style={styles.businessName}>{item.name}</Text>
            <Text style={styles.businessPrice}>
              ${item.price.toLocaleString()}
            </Text>
          </View> */}
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
        </>
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
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  noBusinessText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default OwnedBusiness;
