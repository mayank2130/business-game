import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useBusinessContext } from "@/lib/context";

const App = () => {

  const { balance, updateBalance } = useBusinessContext();

  return (
    <>
      <View style={{ backgroundColor: "#ffffff" }}>
        <View style={{ height: 280 }}>
          <View style={[styles.containerInOne]}>
            <View style={{ flexDirection: "column" }}>
              <View style={styles.logoContainer}>
                <Image
                  source={require("../../assets/card.png")}
                  style={styles.logo}
                />
                <Text style={styles.txtStyle}>*** 7439</Text>
                <View style={styles.expTxtStyle}>
                  <Text style={styles.txtStyle}>06/16</Text>
                </View>
              </View>
              <Text style={styles.headingTxt}>Balance:</Text>
              <Text style={[styles.balanceTxt]}> $ {balance}</Text>
            </View>
          </View>
          <View style={styles.containerInTwo}>
            <Text style={[styles.footerTxt]}>$ 10.0</Text>
            <Text style={[styles.footerNextTxt]}>per click</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => updateBalance(2000000)}
        style={[styles.containerTwo, { backgroundColor: "#fff" }]}
      >
        <FontAwesome name="hand-o-up" size={75} color="black" />
        <Text style={{ fontFamily: "mon", marginTop: 5 }}>
          Click in this area to make money
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
  },
  footerNextTxt: {
    fontFamily: "mon",
    color: "#ffffff",
  },
  footerTxt: {
    fontFamily: "mon-b",
    color: "#ffffff",
    letterSpacing: 2,
    marginLeft: 15,
    fontSize: 22,
  },
  headingTxt: {
    fontFamily: "mon",
    color: "#fff",
    letterSpacing: 1,
    marginLeft: 25,
    paddingBottom: 10,
    fontSize: 15,
    justifyContent: "flex-end",
  },
  txtStyle: {
    fontFamily: "mon",
    fontSize: 20,
    paddingLeft: 20,
    color: "#848482",
  },
  expTxtStyle: {
    fontFamily: "mon",
    fontSize: 20,
    paddingLeft: 140,
    justifyContent: "space-between",
    color: "#848482",
  },
  balanceTxt: {
    fontFamily: "mon-b",
    color: "#fff",
    letterSpacing: 4,
    marginLeft: 10,
    fontSize: 22,
    flexShrink: 1,
  },
  logoContainer: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 25,
  },
  logo: {
    height: 20,
    width: 22,
  },
  containerInOne: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#343434",
    marginTop: 50,
    margin: 10,
    borderRadius: 25,
    flex: 1, // Add this line to set flex to 0
  },
  containerInTwo: {
    flexDirection: "row",
    alignItems: "center",
    height: 60, // Adjust the height as needed
    opacity: 0.4,
    margin: 10,
    borderRadius: 25,
    gap: 8,
    backgroundColor: "#F5F5F5",
    flex: 0, // Add this line to set flex to 0
  },
  containerTwo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
});

export default App;
