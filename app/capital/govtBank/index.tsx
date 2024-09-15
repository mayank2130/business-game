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

const GovernmentBank = () => {
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  const politicianOptions = [
    {
      amount: 250000,
      level: "Regional Level Politician",
      influence: 5,
    },
    {
      amount: 5000000,
      level: "State Level Politician",
      influence: 2,
    },
    { amount: 15000000, level: "Prime Minister", influence: 1 },
  ];

  return (
    <>
      <ScrollView style={{ maxHeight: "auto", flex: 1 }}>
        <View style={[styles.containerThree, { marginTop: 100 }]}>
          <View style={[styles.containerThree, { marginBottom: 10 }]}>
            <Text
              style={[
                styles.overlayText,
                { letterSpacing: 1, fontFamily: "mon" },
              ]}
            >
              Higher the influence, lower the interest you have to pay.
            </Text>
          </View>

          {politicianOptions.map((item, index) => (
            <View style={{ marginTop: 10 }} key={index}>
              <View>
                <View
                  style={[
                    styles.cardFour,
                    {
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      backgroundColor: "#fff",
                      borderRadius: 20,
                      paddingLeft: 20,
                    },
                  ]}
                >
                  <Text style={[styles.innerTxt, { color: "green" }]}>
                    ${item.amount.toLocaleString()}
                  </Text>
                  <View
                    style={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      paddingTop: 13,
                    }}
                  >
                    <Text
                      style={[
                        styles.overlayText,
                        { fontFamily: "mon-sb", fontSize: 18 },
                      ]}
                    >
                      {item.level}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "mon",
                        paddingTop: 5,
                        color: "green",
                      }}
                    >
                      Influence + {item.influence}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 1, flexDirection: "row" }}>
                      <View style={styles.containerThree}>
                        <Pressable>
                          <View
                            style={[
                              styles.cardSix,
                              {
                                backgroundColor: "#9F8170",
                                paddingLeft: 33,
                                paddingRight: 33,
                                alignItems: "center",
                                justifyContent: "center",
                              },
                            ]}
                          >
                            <Text
                              style={{
                                color: "white",
                                letterSpacing: 0.3,
                                fontFamily: "mon-sb",
                              }}
                            >
                              No Deal
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                      <View style={styles.containerThree}>
                        <Pressable>
                          <View
                            style={[
                              styles.cardSix,
                              styles.cardElevated,
                              {
                                backgroundColor: "#03C03C",
                                paddingLeft: 42,
                                paddingRight: 42,
                                alignItems: "center",
                                justifyContent: "center",
                              },
                            ]}
                          >
                            <Text
                              style={{
                                color: "white",
                                letterSpacing: 0.3,
                                fontFamily: "mon-sb",
                              }}
                            >
                              Deal
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default GovernmentBank;

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
    height: 200,
    width: 340,
    borderRadius: 10,
    marginVertical: 5,
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
