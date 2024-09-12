import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Pressable,
  ScrollView,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useBusinessContext } from "@/lib/context";
import { BusinessOptions } from "@/constants/Business";

interface LocalShopProps {
  incomePerHour: number;
  stage: number;
  requiredInvestment: number;
  expectedProfitGrowth: number;
  balance: string;
}

const BusinessInfo: React.FC = (
  {
    //   incomePerHour,
    //   stage,
    //   requiredInvestment,
    //   expectedProfitGrowth,
    //   balance,
  }
) => {
  const { balance, updateBalance, updateBusinesses, ownedBusinesses } =
    useBusinessContext();
  const increaseBusinessLevel = (
    business: BusinessOptions & { currentLevel: number; currentIncome: number }
  ) => {
    const nextLevel = business.currentLevel + 1;
    if (nextLevel > 8) {
      Alert.alert("Error", "This business is already at maximum level.");
      return;
    }

    const upgradeCost = business.levels[nextLevel - 1].price;
    if (balance < upgradeCost) {
      Alert.alert("Error", "Insufficient balance to upgrade this business.");
      return;
    }

    const updatedBusiness = {
      ...business,
      currentLevel: nextLevel,
      currentIncome: business.levels[nextLevel - 1].totalIncome,
    };

    const updatedBusinesses = ownedBusinesses.map((b) =>
      b.name === business.name ? updatedBusiness : b
    );

    updateBalance(balance - upgradeCost);
    updateBusinesses(updatedBusinesses);
    Alert.alert("Success", `${business.name} upgraded to level ${nextLevel}!`);
  };


  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 160,
          backgroundColor: "#333C4B",
          position: "relative",
        }}
      >
        <View style={[styles.containerTwo]}>
          <View
            style={[
              styles.cardThree,
              styles.cardElevated,
              {
                position: "absolute",
                top: -80,
                // left: "auto",
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
          >
            <ImageBackground
              source={require("../../assets/images/bank.png")}
              style={{
                height: 60,
                width: 60,
                borderRadius: 25,
                margin: 6,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></ImageBackground>
            <Text style={styles.innerTxt}>Investment Bank</Text>
          </View>
        </View>
      </View>
      <View style={[styles.containerThree, { marginTop: 150 }]}>
        <View style={styles.containerThree}>
          <Text
            style={[
              styles.overlayText,
              { letterSpacing: 1, fontFamily: "mon-l" },
            ]}
          >
            Bank calculates the risk of giving you a loan and sets the interest
            rate accordingly.
          </Text>
        </View>
        <Button onPress={increaseBusinessLevel}>Upgrade</Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardThree: {
    width: 200,
    height: 180,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  containerTwo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  innerTxt: {
    fontFamily: "mon-sb",
    marginTop: 20,
    fontSize: 18,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  overlayText: {
    bottom: 0,
    color: "black",
    fontSize: 16,
  },
  containerThree: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default BusinessInfo;
