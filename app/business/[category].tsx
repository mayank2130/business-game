import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const BusinessOption = () => {
  const { category } = useLocalSearchParams();
  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default BusinessOption;

const styles = StyleSheet.create({});
