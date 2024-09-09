import { ImageSourcePropType } from "react-native";

export interface ShopPrice {
  id: string;
  price: number;
  name: string;
}

export const shopPrice: ShopPrice[] = [
  { id: "1", price: 5000, name: "Local Shop" },
  { id: "2", price: 42000, name: "A Small Chain of Shops" },
  { id: "3", price: 250000, name: "Large Chain of Shops" },
];

export interface FactoryPrice {
  id: string;
  price: number;
  name: string;
}

export const factoryPrice: FactoryPrice[] = [
  { id: "1", price: 50000, name: "Small Factory" },
  { id: "2", price: 750000, name: "Mid-Size Factory" },
  { id: "3", price: 5000000, name: "Large Factory" },
];

export interface ConstructionPrice {
  id: string;
  price: number;
  name: string;
}

export const constructionPrice: ConstructionPrice[] = [
  { id: "1", price: 50000, name: "Small Construction Company" },
  { id: "2", price: 750000, name: "Mid-Size Construction Company" },
  { id: "3", price: 5000000, name: "Large Construction Company" },
];

export interface CreateBusinessTypes {
  id: string;
  name: string;
  value: string;
  price: number;
  source: ImageSourcePropType;
}

export interface ArmsDealerPrice {
  id: string;
  price: number;
  name: string;
}

export const armsDealerPrice: ArmsDealerPrice[] = [
  { id: "1", price: 250000, name: "Small Arms Dealer" },
  { id: "2", price: 1500000, name: "Mid-Size Weapons Distributor" },
  { id: "3", price: 8000000, name: "Global Arms Dealer" },
];
export interface DrugCartelPrice {
  id: string;
  price: number;
  name: string;
}

export const drugCartelPrice: DrugCartelPrice[] = [
  { id: "1", price: 100000, name: "Local Drug Network" },
  { id: "2", price: 1000000, name: "Regional Cartel" },
  { id: "3", price: 5000000, name: "International Drug Cartel" },
];
export interface PowerPlantPrice {
  id: string;
  price: number;
  name: string;
}

export const powerPlantPrice: PowerPlantPrice[] = [
  { id: "1", price: 500000, name: "Small Power Plant" },
  { id: "2", price: 3000000, name: "Mid-Size Power Generation Plant" },
  { id: "3", price: 15000000, name: "Large Energy Corporation" },
];
export interface OilCompanyPrice {
  id: string;
  price: number;
  name: string;
}

export const oilCompanyPrice: OilCompanyPrice[] = [
  { id: "1", price: 250000, name: "Small Oil & Gas Firm" },
  { id: "2", price: 1500000, name: "Mid-Size Oil & Gas Company" },
  { id: "3", price: 10000000, name: "Large Oil & Gas Corporation" },
];
export interface TechStartupPrice {
  id: string;
  price: number;
  name: string;
}

export const techStartupPrice: TechStartupPrice[] = [
  { id: "1", price: 50000, name: "Early-Stage Startup" },
  { id: "2", price: 200000, name: "Growing Tech Startup" },
  { id: "3", price: 1000000, name: "Established Tech Company" },
];
export interface IntelligencePrice {
  id: string;
  price: number;
  name: string;
}

export const intelligencePrice: IntelligencePrice[] = [
  { id: "1", price: 100000, name: "Small Intelligence Firm" },
  { id: "2", price: 750000, name: "Mid-Size Intelligence Agency" },
  { id: "3", price: 5000000, name: "Large Intelligence Corporation" },
];

export const createBusinessTypes: CreateBusinessTypes[] = [
  {
    id: "1",
    name: "Grocery Store",
    value: "shops",
    price: 0,
    source: require("../assets/images/grocery-cart.png"),
  },
  {
    id: "2",
    name: "Factory",
    value: "factories",
    price: 0,
    source: require("../assets/images/factory.png"),
  },
  {
    id: "3",
    name: "Construction Company",
    value: "construction",
    price: 0,
    source: require("../assets/images/construction-site.png"),
  },
  {
    id: "4",
    name: "Intelligence  Company",
    value: "intelligence",
    price: 0,
    source: require("../assets/images/spyware.png"),
  },
  {
    id: "5",
    name: "Bank",
    value: "bank",
    price: 0,
    source: require("../assets/images/bank.png"),
  },
  {
    id: "6",
    name: "Tech Startup",
    value: "startup",
    price: 0,
    source: require("../assets/images/virtual-reality.png"),
  },
  {
    id: "7",
    name: "Oil & Gas Company",
    value: "oil",
    price: 0,
    source: require("../assets/images/oil-rig.png"),
  },
  {
    id: "8",
    name: "Power Plants",
    value: "power",
    price: 0,
    source: require("../assets/images/electric-factory.png"),
  },
  {
    id: "9",
    name: "Drug Cartel",
    value: "drugs",
    price: 0,
    source: require("../assets/images/cocaine_4612345.png"),
  },
  {
    id: "10",
    name: "Arms Dealer",
    value: "arms",
    price: 0,
    source: require("../assets/images/launcher_942492.png"),
  },
];
