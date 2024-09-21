import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BusinessOptions, OptionLevels } from "@/constants/Business";
import { Alert } from "react-native";
import { personalPropertyData, Property } from "@/constants/Property";
import { getLegalTroubles, LegalTrouble } from "@/constants/Troubles";
import { Cars, carsData } from "@/constants/Cars";

export const BALANCE_KEY = "@game_full_balance";
export const BUSINESSES_KEY = "@game_businesses";
export const INFLUENCE_KEY = "@game_influence";
export const LOANS_KEY = "@game_loans";
export const PROPERTIES_KEY = "@game_properties";
export const TROUBLES_KEY = "@game_new_troubles_laws";
export const CARS_KEY = "@game_cars";
export const MAX_TROUBLES = 3;

// const MAX_TROUBLES = 3;
const MIN_TROUBLE_INTERVAL = 30 * 60 * 1000; // 30 minutes in milliseconds
const MAX_TROUBLE_INTERVAL = 14 * 60 * 60 * 1000; // 14 hours in milliseconds
const TROUBLE_BALANCE_THRESHOLD = 15000000;
// For testing purposes, use these values instead:
// const MIN_TROUBLE_INTERVAL = 10 * 1000; // 10 seconds
// const MAX_TROUBLE_INTERVAL = 10 * 1000; // 10 seconds

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
  ownedProperties: Property[];
  ownedCars: Cars[];
  availableProperties: Property[];
  availableCars:Cars[]
  loans: Loan[];
  updateBalance: (newBalance: number) => Promise<void>;
  updateBusinesses: (newBusinesses: BusinessOptions[]) => Promise<void>;
  updateProperties: (
    newOwnedProperties: Property[],
    newAvailableProperties: Property[]
  ) => Promise<void>;
  updateCars: (
    newOwnedCars: Cars[],
    newAvailableCars: Cars[]
  ) => Promise<void>;
  increaseBusinessLevel: (businessId: string) => Promise<void>;
  getCurrentIncome: (businessId: string) => number;
  getTotalIncome: () => number;
  getTotalRentalIncome: () => number;
  getTotalCarMaintainace:() => number;
  sellProperty: (propertyId: string) => Promise<void>;
  buyProperty: (propertyId: string) => Promise<void>;
  sellCars: (carId: string) => Promise<void>;
  buyCars: (carId: string) => Promise<void>;
  increaseInfluence: (
    influenceCost: number,
    influenceAmount: number
  ) => Promise<void>;
  getLoan: (loanOption: LoanOption) => Promise<void>;
  repayLoan: (loanId: string) => Promise<void>;
  currentTroubles: LegalTrouble[];
  handleLegalTroubles: () => void;
  resolveTrouble: (troubleId: string, optionIndex: number) => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(
  undefined
);

