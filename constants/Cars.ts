export interface Cars {
  id: string;
  name: string;
  price: number;
  owned: boolean;
  maintainance: number;
  source: number; // Assuming 'source' is of type number (require statement)
}

export const carsData: Cars[] = [
  {
    id: "1",
    name: "Mercedes S-class Maybach",
    owned: false,
    price: 350000,
    maintainance: 10000,
    source: require("../assets/images/cars/merc.png"),
  },
  {
    id: "2",
    name: "Mclaren MCL38 F1 Car",
    owned: false,
    maintainance: 280000,
    price: 100000000,
    source: require("../assets/images/cars/image.png"),
  },
  {
    id: "3",
    name: "Mercedes W13 F1 Car",
    owned: false,
    maintainance: 320000,
    price: 280000000,
    source: require("../assets/images/cars/mercf12022.png"),
  },
  {
    id: "4",
    name: "Mclaren 765LT",
    owned: false,
    maintainance: 20000,
    price: 1000000,
    source: require("../assets/images/cars/mclaren.png"),
  },
  {
    id: "5",
    name: "Mercedes AMG GT",
    owned: false,
    maintainance: 150000,
    price: 350000,
    source: require("../assets/images/cars/amgGTblack.png"),
  },
  {
    id: "6",
    name: "Pagani Huayra R EVO",
    owned: false,
    maintainance: 125000,
    price: 4500000,
    source: require("../assets/images/cars/paganievo.png"),
  },
  {
    id: "7",
    name: "Bugatti Tourbillon",
    owned: false,
    maintainance: 175000,
    price: 5500000,
    source: require("../assets/images/cars/buggatiTourbillon.png"),
  },
  {
    id: "8",
    name: "Astorn Martin DB",
    owned: false,
    maintainance: 6000,
    price: 270000,
    source: require("../assets/images/cars/astonmartinggreen.png"),
  },
  {
    id: "9",
    name: "Mclaren Spider",
    owned: false,
    maintainance: 10000,
    price: 382500,
    source: require("../assets/images/cars/mclarenspyder.png"),
  },
  {
    id: "10",
    name: "Porsche Turbo",
    owned: false,
    maintainance: 8000,
    price: 250000,
    source: require("../assets/images/cars/porscheturbo.png"),
  },
  {
    id: "11",
    name: "Porsche Spyder",
    owned: false,
    maintainance: 12000,
    price: 260000,
    source: require("../assets/images/cars/porschespyder.png"),
  },
  {
    id: "12",
    name: "Bugatti Mistral",
    owned: false,
    maintainance: 140000,
    price: 5000000,
    source: require("../assets/images/cars/buggatiMistral.png"),
  },
  {
    id: "13",
    name: "Porsche 911",
    owned: false,
    maintainance: 10000,
    price: 187995,
    source: require("../assets/images/cars/porsche911.png"),
  },
];
