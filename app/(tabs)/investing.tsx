import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import MyTabs from "../TabsThree";

const business = () => {
  return (
    <>
      <View style={{ backgroundColor: "#fff" }}>
        <Text style={[styles.headingTextTwo, { marginTop: 40 }]}>
          Business{" "}
        </Text>
      </View>
      {/* <MyTabs /> */}
    </>
  );
};

const styles = StyleSheet.create({
  headingTextTwo: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginBottom: 10,
  },
});

export default business;
