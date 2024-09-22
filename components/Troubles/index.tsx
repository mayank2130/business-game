import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ListRenderItem,
} from "react-native";
import { useBusinessContext } from "@/lib/context";
import { LegalTrouble, ResolutionOption } from "@/constants/TroubleTypes";

const TroublesScreen: React.FC = () => {
  const { currentTroubles, resolveTrouble } = useBusinessContext();

  const renderResolutionOption =
    (trouble: LegalTrouble) => (option: ResolutionOption, index: number) =>
      (
        <TouchableOpacity
          key={`${trouble.id}-option-${index}`}
          style={styles.resolutionButton}
          onPress={() => resolveTrouble(trouble.id, index)}
        >
          <Text style={styles.resolutionButtonText}>{option.name}</Text>
          <Text style={styles.resolutionButtonCost}>
            ${option.cost.toLocaleString()} / {option.influenceCost} influence
          </Text>
        </TouchableOpacity>
      );

  const renderTrouble: ListRenderItem<LegalTrouble> = ({ item: trouble }) => {
    const timeLeft = 24 * 60 * 60 * 1000 - (Date.now() - trouble.createdAt);
    const hoursLeft = Math.max(0, Math.floor(timeLeft / (60 * 60 * 1000)));

    return (
      <View style={styles.troubleItem}>
        <Text style={styles.troubleName}>{trouble.name}</Text>
        <Text style={styles.troubleDescription}>{trouble.description}</Text>
        <Text style={styles.troubleCost}>
          Cost: ${trouble.cost.toLocaleString()}, Influence: {trouble.influenceCost}
        </Text>
        <Text style={styles.troubleTimeLeft}>Time left: {hoursLeft} hours</Text>
        <View style={styles.resolutionOptions}>
          {trouble.resolutionOptions.map(renderResolutionOption(trouble))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Legal Troubles</Text>
      {currentTroubles.length === 0 ? (
        <Text style={styles.noTroubles}>
          No current legal troubles. Great job!
        </Text>
      ) : (
        <FlatList<LegalTrouble>
          data={currentTroubles}
          renderItem={renderTrouble}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  troubleItem: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  troubleName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  troubleDescription: {
    marginBottom: 10,
  },
  troubleCost: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  troubleTimeLeft: {
    fontStyle: "italic",
    marginBottom: 10,
  },
  resolutionOptions: {
    flexDirection: "column",
  },
  resolutionButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  resolutionButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  resolutionButtonCost: {
    color: "#ffffff",
    fontSize: 12,
  },
  noTroubles: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default TroublesScreen;
