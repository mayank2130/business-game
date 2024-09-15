export interface Property {
    id: string;
    price: number; // Change the type to number
    location: string;
    source: number; // Assuming 'source' is of type number (require statement)
  }
  
  export const propertyData: Property[] = [
    {
      id: "1",
      price: 28000000,
      location: "Alpine, USA",
      source: require("../assets/buildings/alpine.png"),
    },
    {
      id: "2",
      price: 28000000,
      location: "California, USA",
      source: require("../assets/buildings/california.jpg"),
    },
    {
      id: "3",
      price: 28000000,
      location: "Cape Town, South Africa",
      source: require("../assets/buildings/capetown.jpg"),
    },
    {
      id: "4",
      price: 28000000,
      location: "Chicago, USA",
      source: require("../assets/buildings/chicago.jpg"),
    },
    {
      id: "5",
      price: 28000000,
      location: "Chicago, USA",
      source: require("../assets/buildings/chicago2.jpg"),
    },
    {
      id: "6",
      price: 28000000,
      location: "Chicago, USA",
      source: require("../assets/buildings/chicago3.jpg"),
    },
    {
      id: "7",
      price: 28000000,
      location: "Cyprus",
      source: require("../assets/buildings/cyprus.jpg"),
    },
    {
      id: "8",
      price: 28000000,
      location: "Dubai, UAE",
      source: require("../assets/buildings/dubai.jpg"),
    },
    {
      id: "9",
      price: 28000000,
      location: "Hong Kong",
      source: require("../assets/buildings/hongkong.jpg"),
    },
    {
      id: "10",
      price: 28000000,
      location: "London, UK",
      source: require("../assets/buildings/london.jpg"),
    },
    {
      id: "11",
      price: 28000000,
      location: "London, UK",
      source: require("../assets/buildings/londontwo.jpg"),
    },
    {
      id: "12",
      price: 28000000,
      location: "Malaysia",
      source: require("../assets/buildings/malasiya.jpg"),
    },
    {
      id: "13",
      price: 28000000,
      location: "Shenzhen, China",
      source: require("../assets/buildings/shenzhen.jpg"),
    },
  ];
  
  export const personalPropertyData: Property[] = [
    {
      id: "1",
      price: 28000000,
      location: "Alpine, USA",
      source: require("../assets/buildings/alpine.png"),
    },
    {
      id: "2",
      price: 300000000,
      location: "California, USA",
      source: require("../assets/buildings/california.jpg"),
    },
    {
      id: "3",
      price: 280000000,
      location: "Cape Town, South Africa",
      source: require("../assets/buildings/capetown.jpg"),
    },
    {
      id: "4",
      price: 600000000,
      location: "Chicago, USA",
      source: require("../assets/buildings/chicago.jpg"),
    },
    {
      id: "5",
      price: 850000000,
      location: "Chicago, USA",
      source: require("../assets/buildings/chicago2.jpg"),
    },
    {
      id: "6",
      price: 1000000000,
      location: "Chicago, USA",
      source: require("../assets/buildings/chicago3.jpg"),
    },
    {
      id: "7",
      price: 1200000000,
      location: "Cyprus",
      source: require("../assets/buildings/cyprus.jpg"),
    },
    {
      id: "8",
      price: 5750000000,
      location: "Dubai, UAE",
      source: require("../assets/buildings/dubai.jpg"),
    },
    {
      id: "9",
      price: 6200000000,
      location: "Hong Kong",
      source: require("../assets/buildings/hongkong.jpg"),
    },
    {
      id: "10",
      price: 6600000000,
      location: "London, UK",
      source: require("../assets/buildings/london.jpg"),
    },
    {
      id: "11",
      price: 7000000000,
      location: "London, UK",
      source: require("../assets/buildings/londontwo.jpg"),
    },
    {
      id: "12",
      price: 7600000000,
      location: "Malaysia",
      source: require("../assets/buildings/malasiya.jpg"),
    },
    {
      id: "13",
      price: 8000000000,
      location: "Shenzhen, China",
      source: require("../assets/buildings/shenzhen.jpg"),
    },
  ];
  