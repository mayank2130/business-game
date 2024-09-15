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


import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { BusinessOptions, OptionLevels } from "@/constants/Business";
import { useBusinessContext } from "@/lib/context";

const CompanyInfo: React.FC = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const router = useRouter();
  const { balance, ownedBusinesses, increaseBusinessLevel, getCurrentIncome } =
    useBusinessContext();

  const [business, setBusiness] = useState<BusinessOptions | null>(null);

  useEffect(() => {
    if (params.data) {
      try {
        const parsedBusiness: BusinessOptions = JSON.parse(
          params.data as string
        );
        setBusiness(parsedBusiness);
      } catch (error) {
        console.error("Error parsing business data:", error);
      }
    }
  }, [params.data]);

  // New useEffect to update business data when ownedBusinesses changes
  useEffect(() => {
    if (business) {
      const updatedBusiness = ownedBusinesses.find(b => b.id === business.id);
      if (updatedBusiness) {
        setBusiness(updatedBusiness);
      }
    }
  }, [ownedBusinesses, business]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  if (!business) {
    return (
      <SafeAreaView>
        <Text>Error: Could not load business information.</Text>
      </SafeAreaView>
    );
  }

  const currentIncome = getCurrentIncome(business.id);
  const currentLevel = business.currentLevel || 1;
  const nextLevelData: OptionLevels | undefined = business.levels[currentLevel];

  const handleIncreaseLevel = async () => {
    await increaseBusinessLevel(business.id);
    // The business state will be updated automatically by the useEffect hook
  };

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
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="settings-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.incomeCard}>
          <Text style={styles.incomeAmount}>
            $ {currentIncome.toLocaleString()}
          </Text>
          <Text style={styles.incomeLabel}>Income per hour</Text>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { maxWidth: 120 }]}>
            <Text style={styles.statNumber}>{currentLevel}</Text>
            <Text style={styles.statLabel}>Stage</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.categoryLabel}>{business.name}</Text>
            <Text style={styles.categorySubLabel}>Category</Text>
          </View>
        </View>

        {nextLevelData && (
          <View style={styles.salesOutletCard}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <Ionicons name="storefront-outline" size={24} color="black" />
              <Text style={styles.salesOutletTitle}>
                Opening of new sales outlets
              </Text>
            </View>
            <Text style={styles.investmentAmount}>
              $ {nextLevelData.price.toLocaleString()}
            </Text>
            <Text style={styles.investmentLabel}>Required Investments</Text>
            <Text style={styles.profitGrowth}>
              ↑ $ {nextLevelData.growth.toLocaleString()}
            </Text>
            <Text style={styles.profitGrowthLabel}>Expected profit growth</Text>
          </View>
        )}

        <TouchableOpacity
          onPress={handleIncreaseLevel}
          style={styles.openButton}
          disabled={!nextLevelData}
        >
          <Text style={styles.openButtonText}>
            {nextLevelData ? "Open new outlets" : "Maximum level reached"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.balanceText}>
          Balance: $ {balance.toLocaleString()}
        </Text>
      </View>
    </>
  );
};

export default CompanyInfo;
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
    // justifyContent: "space-between",
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