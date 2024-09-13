import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { useNavigation, useLocalSearchParams, useRouter } from "expo-router";
import { useBusinessContext } from "@/lib/context"; // Adjust the import path as needed
import {
  BusinessOptions,
  OptionLevels,
  createBusinessTypes,
} from "@/constants/Business"; // Adjust the import path as needed

const BusinessOption: React.FC = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const navigation = useNavigation();
  const router = useRouter();
  const { balance, ownedBusinesses, updateBalance, updateBusinesses } =
    useBusinessContext();

  const [newBusinessName, setNewBusinessName] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<BusinessOptions | null>(
    null
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
    });
  }, []);

  const businessType = createBusinessTypes.find(
    (type) => type.value === category
  );

  const buyBusiness = () => {
    if (
      !selectedOption ||
      !newBusinessName ||
      balance < selectedOption.levels[0].price
    ) {
      Alert.alert(
        "Error",
        "Please select an option, enter a business name, and ensure you have sufficient balance."
      );
      return;
    }

    const newBusiness = {
      ...selectedOption,
      name: newBusinessName,
      currentLevel: 1,
      currentIncome: selectedOption.levels[0].totalIncome,
    };

    updateBalance(balance - selectedOption.levels[0].price);
    updateBusinesses([...ownedBusinesses, newBusiness]);
    Alert.alert("Success", `You've purchased ${newBusinessName}!`);
    setNewBusinessName("");
    setSelectedOption(null);
    router.back();
  };

  const renderOption = ({ item }: { item: BusinessOptions }) => (
    <TouchableOpacity
      style={[
        styles.optionItem,
        selectedOption?.id === item.id && styles.selectedOption,
      ]}
      onPress={() => setSelectedOption(item)}
    >
      <Text style={styles.optionName}>{item.value}</Text>
      <Text style={styles.optionPrice}>
        Initial Cost: ${item.levels[0].price.toLocaleString()}
      </Text>
      <Text style={styles.optionIncome}>
        Initial Income: ${item.levels[0].totalIncome.toLocaleString()}/day
      </Text>
    </TouchableOpacity>
  );

  if (!businessType) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          No options found for this category.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{businessType.name} Options</Text>
      <Text style={styles.balanceText}>
        Current Balance: ${balance.toLocaleString()}
      </Text>
      <FlatList
        data={businessType.options}
        renderItem={renderOption}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        value={newBusinessName}
        onChangeText={setNewBusinessName}
        placeholder="Enter your new business name"
      />
      <TouchableOpacity style={styles.buyButton} onPress={buyBusiness}>
        <Text style={styles.buyButtonText}>Buy Business</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusinessOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  optionIncome: {
    fontSize: 14,
    color: "#4CAF50",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  balanceText: {
    fontSize: 18,
    marginBottom: 16,
  },
  optionItem: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  selectedOption: {
    backgroundColor: "#e6f7ff",
    borderColor: "#1890ff",
    borderWidth: 1,
  },
  optionName: {
    fontSize: 18,
    fontWeight: "500",
  },
  optionPrice: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  buyButton: {
    backgroundColor: "#1890ff",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
