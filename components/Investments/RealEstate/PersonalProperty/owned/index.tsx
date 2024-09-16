import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import type { Property } from "@/constants/Property";
import { useBusinessContext } from "@/lib/context";

const PropertyCard: React.FC<{ item: Property }> = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.source} style={styles.cardImage} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.cardDetails}>
          <Text style={styles.price}>$ {item.price.toLocaleString()}</Text>
          <Text style={styles.price}>Rent: ${item.rentalIncome}/hour</Text>
          <View style={styles.locationContainer}>
            <Entypo name="location" size={16} color="black" />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

const PropertyList: React.FC = () => {
  const { ownedProperties } = useBusinessContext();

  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
      <FlatList
        data={ownedProperties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 310,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    width: 350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardDetails: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  price: {
    fontFamily: "mon-sb",
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 3,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  location: {
    fontFamily: "mon",
    fontSize: 13,
    letterSpacing: 1,
    marginLeft: 5,
  },
  buyButton: {
    margin: 20,
    width: 100,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#0070FF",
    justifyContent: "center",
    alignItems: "center",
  },
  innerTxt: {
    color: "white",
    fontFamily: "mon-sb",
    fontSize: 16,
  },
});

export default PropertyList;
