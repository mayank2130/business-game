import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BusinessOptions, OptionLevels } from "@/constants/Business";
import { Alert } from "react-native";

export const BALANCE_KEY = "@game_balance";
export const BUSINESSES_KEY = "@game_businesses";
export const INFLUENCE_KEY = "@game_influence";
export const LOANS_KEY = "@game_loans";

interface Business {
  id: string;
  name: string;
  price: number;
}

interface LoanOption {
  amount: number;
  interest: number;
  durationInDays: number;
}

interface Loan {
  id: string;
  amount: number;
  interest: number;
  startTime: number;
  durationInDays: number;
}

interface BusinessContextType {
  balance: number;
  influence: number;
  ownedBusinesses: BusinessOptions[];
  loans: Loan[];
  updateBalance: (newBalance: number) => Promise<void>;
  updateBusinesses: (newBusinesses: BusinessOptions[]) => Promise<void>;
  increaseBusinessLevel: (businessId: string) => Promise<void>;
  getCurrentIncome: (businessId: string) => number;
  getTotalIncome: () => number;
  increaseInfluence: (
    influenceCost: number,
    influenceAmount: number
  ) => Promise<void>;
  getLoan: (loanOption: LoanOption) => Promise<void>;
  repayLoan: (loanId: string) => Promise<void>;
}

