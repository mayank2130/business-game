export interface Property {
  id: string;
  price: number;
  owned: boolean;
  maintainance: number;
  source: number; // Assuming 'source' is of type number (require statement)
}

export const personalPropertyData: Property[] = [
  {
    id: "1",
    owned: false,
    price: 28000000,
    maintainance: 120000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "2",
    owned: false,
    maintainance: 122000,
    price: 300000000,
    source: require("../assets/images/image.png"),
  },
  {
    id: "3",
    owned: false,
    maintainance: 112000,
    price: 280000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "4",
    owned: false,
    maintainance: 132000,
    price: 600000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "5",
    owned: false,
    maintainance: 142000,
    price: 850000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "6",
    owned: false,
    maintainance: 152000,
    price: 1000000000,
    source: require("../assets/images/image.png"),
  },
  {
    id: "7",
    owned: false,
    maintainance: 121000,
    price: 1200000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "8",
    owned: false,
    maintainance: 122000,
    price: 5750000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "9",
    owned: false,
    maintainance: 120200,
    price: 6200000000,
    source: require("../assets/images/image.png"),
  },
  {
    id: "10",
    owned: false,
    maintainance: 12000,
    price: 6600000000,
    source: require("../assets/images/image.png"),
  },
  {
    id: "11",
    owned: false,
    maintainance: 1202400,
    price: 7000000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "12",
    owned: false,
    maintainance: 1201200,
    price: 7600000000,
    source: require("../assets/images/merc.png"),
  },
  {
    id: "13",
    owned: false,
    maintainance: 120300,
    price: 8000000000,
    source: require("../assets/images/merc.png"),
  },
];
