// import { StyleSheet, Text, View } from "react-native";
// import React, { useLayoutEffect } from "react";
// import { useLocalSearchParams, useNavigation } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";

// const CompanyInfo = () => {
//   const params = useLocalSearchParams();
//   const navigation = useNavigation();

//   // Parse the received data
//   const businessData = params.data ? JSON.parse(params.data as string) : null;

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: businessData?.name || "Business Details",
//       headerTransparent: false,
//     });
//   }, [businessData?.name]);

//   if (!businessData) {
//     return (
//       <SafeAreaView>
//         <Text>Error: Could not load business information.</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView>
//       <Text>Business Name: {businessData.name}</Text>
//       <Text>Business Type: {businessData.levels[0].growth || "N/A"}</Text>
//       <Text>Income: {businessData.value || "N/A"}</Text>
//       <Text>Status: {businessData.status || "N/A"}</Text>
//       {/* Add more details as needed */}
//     </SafeAreaView>
//   );
// };

// export default CompanyInfo;

import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { BusinessOptions } from "@/constants/Business";

const CompanyInfo: React.FC = () => {
  const params = useLocalSearchParams();

  const businessData: BusinessOptions = params.data
    ? JSON.parse(params.data as string)
    : null;

  if (!businessData) {
    return (
      <SafeAreaView>
        <Text>Error: Could not load business information.</Text>
      </SafeAreaView>
    );
  }

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const router = useRouter();

  return (
    <>
      <LinearGradient
        colors={["rgb(34, 197, 94)", "rgb(74, 222, 128)", "rgb(187, 247, 208)"]}
        style={{ padding: 20, paddingBottom: 24, paddingTop: 16 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          {/* <Ionicons name="basket-outline" size={24} color="black" /> */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="settings-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.incomeCard}>
          <Text style={styles.incomeAmount}>
            $ {businessData.levels[0].totalIncome.toLocaleString()}
          </Text>
          <Text style={styles.incomeLabel}>Income per hour</Text>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Stage</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.categoryLabel}>{businessData.value}</Text>
            <Text style={styles.categorySubLabel}>Category</Text>
          </View>
        </View>

        <View style={styles.salesOutletCard}>
          <Ionicons name="storefront-outline" size={24} color="black" />
          <Text style={styles.salesOutletTitle}>
            Opening of new sales outlets
          </Text>
          <Text style={styles.investmentAmount}>
            $ {businessData.levels[0].price.toLocaleString()}
          </Text>
          <Text style={styles.investmentLabel}>Required Investments</Text>
          <Text style={styles.profitGrowth}>
            ↑ $ {businessData.levels[0].growth.toLocaleString()}
          </Text>
          <Text style={styles.profitGrowthLabel}>Expected profit growth</Text>
        </View>

        <TouchableOpacity style={styles.openButton}>
          <Text style={styles.openButtonText}>Open new outlets</Text>
        </TouchableOpacity>

        {/* <Text style={styles.balanceText}>
          Balance: $ 22,674,053,319,711,100.00
        </Text> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    marginTop: 30,
  },
  incomeCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  incomeAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  incomeLabel: {
    color: "gray",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginRight: 10,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    color: "gray",
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categorySubLabel: {
    color: "gray",
  },
  salesOutletCard: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  salesOutletTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  investmentAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  investmentLabel: {
    color: "gray",
    marginBottom: 10,
  },
  profitGrowth: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  profitGrowthLabel: {
    color: "gray",
  },
  openButton: {
    backgroundColor: "#32CD32",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceText: {
    color: "white",
    textAlign: "center",
    marginTop: 10,
  },
});

export default CompanyInfo;
