import { ImageSourcePropType } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface CreateBusinessTypes {
  id: string;
  name: string;
  value: string;
  options: BusinessOptions[];
  source: ImageSourcePropType;
}

export interface BusinessOptions {
  id: string;
  value: string;
  name: string;
  levels: OptionLevels[];
}

export interface OptionLevels {
  level: number;
  price: number;
  growth: number;
  totalIncome: number;
}

type MaterialCommunityIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>["name"];

export interface CompanyProps {
  name: string;
  type: string;
  income: string;
  iconName: MaterialCommunityIconName;
  iconColor: string;
  status?: string;
  onPress: () => void;
}

export const createBusinessTypes: CreateBusinessTypes[] = [
  {
    id: "1",
    name: "Grocery Store",
    value: "shops",
    source: require("../assets/images/grocery-cart.png"),
    options: [
      {
        id: "1",
        value: "Local Shop",
        name: "",
        levels: [
          { level: 1, price: 5000, growth: 100, totalIncome: 500 },
          { level: 2, price: 7500, growth: 150, totalIncome: 650 },
          { level: 3, price: 11250, growth: 225, totalIncome: 875 },
          { level: 4, price: 16875, growth: 340, totalIncome: 1215 },
          { level: 5, price: 25315, growth: 510, totalIncome: 1725 },
          { level: 6, price: 37970, growth: 765, totalIncome: 2490 },
          { level: 7, price: 56955, growth: 1150, totalIncome: 3640 },
          { level: 8, price: 85430, growth: 1725, totalIncome: 5365 },
        ],
      },
      {
        id: "2",
        value: "A Small Chain of Shops",
        name: "",
        levels: [
          { level: 1, price: 42000, growth: 840, totalIncome: 4200 },
          { level: 2, price: 63000, growth: 1260, totalIncome: 5460 },
          { level: 3, price: 94500, growth: 1890, totalIncome: 7350 },
          { level: 4, price: 141750, growth: 2835, totalIncome: 10185 },
          { level: 5, price: 212625, growth: 4250, totalIncome: 14435 },
          { level: 6, price: 318940, growth: 6375, totalIncome: 20810 },
          { level: 7, price: 478410, growth: 9560, totalIncome: 30370 },
          { level: 8, price: 717615, growth: 14340, totalIncome: 44710 },
        ],
      },
      {
        id: "3",
        value: "Large Chain of Shops",
        name: "",
        levels: [
          { level: 1, price: 250000, growth: 5000, totalIncome: 25000 },
          { level: 2, price: 375000, growth: 7500, totalIncome: 32500 },
          { level: 3, price: 562500, growth: 11250, totalIncome: 43750 },
          { level: 4, price: 843750, growth: 16875, totalIncome: 60625 },
          { level: 5, price: 1265625, growth: 25315, totalIncome: 85940 },
          { level: 6, price: 1898440, growth: 37970, totalIncome: 123910 },
          { level: 7, price: 2847660, growth: 56955, totalIncome: 180865 },
          { level: 8, price: 4271490, growth: 85430, totalIncome: 266295 },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Factory",
    value: "factories",
    source: require("../assets/images/factory.png"),
    options: [
      {
        id: "1",
        value: "Small Factory",
        name: "",
        levels: [
          { level: 1, price: 50000, growth: 1000, totalIncome: 5000 },
          { level: 2, price: 75000, growth: 1500, totalIncome: 6500 },
          { level: 3, price: 112500, growth: 2250, totalIncome: 8750 },
          { level: 4, price: 168750, growth: 3375, totalIncome: 12125 },
          { level: 5, price: 253125, growth: 5060, totalIncome: 17185 },
          { level: 6, price: 379690, growth: 7590, totalIncome: 24775 },
          { level: 7, price: 569535, growth: 11385, totalIncome: 36160 },
          { level: 8, price: 854300, growth: 17080, totalIncome: 53240 },
        ],
      },
      {
        id: "2",
        value: "Mid-Size Factory",
        name: "",
        levels: [
          { level: 1, price: 750000, growth: 15000, totalIncome: 75000 },
          { level: 2, price: 1125000, growth: 22500, totalIncome: 97500 },
          { level: 3, price: 1687500, growth: 33750, totalIncome: 131250 },
          { level: 4, price: 2531250, growth: 50625, totalIncome: 181875 },
          { level: 5, price: 3796875, growth: 75940, totalIncome: 257815 },
          { level: 6, price: 5695315, growth: 113910, totalIncome: 371725 },
          { level: 7, price: 8542975, growth: 170865, totalIncome: 542590 },
          { level: 8, price: 12814460, growth: 256300, totalIncome: 798890 },
        ],
      },
      {
        id: "3",
        value: "Large Factory",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Construction Company",
    value: "construction",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Small Construction Company",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Mid-Size Construction Company",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Large Construction Company",
      },
    ],
    source: require("../assets/images/construction-site.png"),
  },
  {
    id: "4",
    name: "Intelligence  Company",
    value: "intelligence",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Small Intelligence Firm",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Mid-Size Intelligence Agency",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Large Intelligence Corporation",
      },
    ],
    source: require("../assets/images/spyware.png"),
  },
  {
    id: "5",
    name: "Bank",
    value: "bank",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Regional Bank Liscence",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Mid-Size Bank Lisence",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Investment Banking Liscence",
      },
    ],
    source: require("../assets/images/bank.png"),
  },
  {
    id: "6",
    name: "Tech Startup",
    value: "startup",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Early-Stage Startup",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Growing Tech Startup",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Established Tech Company",
      },
    ],
    source: require("../assets/images/virtual-reality.png"),
  },
  {
    id: "7",
    name: "Oil & Gas Company",
    value: "oil",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Small Oil & Gas Firm",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Mid-Size Oil & Gas Company",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Large Oil & Gas Corporation",
      },
    ],
    source: require("../assets/images/oil-rig.png"),
  },
  {
    id: "8",
    name: "Power Plants",
    value: "power",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Small Power Plant",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Mid-Size Power Generation Plant",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Large Energy Corporation",
      },
    ],
    source: require("../assets/images/electric-factory.png"),
  },
  {
    id: "9",
    name: "Drug Cartel",
    value: "drugs",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Local Drug Network",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Regional Cartel",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "International Drug Cartel",
      },
    ],
    source: require("../assets/images/cocaine_4612345.png"),
  },
  {
    id: "10",
    name: "Arms Dealer",
    value: "arms",
    options: [
      {
        id: "1",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Small Arms Dealer",
      },
      {
        id: "2",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Mid-Size Weapons Distributor",
      },
      {
        id: "3",
        name: "",
        levels: [
          { level: 1, price: 5000000, growth: 100000, totalIncome: 500000 },
          { level: 2, price: 7500000, growth: 150000, totalIncome: 650000 },
          { level: 3, price: 11250000, growth: 225000, totalIncome: 875000 },
          { level: 4, price: 16875000, growth: 337500, totalIncome: 1212500 },
          { level: 5, price: 25312500, growth: 506250, totalIncome: 1718750 },
          { level: 6, price: 37968750, growth: 759375, totalIncome: 2478125 },
          { level: 7, price: 56953125, growth: 1139060, totalIncome: 3617185 },
          { level: 8, price: 85429690, growth: 1708590, totalIncome: 5325775 },
        ],
        value: "Global Arms Dealer",
      },
    ],
    source: require("../assets/images/launcher_942492.png"),
  },
];
