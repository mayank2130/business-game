import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

const companyInfo = () => {
  const { companyInfo } = useLocalSearchParams();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: false,
    });
  }, []);

  return (
    <View>
      <Text>{companyInfo}</Text>
    </View>
  );
};

export default companyInfo;

const styles = StyleSheet.create({});
