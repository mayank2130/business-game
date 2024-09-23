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
import { personalPropertyData } from "@/constants/Property";

import type { Property } from "@/constants/Property";
import { useBusinessContext } from "@/lib/context";

const PropertyCard: React.FC<{ item: Property }> = ({ item }) => {
  const { balance, buyProperty } = useBusinessContext();

  const handleBuy = () => {
    buyProperty(item.id);
  };

  return (
    <View style={styles.card}>
      <Image source={item.source} style={styles.cardImage} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.cardDetails}>
          <Text style={styles.price}>$ {item.price.toLocaleString()}</Text>
          <Text style={[styles.price, { fontSize: 16, fontFamily: "mon-sb", color:"green" }]}>
            Rent: $ {item.rentalIncome.toLocaleString()}
          </Text>
          <Text style={[styles.price, { fontSize: 14, fontFamily: "mon-sb", color:"red", marginBottom:2 }]}>
            Maintainance: $ {item.maintainance.toLocaleString()}
          </Text>
          <View style={styles.locationContainer}>
            <Entypo name="location" size={16} color="black" />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleBuy}
            disabled={balance < item.price}
            style={styles.buyButton}
          >
            <Text style={styles.innerTxt}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PropertyList: React.FC = () => {

  const { ownedProperties } = useBusinessContext();

  const availableProperties = personalPropertyData.filter(
    property => !ownedProperties.some(ownedProperty => ownedProperty.id === property.id)
  );

  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
      <FlatList
        data={availableProperties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 330,
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
    fontSize: 18,
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
    fontSize: 12,
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
