import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createBusinessTypes,
  CreateBusinessTypes,
  BusinessOptions,
} from "@/constants/Business";
import { BALANCE_KEY, BUSINESSES_KEY } from "@/components/global/Business";
import { useBusinessContext } from "@/lib/context";

interface Business extends BusinessOptions {
  name: string;
}

const BusinessOption: React.FC = () => {
  const { category } = useLocalSearchParams<{ category: string }>();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      // headerTransparent: true,
    });
  }, []);

  const router = useRouter();
  const {balance, ownedBusinesses, updateBalance, updateBusinesses} = useBusinessContext();

  const [newBusinessName, setNewBusinessName] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<BusinessOptions | null>(
    null
  );

  const businessType = createBusinessTypes.find(
    (type) => type.value === category
  );

  const buyBusiness = () => {
    if (!selectedOption || !newBusinessName || balance < selectedOption.price) {
      Alert.alert(
        "Error",
        "Please select an option, enter a business name, and ensure you have sufficient balance."
      );
      return;
    }

    const newBusiness: Business = {
      ...selectedOption,
      name: newBusinessName,
    };

    updateBalance(balance - selectedOption.price);
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
      <Text style={styles.optionName}>{item.name}</Text>
      <Text style={styles.optionPrice}>${item.price.toLocaleString()}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
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

export default BusinessOption;
