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
          height: 120,
          width: 300,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <View style={{ paddingTop: 10 }}>
        <Text style={{ fontSize: 17, fontFamily: "mon-sb" }}>
          Mclaren Formula 1 Car
        </Text>
        <Text style={{ fontFamily: "mon", fontSize: 14 }}>
          Price: $ {item.price.toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleBuy}
        disabled={balance < item.price}
        style={styles.buyButton}
      >
        <Text style={styles.innerTxt}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const CarsList: React.FC = () => {
  const cars = carsData;

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
