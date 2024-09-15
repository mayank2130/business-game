import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { router, useNavigation } from "expo-router";
import { useBusinessContext } from "@/lib/context";
import InvestmentBankLoan from "@/components/Capital/InvestmentBank";

const InvestmentBank = () => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  const { influence } = useBusinessContext();

  let interestRate;

  if (influence < 6) {
    interestRate = [9, 8, 8, 7];
  } else if (influence > 6 && influence < 25) {
    interestRate = [7, 6, 6, 5];
  } else if (influence > 25 && influence < 100) {
    interestRate = [2, 3, 3, 3];
  } else {
    interestRate = [1, 1, 1, 0];
  }

  const priceOptions = [
    {
      amount: 250000,
      interest: interestRate ? interestRate[0] : 10,
      durationInDays: 1,
    },
    {
      amount: 500000,
      interest: interestRate ? interestRate[1] : 10,
      durationInDays: 1.5,
    },
    {
      amount: 750000,
      interest: interestRate ? interestRate[2] : 10,
      durationInDays: 2,
    },
    {
      amount: 1000000,
      interest: interestRate ? interestRate[3] : 10,
      durationInDays: 2.5,
    },
  ];

  return (
    <>
      <ScrollView style={{ maxHeight: "auto", flex: 1 }}>
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
                  right: 95,
                  bottom: 0,
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <ImageBackground
                source={require("../../../assets/images/banktwo.png")}
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
          <View style={[styles.containerThree, { marginBottom: 20 }]}>
            <Text
              style={[
                styles.overlayText,
                { letterSpacing: 1, fontFamily: "mon-l" },
              ]}
            >
              Build Relations with Bankers to get investment, loans and special
              treatments. Higher the influence, lower the interest you have to
              pay.
            </Text>
          </View>

          {priceOptions.map((price, index) => (
            <InvestmentBankLoan price={price} index={index} key={index} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default InvestmentBank;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginLeft: 12,
    marginBottom: 10,
  },
  cardSix: {
    height: 50,
    borderRadius: 10,
    marginVertical: 12,
    // padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  innerTxt: {
    fontFamily: "mon-sb",
    marginTop: 20,
    fontSize: 20,
  },
  cardThree: {
    width: 200,
    height: 180,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardFour: {
    height: 230,
    width: 340,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardImage: {
    height: 200,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardSemiBody: {
    flex: 1,
    flexGrow: 1,
    flexDirection: "row",
    gap: 45,
  },
  cardTilte: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  cardDescription: {
    fontSize: 15,
  },
  cardFooter: {
    fontSize: 15,
  },
  headingTextTwo: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginLeft: 12,
    marginBottom: 10,
  },
  overlayText: {
    bottom: 0,
    color: "black",
    fontSize: 16,
  },
  container: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
  },
  containerTwo: {
    // height: "auto",
    // width:"auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerThree: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    flex: 1,
    margin: 6,
    justifyContent: "center",
    alignItems: "center",
    height: 130,
    width: 130,
    borderRadius: 8,
  },
  cardTwo: {
    flex: 1,
    margin: 8,
    flexDirection: "row",
    gap: 25,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  innerCard: {
    flex: 1,
    marginLeft: 10,
    paddingBottom: 4,
    paddingTop: 4,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    // backgroundColor:"#fff"
    // height: 100,
    // width: 100,
    // borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  gradient: {
    flex: 1,
    borderRadius: 35,
    elevation: 8,
  },
});
