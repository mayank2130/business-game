import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "expo-router";
import { useBusinessContext } from "@/lib/context";

const Specialization = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Available Liscences",
    });
  }, []);

  const { buyLiscence, availableLiscence } = useBusinessContext();

  return (
    <ScrollView style={{ marginBottom: 10 }}>
      {availableLiscence.map((item) => (
        <View key={item.id} style={styles.container}>
          <View style={[styles.segment, styles.darkSegment]}>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginBottom: 2,
              }}
            >
              <Text style={[styles.segmentTitle, styles.whiteText]}>
                {item.name}
              </Text>
            </View>
            <Text style={[styles.carModels, styles.whiteText]}>
              {item.description}
            </Text>
            <View style={styles.segmentHeader}>
              <Text style={[styles.price, styles.whiteText]}>
                $ {item.cost.toLocaleString()}
              </Text>
              <Text
                style={[
                  styles.averagePrice,
                  styles.whiteText,
                  { fontSize: 13, marginTop: 4 },
                ]}
              >
                Increase
                <Text style={{ color: "#FDEE00", fontFamily: "mon-sb" }}>
                  {" "}
                  {item.typeofInfluence} relations to {item.requiredInfluence}{" "}
                </Text>
                for being eligible.
              </Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: "60%" }]}>
                <View
                  style={[
                    styles.progressSection,
                    { backgroundColor: "#e74c3c", flex: 2 },
                  ]}
                />
                <View
                  style={[
                    styles.progressSection,
                    { backgroundColor: "#f1c40f", flex: 1 },
                  ]}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.changeButton}
              onPress={() => buyLiscence(item.id)}
            >
              <Text style={styles.changeButtonText}>Apply for Liscence</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  segment: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
  },
  darkSegment: {
    backgroundColor: "#555555",
  },
  segmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  carModels: {
    color: "#7f8c8d",
    marginBottom: 8,
  },
  segmentHeader: {
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  averagePrice: {
    color: "#7f8c8d",
    fontSize: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ecf0f1",
    borderRadius: 4,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    flexDirection: "row",
  },
  progressSection: {
    height: "100%",
  },
  changeButton: {
    backgroundColor: "#343434",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  changeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  whiteText: {
    color: "white",
  },
});

export default Specialization;
