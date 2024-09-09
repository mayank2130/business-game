import { Business, BUSINESSES_KEY } from "@/components/global/Business";
import { BusinessOptions } from "@/constants/Business";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchBusinesses = async (): Promise<BusinessOptions[]> => {
  try {
    const storedBusinesses = await AsyncStorage.getItem(BUSINESSES_KEY);
    if (storedBusinesses !== null) {
      return JSON.parse(storedBusinesses);
    }
    return [];
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return [];
  }
};