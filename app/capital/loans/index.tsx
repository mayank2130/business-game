import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import LoanDisplay from "@/components/Capital/LoanDisplay";
import { useNavigation } from "expo-router";

const PayBackLoans = () => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: false,
    });
  }, []);
  return <LoanDisplay />;
};

export default PayBackLoans;

const styles = StyleSheet.create({});
