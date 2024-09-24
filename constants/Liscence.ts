export interface Liscence {
  id: number;
  name: string;
  value: string;
  cost: number;
  description: string;
  duration: number;
  typeofInfluence: string;
  requiredInfluence: number;
}

export const BusinessLiscences: Liscence[] = [
  {
    id: 1,
    value:"power",
    name: "Power Plant Business Liscence",
    cost: 10000000,
    description:
      "To start a power plant business you must obtain this liscence.",
    duration: 3,
    typeofInfluence: "Politician",
    requiredInfluence: 25,
  },
  {
    id: 2,
    value:"bank",
    name: "Banking Liscence",
    cost: 25000000,
    description: "For you to own a bank you must obtain this liscence.",
    duration: 3,
    typeofInfluence: "Politician",
    requiredInfluence: 45,
  },
  {
    id: 3,
    value:"oil",
    name: "Oil & Gas Liscence",
    cost: 25000000,
    description: "For you to own a bank you must obtain this liscence.",
    duration: 3,
    typeofInfluence: "Politician",
    requiredInfluence: 65,
  },
];
