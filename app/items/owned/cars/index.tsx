import { Entypo } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { useBusinessContext } from "@/lib/context";
import { Cars } from "@/constants/Cars";
import { useNavigation } from "expo-router";

const OwnedCarsCard: React.FC<{ item: Cars }> = ({ item }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Your Cars",
    });
  }, []);

  const { sellCars } = useBusinessContext();

  return (
    <View style={styles.card}>
      <Image source={item.source} style={styles.cardImage} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.cardDetails}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "mon-sb",
              width: 210,
              paddingLeft: 10,
              paddingBottom: 3,
              flexWrap: "nowrap",
            }}
          >
            {item.name}
          </Text>
          <Text style={styles.price}>
            Value: $ {(item.price * 0.7).toLocaleString()}
          </Text>
          <Text
            style={[
              styles.price,
              { fontSize: 15, fontFamily: "mon", color: "red" },
            ]}
          >
            Maintance: $ {item.maintainance.toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => sellCars(item.id)}
          style={{
            backgroundColor: "#03C03C",
            padding: 10,
            paddingHorizontal: 25,
            marginRight: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontFamily: "mon-sb" }}>Sell</Text>
        </TouchableOpacity>
      </View>
      <Pressable
        onPress={() => sellCars(item.id)}
        style={{
          padding: 2,
          alignItems: "flex-end",
          marginRight: 10,
        }}
      >
        <Text
          style={{
            color: "blue",
            fontFamily: "mon-sb",
            textDecorationLine: "underline",
          }}
        >
          Set as Primary
        </Text>
      </Pressable>
    </View>
  );
};

const OwnedCarsList: React.FC = () => {
  const { ownedCars } = useBusinessContext();

  const properties = ownedCars.length <= 0;

  return (
    <View style={{ flex: 1, alignItems: "center", paddingVertical: 10 }}>
      {properties ? (
        <Text>You don't own any properties!</Text>
      ) : (
        <FlatList
          data={ownedCars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OwnedCarsCard item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 310,
    borderRadius: 10,
    marginVertical: 10,
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
    fontSize: 16,
    fontFamily: "mon-sb",
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

export default OwnedCarsList;
