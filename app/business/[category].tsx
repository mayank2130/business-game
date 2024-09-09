import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  shopPrice,
  factoryPrice,
  constructionPrice,
  armsDealerPrice,
  drugCartelPrice,
  powerPlantPrice,
  oilCompanyPrice,
  techStartupPrice,
  intelligencePrice,
  bankPrice,
  
} from "@/constants/Business";

const BusinessOption = () => {
  const { category } = useLocalSearchParams();

  let businessData:
    | typeof shopPrice
    | typeof factoryPrice
    | typeof constructionPrice;
  let businessName: string;

  switch (category) {
    case "shops":
      businessData = shopPrice;
      businessName = "Shops";
      break;
    case "factories":
      businessData = factoryPrice;
      businessName = "Factories";
      break;
    case "construction":
      businessData = constructionPrice;
      businessName = "Construction Companies";
      break;
    case "arms":
      businessData = armsDealerPrice;
      businessName = "Arms Dealing Company";
      break;
    case "drugs":
      businessData = drugCartelPrice;
      businessName = "Drug Operations";
      break;
    case "power":
      businessData = powerPlantPrice;
      businessName = "Power Plants";
      break;
    case "oil":
      businessData = oilCompanyPrice;
      businessName = "Oil & Gas Companies";
      break;
    case "startup":
      businessData = techStartupPrice;
      businessName = "Tech Ideas";
      break;
    case "bank":
      businessData = bankPrice;
      businessName = "Construction Companies";
      break;
    case "intelligence":
      businessData = intelligencePrice;
      businessName = "Intelligence Companies";
      break;
    default:
      businessData = [];
      businessName = "Unknown";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available {businessName}</Text>
      <View style={styles.listContainer}>
        {businessData.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>Price: ${item.price}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    paddingVertical: 16,
  },
  itemContainer: {
    backgroundColor: "#f4f4f4",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
  },
});

export default BusinessOption;
