import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRouter } from "expo-router";
import { useBusinessContext } from "@/lib/context";

export default function BusinessScreen() {
  const navigation = useNavigation();

  const { getTotalRentalIncome } = useBusinessContext();
  const totalRent = getTotalRentalIncome();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      // headerTransparent: true,
    });
  }, []);

  const router = useRouter();

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={{ marginTop: 30 }}>
          <View
            style={[
              { alignItems: "center", justifyContent: "center", height: 200 },
            ]}
          >
            <LinearGradient
              colors={["#89CFF0", "#007BA7"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.gradient}
            >
              <View
                style={[
                  styles.cardFour,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text
                  style={[
                    styles.innerTxt,
                    { letterSpacing: 1, color: "white" },
                  ]}
                >
                  $ {totalRent.toLocaleString()}
                </Text>
                <Text style={[styles.overlayText, { fontFamily: "mon-sb" }]}>
                  Rental income per hour
                </Text>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity
              onPress={() => router.push("/investments/realEstate/commercial")}
            >
              <View
                style={[
                  styles.cardFour,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <ImageBackground
                  source={require("../../../assets/images/buildings.png")}
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 25,
                    margin: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></ImageBackground>
                <Text style={styles.innerTxt}>Buy Commercial Properties</Text>
                <Text style={styles.overlayText}>and earn rental income</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTwo}>
            <TouchableOpacity
              onPress={() => router.push("/investments/realEstate/personal")}
            >
              <View
                style={[
                  styles.cardFour,
                  styles.cardElevated,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <ImageBackground
                  source={require("../../../assets/images/mansion.png")}
                  style={{
                    height: 90,
                    width: 90,
                    borderRadius: 25,
                    margin: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></ImageBackground>
                <Text style={styles.innerTxt}>Buy Personal Properties</Text>
                <Text style={styles.overlayText}>
                  to store cars, aircrafts, etc.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  innerTxt: {
    fontFamily: "mon-sb",
    fontSize: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    margin: 2,
    marginBottom: 10,
  },
  seperator: {
    marginTop: 50,
  },
  cardThree: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardFour: {
    height: 180,
    width: 360,
    borderRadius: 10,
    marginVertical: 12,
    // marginHorizontal: 30,
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
    marginBottom: 10,
  },
  overlayText: {
    paddingTop: 2,
    color: "black",
    fontSize: 15,
    fontFamily: "mon-l",
  },
  container: {
    height: "auto",
    flexDirection: "row",
    padding: 10,
  },
  containerTwo: {
    // height: "auto",
    // width:"auto",
    flexDirection: "column",
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
    margin: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: 140,
    borderRadius: 4,
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
    // elevation: 8,
  },
});
