import { ImageSourcePropType } from "react-native";

export interface CreateBusinessTypes {
  id: string;
  name: string;
  value: string;
  options: BusinessOptions[];
  source: ImageSourcePropType;
}

export interface BusinessOptions {
  id:string,
  price: number,
  name: string
}

export const createBusinessTypes: CreateBusinessTypes[] = [
  {
    id: "1",
    name: "Grocery Store",
    value: "shops",
    options: [
      { id: "1", price: 5000, name: "Local Shop" },
      { id: "2", price: 42000, name: "A Small Chain of Shops" },
      { id: "3", price: 250000, name: "Large Chain of Shops" },
    ],
    source: require("../assets/images/grocery-cart.png"),
  },
  {
    id: "2",
    name: "Factory",
    value: "factories",
    options: [
      { id: "1", price: 50000, name: "Small Factory" },
      { id: "2", price: 750000, name: "Mid-Size Factory" },
      { id: "3", price: 5000000, name: "Large Factory" },
    ],
    source: require("../assets/images/factory.png"),
  },
  {
    id: "3",
    name: "Construction Company",
    value: "construction",
    options: [
      { id: "1", price: 50000, name: "Small Construction Company" },
      { id: "2", price: 750000, name: "Mid-Size Construction Company" },
      { id: "3", price: 5000000, name: "Large Construction Company" },
    ],
    source: require("../assets/images/construction-site.png"),
  },
  {
    id: "4",
    name: "Intelligence  Company",
    value: "intelligence",
    options: [
      { id: "1", price: 100000, name: "Small Intelligence Firm" },
      { id: "2", price: 750000, name: "Mid-Size Intelligence Agency" },
      { id: "3", price: 5000000, name: "Large Intelligence Corporation" },
    ],
    source: require("../assets/images/spyware.png"),
  },
  {
    id: "5",
    name: "Bank",
    value: "bank",
    options: [
      { id: "1", price: 100000, name: "Regional Bank Liscence" },
      { id: "2", price: 750000, name: "Mid-Size Bank Lisence" },
      { id: "3", price: 5000000, name: "Investment Banking Liscence" },
    ],
    source: require("../assets/images/bank.png"),
  },
  {
    id: "6",
    name: "Tech Startup",
    value: "startup",
    options: [
      { id: "1", price: 50000, name: "Early-Stage Startup" },
      { id: "2", price: 200000, name: "Growing Tech Startup" },
      { id: "3", price: 1000000, name: "Established Tech Company" },
    ],
    source: require("../assets/images/virtual-reality.png"),
  },
  {
    id: "7",
    name: "Oil & Gas Company",
    value: "oil",
    options: [
      { id: "1", price: 250000, name: "Small Oil & Gas Firm" },
      { id: "2", price: 1500000, name: "Mid-Size Oil & Gas Company" },
      { id: "3", price: 10000000, name: "Large Oil & Gas Corporation" },
    ],
    source: require("../assets/images/oil-rig.png"),
  },
  {
    id: "8",
    name: "Power Plants",
    value: "power",
    options: [
      { id: "1", price: 500000, name: "Small Power Plant" },
      { id: "2", price: 3000000, name: "Mid-Size Power Generation Plant" },
      { id: "3", price: 15000000, name: "Large Energy Corporation" },
    ],
    source: require("../assets/images/electric-factory.png"),
  },
  {
    id: "9",
    name: "Drug Cartel",
    value: "drugs",
    options: [
      { id: "1", price: 100000, name: "Local Drug Network" },
      { id: "2", price: 1000000, name: "Regional Cartel" },
      { id: "3", price: 5000000, name: "International Drug Cartel" },
    ],
    source: require("../assets/images/cocaine_4612345.png"),
  },
  {
    id: "10",
    name: "Arms Dealer",
    value: "arms",
    options: [
      { id: "1", price: 250000, name: "Small Arms Dealer" },
      { id: "2", price: 1500000, name: "Mid-Size Weapons Distributor" },
      { id: "3", price: 8000000, name: "Global Arms Dealer" },
    ],
    source: require("../assets/images/launcher_942492.png"),
  },
];
