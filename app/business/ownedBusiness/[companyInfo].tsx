import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import BusinessInfo from "@/components/Business/BusinessInfo";

const companyInfo = () => {
  const { companyInfo } = useLocalSearchParams();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  return (
    <View>
      <BusinessInfo 
        // incomePerHour={102.06}
        // stage={1}
        // requiredInvestment={1469.7}
        // expectedProfitGrowth={35.72}
        // balance="22,674,053,319,711,100.00"
      />
    </View>
  );
};

export default companyInfo;

const styles = StyleSheet.create({});
