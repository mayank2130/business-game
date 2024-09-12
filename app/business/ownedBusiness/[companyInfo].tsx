import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import BusinessInfo from "@/components/Business/BusinessInfo";
import { BusinessOptions } from "@/constants/Business";
import { useBusinessContext } from "@/lib/context";
import { SafeAreaView } from "react-native-safe-area-context";

const companyInfo = () => {
  const { companyInfo } = useLocalSearchParams();
  const { balance, updateBalance, updateBusinesses, ownedBusinesses } =
    useBusinessContext();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text>{companyInfo}</Text>
      {/* {ownedBusinesses.map(business => (
        <BusinessItem
          key={business.id}
          business={business}
          balance={balance}
          updateBalance={updateBalance}
          updateBusinesses={updateBusinesses}
          ownedBusinesses={ownedBusinesses}
        />
      ))} */}
    </SafeAreaView>
  );
};

export default companyInfo;

const styles = StyleSheet.create({});
