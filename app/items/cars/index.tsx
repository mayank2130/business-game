import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { Cars, carsData } from "@/constants/Cars";
import { useBusinessContext } from "@/lib/context";

const CarsCard: React.FC<{ item: Cars }> = ({ item }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose a new vehicle",
      // headerTransparent: true,
    });
  }, []);

  const { balance, buyCars } = useBusinessContext();

  const handleBuy = () => {
    buyCars(item.id);
  };

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        padding: 25,
        paddingBottom: 30,
        paddingTop: 20,
        margin: 15,
        borderRadius: 20,
      }}
    >
      <Image
        source={item.source}
        style={{
          height: 160,
          width: 315,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <View style={{ paddingTop: 10, flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontFamily: "mon-sb",
                width: 210,
                flexWrap: "nowrap",
              }}
            >
              {item.name}
            </Text>
            <Text style={{ fontFamily: "mon", fontSize: 14 }}>
              Price: ${item.price.toLocaleString()}
            </Text>
            <Text style={{ fontFamily: "mon", color: "red", fontSize: 12 }}>
              Maintainace: ${item.maintainance.toLocaleString()}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
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

const CarsList: React.FC = () => {
  const { availableCars } = useBusinessContext();
  const cars = availableCars;

  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarsCard item={item} />}
      />
    </View>
  );
};

export default CarsList;

const styles = StyleSheet.create({
  buyButton: {
    marginLeft: 40,
    width: 80,
    height: 45,
    borderRadius: 10,
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
