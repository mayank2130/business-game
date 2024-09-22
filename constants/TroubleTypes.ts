
export interface LegalTrouble {
    id: string;
    name: string;
    description: string;
    cost: number;
    influenceCost: number;
    probability: number;
    resolutionOptions: ResolutionOption[];
    createdAt: number;
  }
  
  export interface ResolutionOption {
    name: string;
    cost: number;
    influenceCost: number;
    successProbability: number;
  }