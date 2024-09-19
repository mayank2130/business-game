import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

const Cars = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Choose a new vehicle",
      // headerTransparent: true,
    });
  }, []);

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
        source={require("../../../assets/images/image.png")}
        style={{
          height: 120,
          width: 300,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <View>
        <Text style={{ fontSize: 17, fontFamily: "mon-sb" }}>
          Mclaren Formula 1 Car
        </Text>
        <Text style={{ fontFamily: "mon", fontSize: 14 }}>Price from $ 10,000,000</Text>
      </View>
    </View>
  );
};

export default Cars;

const styles = StyleSheet.create({});
