import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BALANCE_KEY, BUSINESSES_KEY } from '@/components/global/Business';

interface Business {
  id: string;
  name: string;
  price: number;
}

interface BusinessContextType {
  balance: number;
  ownedBusinesses: Business[];
  updateBalance: (newBalance: number) => Promise<void>;
  updateBusinesses: (newBusinesses: Business[]) => Promise<void>;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<number>(0);
  const [ownedBusinesses, setOwnedBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem(BALANCE_KEY);
        const storedBusinesses = await AsyncStorage.getItem(BUSINESSES_KEY);

        if (storedBalance !== null) {
          setBalance(parseFloat(storedBalance));
        }

        if (storedBusinesses !== null) {
          setOwnedBusinesses(JSON.parse(storedBusinesses));
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

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

  return (
    <BusinessContext.Provider value={{ balance, ownedBusinesses, updateBalance, updateBusinesses }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error('useBusinessContext must be used within a BusinessProvider');
  }
  return context;
};