const BusinessContext = createContext<BusinessContextType | undefined>(
  undefined
);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [balance, setBalance] = useState<number>(0);
  const [ownedBusinesses, setOwnedBusinesses] = useState<BusinessOptions[]>([]);
  const [influence, setInfluence] = useState<number>(0);
  const [loans, setLoans] = useState<Loan[]>([]);


 
  useEffect(() => {
    const loadData = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem(BALANCE_KEY);
        const storedBusinesses = await AsyncStorage.getItem(BUSINESSES_KEY);
        const storedInfluence = await AsyncStorage.getItem(INFLUENCE_KEY);
        const storedLoans = await AsyncStorage.getItem(LOANS_KEY);

        if (storedBalance !== null) setBalance(parseFloat(storedBalance));
        if (storedBusinesses !== null)
          setOwnedBusinesses(JSON.parse(storedBusinesses));
        if (storedInfluence !== null) setInfluence(parseFloat(storedInfluence));
        if (storedLoans !== null) setLoans(JSON.parse(storedLoans));
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    const updateInterval = 1000; // Update every second
    const timer = setInterval(() => {
      const totalIncome = getTotalIncome();
      const incomePerSecond = totalIncome / 3600; // Convert hourly income to per-second
      let newBalance = balance + incomePerSecond;

      // Check for loans that need to be repaid
      const currentTime = Date.now();
      const updatedLoans = loans.filter(loan => {
        const loanDurationMs = loan.durationInDays * 24 * 60 * 60 * 1000;
        if (currentTime >= loan.startTime + loanDurationMs) {
          const totalToRepay = loan.amount + (loan.amount * loan.interest / 100);
          newBalance -= totalToRepay;
          Alert.alert("Loan Repayment", `A loan of $${loan.amount} has been automatically repaid.`);
          return false; // Remove this loan from the array
        }
        return true; // Keep this loan in the array
      });

      if (updatedLoans.length !== loans.length) {
        setLoans(updatedLoans);
        AsyncStorage.setItem(LOANS_KEY, JSON.stringify(updatedLoans));
      }

      updateBalance(newBalance);
    }, updateInterval);

    return () => clearInterval(timer);
  }, [balance, ownedBusinesses, loans]);

  const updateBalance = async (newBalance: number) => {
    try {
      await AsyncStorage.setItem(BALANCE_KEY, newBalance.toString());
      setBalance(newBalance);
    } catch (error) {
      console.error("Error updating balance:", error);
    }
  };

  const updateBusinesses = async (newBusinesses: BusinessOptions[]) => {
    try {
      await AsyncStorage.setItem(BUSINESSES_KEY, JSON.stringify(newBusinesses));
      setOwnedBusinesses(newBusinesses);
    } catch (error) {
      console.error("Error updating businesses:", error);
    }
  };

  const increaseBusinessLevel = async (businessId: string) => {
    const business = ownedBusinesses.find((b) => b.id === businessId);
    if (!business) return;

    const nextLevel = (business.currentLevel || 1) + 1;
    if (nextLevel > 8) {
      Alert.alert("Error", "This business is already at maximum level.");
      return;
    }

    const nextLevelData: OptionLevels = business.levels[nextLevel - 1];
    const upgradeCost = nextLevelData.price;
    if (balance < upgradeCost) {
      Alert.alert("Error", "Insufficient balance to upgrade this business.");
      return;
    }

    const updatedBusiness = {
      ...business,
      currentLevel: nextLevel,
      currentIncome: nextLevelData.totalIncome,
    };

    const newBalance = balance - upgradeCost;
    await updateBalance(newBalance);

    const updatedBusinesses = ownedBusinesses.map((b) =>
      b.id === businessId ? updatedBusiness : b
    );
    await updateBusinesses(updatedBusinesses);

    Alert.alert("Success", `${business.name} upgraded to level ${nextLevel}!`);
  };

  const getCurrentIncome = (businessId: string): number => {
    const business = ownedBusinesses.find((b) => b.id === businessId);
    return business ? business.currentIncome || 0 : 0;
  };

  const getTotalIncome = (): number => {
    return ownedBusinesses.reduce(
      (total, business) => total + (business.currentIncome || 0),
      0
    );
  };

  const increaseInfluence = async (
    influenceCost: number,
    influenceAmount: number
  ) => {
    try {
      if (balance < influenceCost) {
        Alert.alert("Error", "Insufficient balance to increase influence.");
        return;
      }

      const newInfluence = influence + influenceAmount;
      const newBalance = balance - influenceCost;

      await AsyncStorage.setItem(INFLUENCE_KEY, newInfluence.toString());
      await AsyncStorage.setItem(BALANCE_KEY, newBalance.toString());

      setInfluence(newInfluence);
      setBalance(newBalance);

      Alert.alert("Success", `${influenceAmount} Influence increased`);
    } catch (error) {
      console.error("Error updating influence:", error);
    }
  };

  const getLoan = async (loanOption: LoanOption) => {
    try {
      const newLoan: Loan = {
        id: Date.now().toString(),
        amount: loanOption.amount,
        interest: loanOption.interest,
        startTime: Date.now(),
        durationInDays: loanOption.durationInDays,
      };

      const updatedLoans = [...loans, newLoan];
      await AsyncStorage.setItem(LOANS_KEY, JSON.stringify(updatedLoans));
      setLoans(updatedLoans);

      const newBalance = balance + loanOption.amount;
      await updateBalance(newBalance);

      Alert.alert(
        "Success",
        `Loan of $${loanOption.amount} acquired. It will be automatically repaid in ${loanOption.durationInDays} days.`
      );
    } catch (error) {
      console.error("Error getting loan:", error);
    }
  };

  const repayLoan = async (loanId: string) => {
    const loanToRepay = loans.find(loan => loan.id === loanId);
    if (!loanToRepay) {
      Alert.alert("Error", "Loan not found.");
      return;
    }
  
    const totalToRepay = loanToRepay.amount + (loanToRepay.amount * loanToRepay.interest / 100);
    
    const newBalance = balance - totalToRepay;
  
    try {
      await updateBalance(newBalance);
      const updatedLoans = loans.filter(loan => loan.id !== loanId);
      await AsyncStorage.setItem(LOANS_KEY, JSON.stringify(updatedLoans));
      setLoans(updatedLoans);
      
      Alert.alert("Success", "Loan repaid successfully.");
    } catch (error) {
      console.error("Error repaying loan:", error);
    }
  };

  return (
    <BusinessContext.Provider
      value={{
        balance,
        influence,
        ownedBusinesses,
        loans,
        updateBalance,
        updateBusinesses,
        increaseBusinessLevel,
        getCurrentIncome,
        getTotalIncome,
        increaseInfluence,
        getLoan,
        repayLoan,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusinessContext = () => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error(
      "useBusinessContext must be used within a BusinessProvider"
    );
  }
  return context;
};