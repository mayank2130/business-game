import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const CompanyInfo = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  // Parse the received data
  const businessData = params.data ? JSON.parse(params.data as string) : null;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: businessData?.name || "Business Details",
      headerTransparent: false,
    });
  }, [businessData?.name]);

  if (!businessData) {
    return (
      <SafeAreaView>
        <Text>Error: Could not load business information.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <Text>Business Name: {businessData.name}</Text>
      <Text>Business Type: {businessData.type || "N/A"}</Text>
      <Text>Income: {businessData.income || "N/A"}</Text>
      <Text>Status: {businessData.status || "N/A"}</Text>
      {/* Add more details as needed */}
    </SafeAreaView>
  );
};

export default CompanyInfo;