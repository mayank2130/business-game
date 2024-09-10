import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BALANCE_KEY = "@game_balance";
export const BUSINESSES_KEY = "@game_businesses";

export interface Business {
  id: string;
  name: string;
  category: string;
  cost: number;
}

const businessCategories: Business[] = [
  { id: "1", name: "Default Name", category: "Restaurant", cost: 1000 },
  { id: "2", name: "Default Name", category: "Retail Store", cost: 1500 },
  { id: "3", name: "Default Name", category: "Tech Startup", cost: 2000 },
];

const GameComponent: React.FC = () => {
  const [balance, setBalance] = useState<number>(0);
  const [ownedBusinesses, setOwnedBusinesses] = useState<Business[]>([]);
  const [newBusinessName, setNewBusinessName] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Business | null>(
    null
  );

  useEffect(() => {
    fetchBalance();
    fetchBusinesses();
  }, []);

  const fetchBalance = async () => {
    try {
      const storedBalance = await AsyncStorage.getItem(BALANCE_KEY);
      if (storedBalance !== null) {
        setBalance(parseFloat(storedBalance));
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  const fetchBusinesses = async () => {
    try {
      const storedBusinesses = await AsyncStorage.getItem(BUSINESSES_KEY);
      if (storedBusinesses !== null) {
        setOwnedBusinesses(JSON.parse(storedBusinesses));
      }
    } catch (error) {
      console.error("Error fetching businesses:", error);
    }
  };

  const updateBalance = async (newBalance: number) => {
    try {
      await AsyncStorage.setItem(BALANCE_KEY, newBalance.toString());
      setBalance(newBalance);
    } catch (error) {
      console.error("Error updating balance:", error);
    }
  };

  const updateBusinesses = async (newBusinesses: Business[]) => {
    try {
      await AsyncStorage.setItem(BUSINESSES_KEY, JSON.stringify(newBusinesses));
      setOwnedBusinesses(newBusinesses);
    } catch (error) {
      console.error("Error updating businesses:", error);
    }
  };

  const addBalance = (amount: number) => {
    updateBalance(balance + amount);
  };

  const buyBusiness = () => {
    if (
      !selectedCategory ||
      !newBusinessName ||
      balance < selectedCategory.cost
    ) {
      return;
    }

    const newBusiness: Business = {
      ...selectedCategory,
      name: newBusinessName,
      id: Date.now().toString(),
    };

    updateBalance(balance - selectedCategory.cost);
    updateBusinesses([...ownedBusinesses, newBusiness]);
    setNewBusinessName("");
    setSelectedCategory(null);
  };

  const closeBusiness = (businessId: string) => {
    const updatedBusinesses = ownedBusinesses.filter(
      (business) => business.id !== businessId
    );
    updateBusinesses(updatedBusinesses);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>Balance: ${balance.toFixed(2)}</Text>
      <Button title="Add $100" onPress={() => addBalance(10000)} />

      <Text style={styles.sectionTitle}>Buy a Business</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter business name"
        value={newBusinessName}
        onChangeText={setNewBusinessName}
      />
      <FlatList
        data={businessCategories}
        renderItem={({ item }) => (
          <Button
            title={`${item.category} ($${item.cost})`}
            onPress={() => setSelectedCategory(item)}
            color={selectedCategory?.id === item.id ? "green" : undefined}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Buy Business"
        onPress={buyBusiness}
        disabled={
          !selectedCategory ||
          !newBusinessName ||
          balance < (selectedCategory?.cost || 0)
        }
      />

      <Text style={styles.sectionTitle}>Owned Businesses</Text>
      <FlatList
        data={ownedBusinesses}
        renderItem={({ item }) => (
          <View style={styles.businessItem}>
            <Text>
              {item.name} ({item.category})
            </Text>
            <Button title="Close" onPress={() => closeBusiness(item.id)} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  balanceText: {
    fontSize: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  businessItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default GameComponent;
