import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BusinessOptions, OptionLevels } from "@/constants/Business";
import { Alert } from "react-native";

export const BALANCE_KEY = "@game_balance";
export const BUSINESSES_KEY = "@game_businesses";
export const INFLUENCE_KEY = "@game_influence";
export const LOAN_KEY = "@game_loan";

interface Business {
  id: string;
  name: string;
  price: number;
}

interface LoanOption {
  amount: number;
  interest: number;
  returnTime: string;
}

interface Loan {
  amount: number;
  interest: number;
  startTime: number;
}

interface BusinessContextType {
  balance: number;
  influence: number;
  ownedBusinesses: BusinessOptions[];
  loan: Loan | null;
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
}

const BusinessContext = createContext<BusinessContextType | undefined>(
  undefined
);

const priceOptions: LoanOption[] = [
  { amount: 250000, interest: 5, returnTime: "within 1 month" },
  { amount: 500000, interest: 7, returnTime: "within 3 months" },
  { amount: 750000, interest: 8, returnTime: "within 6 months" },
  { amount: 1000000, interest: 10, returnTime: "within 1 year" },
];

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [balance, setBalance] = useState<number>(0);
  const [ownedBusinesses, setOwnedBusinesses] = useState<BusinessOptions[]>([]);
  const [influence, setInfluence] = useState<number>(0);

  const [loan, setLoan] = useState<Loan | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedBalance = await AsyncStorage.getItem(BALANCE_KEY);
        const storedBusinesses = await AsyncStorage.getItem(BUSINESSES_KEY);
        const storedInfluence = await AsyncStorage.getItem(INFLUENCE_KEY);
        const storedLoan = await AsyncStorage.getItem(LOAN_KEY);

        if (storedBalance !== null) setBalance(parseFloat(storedBalance));
        if (storedBusinesses !== null)
          setOwnedBusinesses(JSON.parse(storedBusinesses));
        if (storedInfluence !== null) setInfluence(parseFloat(storedInfluence));
        if (storedLoan !== null) setLoan(JSON.parse(storedLoan));
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  // New useEffect to update balance based on total income
  useEffect(() => {
    const updateInterval = 1000; // Update every second
    const timer = setInterval(() => {
      const totalIncome = getTotalIncome();
      const incomePerSecond = totalIncome / 3600; // Convert hourly income to per-second
      let newBalance = balance + incomePerSecond;

      // Apply loan interest (hourly)
      if (loan) {
        const hoursSinceLoan = (Date.now() - loan.startTime) / (1000 * 60 * 60);
        const interestPerHour =
          (loan.amount * (loan.interest / 100)) / (30 * 24); // Assuming 30 days per month
        const totalInterest = interestPerHour * hoursSinceLoan;
        newBalance -= totalInterest / 3600; // Deduct interest per second
      }

      updateBalance(newBalance);
    }, updateInterval);

    return () => clearInterval(timer);
  }, [balance, ownedBusinesses, loan]);

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
      if (loan) {
        Alert.alert("Error", "You already have an active loan.");
        return;
      }

      const newLoan: Loan = {
        amount: loanOption.amount,
        interest: loanOption.interest,
        startTime: Date.now(),
      };

      await AsyncStorage.setItem(LOAN_KEY, JSON.stringify(newLoan));
      setLoan(newLoan);

      const newBalance = balance + loanOption.amount;
      await updateBalance(newBalance);

      Alert.alert(
        "Success",
        `Loan of $${loanOption.amount} acquired. Remember to repay ${loanOption.returnTime}.`
      );
    } catch (error) {
      console.error("Error getting loan:", error);
    }
  };

  return (
    <BusinessContext.Provider
    value={{
      balance,
      influence,
      ownedBusinesses,
      loan,
      updateBalance,
      updateBusinesses,
      increaseBusinessLevel,
      getCurrentIncome,
      getTotalIncome,
      increaseInfluence,
      getLoan,
    }}
  >
    {children}
  </BusinessContext.Provider>
);
};

export const useBusinessContext = () => {
const context = useContext(BusinessContext);
if (context === undefined) {
  throw new Error("useBusinessContext must be used within a BusinessProvider");
}
return context;
};