export const BusinessProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [balance, setBalance] = useState<number>(0);
  const [ownedBusinesses, setOwnedBusinesses] = useState<BusinessOptions[]>([]);
  const [ownedProperties, setOwnedProperties] = useState<Property[]>([]);
  const [availableProperties, setAvailableProperties] = useState<Property[]>(
    []
  );
  const [ownedCars, setOwnedCars] = useState<Cars[]>([]);
  const [availableCars, setAvailableCars] = useState<Cars[]>([]);

  const [influence, setInfluence] = useState<number>(0);
  const [loans, setLoans] = useState<Loan[]>([]);
  const [currentTroubles, setCurrentTroubles] = useState<LegalTrouble[]>([]);
  const [lastTroubleCheck, setLastTroubleCheck] = useState<number>(Date.now());
  const [nextTroubleCheck, setNextTroubleCheck] = useState<number>(
    Date.now() + MIN_TROUBLE_INTERVAL
  );

  const loadData = useCallback(async () => {
    try {
      const storedBalance = await AsyncStorage.getItem(BALANCE_KEY);
      const storedBusinesses = await AsyncStorage.getItem(BUSINESSES_KEY);
      const storedProperties = await AsyncStorage.getItem(PROPERTIES_KEY);
      const storedInfluence = await AsyncStorage.getItem(INFLUENCE_KEY);
      const storedLoans = await AsyncStorage.getItem(LOANS_KEY);
      const storedTroubles = await AsyncStorage.getItem(TROUBLES_KEY);
      const storedCars = await AsyncStorage.getItem(CARS_KEY);

      if (storedTroubles !== null) {
        setCurrentTroubles(JSON.parse(storedTroubles));
      }
      if (storedBalance !== null) setBalance(parseFloat(storedBalance));
      if (storedBusinesses !== null)
        setOwnedBusinesses(JSON.parse(storedBusinesses));
      if (storedInfluence !== null) setInfluence(parseFloat(storedInfluence));
      if (storedLoans !== null) setLoans(JSON.parse(storedLoans));

      const allCars = carsData;
      if (storedCars !== null) {
        const ownedCarIds = JSON.parse(storedCars);
        setOwnedCars(allCars.filter((p: Cars) => ownedCarIds.includes(p.id)));
        setAvailableCars(
          allCars.filter((p: Cars) => !ownedCarIds.includes(p.id))
        );
      } else {
        setOwnedCars([]);
        setAvailableCars(allCars);
      }

      const allProperties = personalPropertyData;
      if (storedProperties !== null) {
        const ownedPropertyIds = JSON.parse(storedProperties);
        setOwnedProperties(
          allProperties.filter((p: Property) => ownedPropertyIds.includes(p.id))
        );
        setAvailableProperties(
          allProperties.filter(
            (p: Property) => !ownedPropertyIds.includes(p.id)
          )
        );
      } else {
        setOwnedProperties([]);
        setAvailableProperties(allProperties);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleLegalTroubles = useCallback(() => {
    const now = Date.now();
    if (
      now < nextTroubleCheck ||
      currentTroubles.length >= MAX_TROUBLES ||
      balance < TROUBLE_BALANCE_THRESHOLD
    )
      return;

    const troubles = getLegalTroubles();
    const scaleFactor = Math.log(balance + influence + 1) / Math.log(10);

    let newTrouble: LegalTrouble | null = null;

    for (const trouble of troubles) {
      const scaledProbability = trouble.probability * scaleFactor;
      if (
        Math.random() < scaledProbability &&
        !currentTroubles.some((t) => t.id.split("-")[0] === trouble.id)
      ) {
        newTrouble = {
          ...trouble,
          id: `${trouble.id}-${now}`,
          createdAt: now,
        };
        break;
      }
    }

    if (newTrouble) {
      setCurrentTroubles((prev) => {
        const updated = [...prev, newTrouble!];
        AsyncStorage.setItem(TROUBLES_KEY, JSON.stringify(updated));
        return updated;
      });

      Alert.alert(
        "New Legal Trouble!",
        `${newTrouble.name}: ${newTrouble.description}\n\nThis will cost you $${newTrouble.cost} and ${newTrouble.influenceCost} influence points if left unresolved.`,
        [{ text: "View Details", onPress: () => {} }]
      );
    }

    // Schedule next check
    const nextCheck =
      now +
      Math.floor(
        Math.random() * (MAX_TROUBLE_INTERVAL - MIN_TROUBLE_INTERVAL) +
          MIN_TROUBLE_INTERVAL
      );
    setNextTroubleCheck(nextCheck);
    setLastTroubleCheck(now);
  }, [balance, influence, currentTroubles, nextTroubleCheck]);

  const resolveTrouble = useCallback(
    (troubleId: string, optionIndex: number) => {
      const troubleIndex = currentTroubles.findIndex((t) => t.id === troubleId);
      if (troubleIndex === -1) return;

      const trouble = currentTroubles[troubleIndex];
      const option = trouble.resolutionOptions[optionIndex];
      if (!option) return;

      if (balance < option.cost || influence < option.influenceCost) {
        Alert.alert(
          "Error",
          "Insufficient funds or influence to resolve this trouble."
        );
        return;
      }

      if (Math.random() < option.successProbability) {
        setCurrentTroubles((prev) => {
          const updated = prev.filter((t) => t.id !== troubleId);
          AsyncStorage.setItem(TROUBLES_KEY, JSON.stringify(updated));
          return updated;
        });
        setBalance((prev) => prev - option.cost);
        setInfluence((prev) => prev - option.influenceCost);
        Alert.alert(
          "Success",
          `You successfully resolved the ${trouble.name} using the "${option.name}" approach.`
        );
      } else {
        Alert.alert(
          "Failure",
          `Your attempt to resolve the ${trouble.name} using the "${option.name}" approach has failed. The trouble remains.`
        );
      }
    },
    [currentTroubles, balance, influence]
  );

  useEffect(() => {
    const updateInterval = 1000; // Update every second
    const maxTroubleCheckInterval = 10000; // Check for new troubles every 10 seconds

    const timer = setInterval(() => {
      const totalIncome = getTotalIncome() + getTotalRentalIncome() + getTotalCarMaintainace();
      const incomePerSecond = totalIncome / 3600; // Convert hourly income to per-second
      let newBalance = balance + incomePerSecond;

      // Check for loans that need to be repaid
      const currentTime = Date.now();
      const updatedLoans = loans.filter((loan) => {
        const loanDurationMs = loan.durationInDays * 24 * 60 * 60 * 1000;
        if (currentTime >= loan.startTime + loanDurationMs) {
          const totalToRepay =
            loan.amount + (loan.amount * loan.interest) / 100;
          newBalance -= totalToRepay;
          Alert.alert(
            "Loan Repayment",
            `A loan of $${loan.amount} has been automatically repaid.`
          );
          return false; // Remove this loan from the array
        }
        return true; // Keep this loan in the array
      });

      if (updatedLoans.length !== loans.length) {
        setLoans(updatedLoans);
        AsyncStorage.setItem(LOANS_KEY, JSON.stringify(updatedLoans));
      }

      updateBalance(newBalance);

      // Check and update troubles
      const updatedTroubles = currentTroubles
        .map((trouble) => {
          const troubleDuration = Date.now() - trouble.createdAt;
          if (troubleDuration >= 24 * 60 * 60 * 1000) {
            // 24 hours in milliseconds
            // Apply penalties for unresolved troubles
            newBalance -= trouble.cost;
            setInfluence((prevInfluence) => {
              const newInfluence = Math.max(
                0,
                prevInfluence - trouble.influenceCost
              );
              AsyncStorage.setItem(INFLUENCE_KEY, newInfluence.toString());
              return newInfluence;
            });
            Alert.alert(
              "Trouble Penalty",
              `You've incurred penalties for not resolving ${trouble.name}. $${trouble.cost} deducted and ${trouble.influenceCost} influence lost.`
            );
            return null; // Remove this trouble
          }
          return trouble;
        })
        .filter(Boolean) as LegalTrouble[];

      if (updatedTroubles.length !== currentTroubles.length) {
        setCurrentTroubles(updatedTroubles);
        AsyncStorage.setItem(TROUBLES_KEY, JSON.stringify(updatedTroubles));
      }
      handleLegalTroubles();
    }, 1000);

    return () => {
      clearInterval(timer);
      // No need to clear the trouble timer as it's using setTimeout
    };
  }, [
    balance,
    ownedCars,
    ownedBusinesses,
    ownedProperties,
    loans,
    currentTroubles,
    handleLegalTroubles,
  ]);

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
    const loanToRepay = loans.find((loan) => loan.id === loanId);
    if (!loanToRepay) {
      Alert.alert("Error", "Loan not found.");
      return;
    }

    const totalToRepay =
      loanToRepay.amount + (loanToRepay.amount * loanToRepay.interest) / 100;

    const newBalance = balance - totalToRepay;

    try {
      await updateBalance(newBalance);
      const updatedLoans = loans.filter((loan) => loan.id !== loanId);
      await AsyncStorage.setItem(LOANS_KEY, JSON.stringify(updatedLoans));
      setLoans(updatedLoans);

      Alert.alert("Success", "Loan repaid successfully.");
    } catch (error) {
      console.error("Error repaying loan:", error);
    }
  };

  const getTotalRentalIncome = (): number => {
    return ownedProperties.reduce(
      (total, property) => total + (property.rentalIncome || 0),
      0
    );
  };

  const getTotalCarMaintainace = (): number => {
    return ownedCars.reduce(
      (total, property) => total - (property.maintainance || 0),
      0
    );
  };
  const buyProperty = async (propertyId: string) => {
    const property = availableProperties.find((p) => p.id === propertyId);
    if (!property) {
      Alert.alert("Error", "Property not found.");
      return;
    }

    if (balance < property.price) {
      Alert.alert("Error", "Insufficient balance to buy this property.");
      return;
    }

    const newBalance = balance - property.price;
    await updateBalance(newBalance);

    const newOwnedProperties = [...ownedProperties, property];
    const newAvailableProperties = availableProperties.filter(
      (p) => p.id !== propertyId
    );

    await updateProperties(newOwnedProperties, newAvailableProperties);

    Alert.alert(
      "Success",
      `${property.location} purchased for $${property.price.toLocaleString()}.`
    );
  };

  const updateProperties = async (
    newOwnedProperties: Property[],
    newAvailableProperties: Property[]
  ) => {
    try {
      const ownedPropertyIds = newOwnedProperties.map((p) => p.id);
      await AsyncStorage.setItem(
        PROPERTIES_KEY,
        JSON.stringify(ownedPropertyIds)
      );
      setOwnedProperties(newOwnedProperties);
      setAvailableProperties(newAvailableProperties);
    } catch (error) {
      console.error("Error updating properties:", error);
    }
  };

  const sellProperty = async (propertyId: string) => {
    const property = ownedProperties.find((p) => p.id === propertyId);
    if (!property) {
      Alert.alert("Error", "Property not found.");
      return;
    }

    const newBalance = balance + property.price * 0.7;
    await updateBalance(newBalance);

    const newOwnedProperties = ownedProperties.filter(
      (p) => p.id !== propertyId
    );
    const newAvailableProperties = [...availableProperties, property];

    await updateProperties(newOwnedProperties, newAvailableProperties);

    Alert.alert("Success", `${property.location} sold for $${property.price}.`);
  };


  const buyCars = async (carId: string) => {
    const car = availableCars.find((p) => p.id === carId);
    if (!car) {
      Alert.alert("Error", "Car not found.");
      return;
    }

    if (balance < car.price) {
      Alert.alert("Error", "Insufficient balance to buy this property.");
      return;
    }

    const newBalance = balance - car.price;
    await updateBalance(newBalance);

    const newOwnedCars = [...ownedCars, car];
    const newAvailableCars = availableCars.filter(
      (p) => p.id !== carId
    );

    await updateCars(newOwnedCars, newAvailableCars);

    Alert.alert(
      "Success",
      `${car.name} purchased for $${car.price.toLocaleString()}.`
    );
  };

  const updateCars = async (
    newOwnedCars: Cars[],
    newAvailableCars: Cars[]
  ) => {
    try {
      const ownedCarIds = newOwnedCars.map((p) => p.id);
      await AsyncStorage.setItem(
        CARS_KEY,
        JSON.stringify(ownedCarIds)
      );
      setOwnedCars(newOwnedCars);
      setAvailableCars(newAvailableCars);
    } catch (error) {
      console.error("Error updating cars:", error);
    }
  };

  const sellCars = async (carId: string) => {
    const cars = ownedCars.find((p) => p.id === carId);
    if (!cars) {
      Alert.alert("Error", "Car not found.");
      return;
    }

    const newBalance = balance + cars.price * 0.6;
    await updateBalance(newBalance);

    const newOwnedCars = ownedCars.filter(
      (p) => p.id !== carId
    );
    const newAvailableCars = [...availableCars, cars];

    await updateCars(newOwnedCars, newAvailableCars);

    Alert.alert("Success", `${cars.id} sold for $${cars.price}.`);
  };

  return (
    <BusinessContext.Provider
      value={{
        balance,
        influence,
        ownedBusinesses,
        ownedProperties,
        ownedCars,
        availableProperties,
        availableCars,
        loans,
        updateBalance,
        updateBusinesses,
        updateProperties,
        updateCars,
        increaseBusinessLevel,
        getCurrentIncome,
        getTotalIncome,
        getTotalRentalIncome,
        getTotalCarMaintainace,
        sellProperty,
        buyProperty,
        buyCars,
        sellCars,
        increaseInfluence,
        getLoan,
        repayLoan,
        currentTroubles,
        handleLegalTroubles,
        resolveTrouble,
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
