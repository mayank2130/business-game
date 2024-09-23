export interface Liscence {
  id: number;
  name: string;
  cost: number;
  description: string;
  duration: number;
  typeofInfluence: string;
  requiredInfluence: number;
}

export const Liscence: Liscence[] = [
  {
    id: 1,
    name: "Power Plant Business Liscence",
    cost: 10000000,
    description:
      "To start a power plant business you must obtain this liscence.",
    duration: 3,
    typeofInfluence: "Politician",
    requiredInfluence: 25,
  },
];
