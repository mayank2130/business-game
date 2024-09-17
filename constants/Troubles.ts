interface LegalTrouble {
    id: string;
    name: string;
    description: string;
    cost: number;
    influenceCost: number;
    probability: number;
    resolutionOptions: ResolutionOption[];
    createdAt: number;
  }
  
  interface ResolutionOption {
    name: string;
    cost: number;
    influenceCost: number;
    successProbability: number;
  }

  
  const getLegalTroubles = (): Omit<LegalTrouble, 'createdAt'>[] => {
    return [
      {
        id: "1",
        name: "Tax Audit",
        description: "The IRS is auditing your businesses due to suspicious financial activities.",
        cost: 10000,
        influenceCost: 5,
        probability: 0.1,
        resolutionOptions: [
          { name: "Hire Top Lawyers", cost: 50000, influenceCost: 0, successProbability: 0.8 },
          { name: "Bribe Officials", cost: 25000, influenceCost: 10, successProbability: 0.6 },
          { name: "Comply and Pay Fines", cost: 100000, influenceCost: 0, successProbability: 1 },
        ],
      },
      {
        id: "2",
        name: "Environmental Scandal",
        description: "One of your properties is accused of severe environmental violations.",
        cost: 50000,
        influenceCost: 15,
        probability: 0.05,
        resolutionOptions: [
          { name: "Launch PR Campaign", cost: 100000, influenceCost: 5, successProbability: 0.7 },
          { name: "Silence Whistleblowers", cost: 75000, influenceCost: 20, successProbability: 0.5 },
          { name: "Clean Up and Compensate", cost: 200000, influenceCost: 0, successProbability: 0.9 },
        ],
      },
      {
        id: "3",
        name: "Labor Union Strike",
        description: "Workers at one of your businesses are on strike, demanding better conditions.",
        cost: 30000,
        influenceCost: 10,
        probability: 0.08,
        resolutionOptions: [
          { name: "Negotiate with Union", cost: 80000, influenceCost: 5, successProbability: 0.75 },
          { name: "Hire Replacement Workers", cost: 60000, influenceCost: 15, successProbability: 0.6 },
          { name: "Improve Working Conditions", cost: 150000, influenceCost: 0, successProbability: 0.95 },
        ],
      },
      {
        id: "4",
        name: "Securities Fraud",
        description: "Your companies can face lawsuits for misleading investors, manipulating stock prices, or insider trading.",
        cost: 30000,
        influenceCost: 10,
        probability: 0.08,
        resolutionOptions: [
            { name: "Hire Top Lawyers", cost: 50000, influenceCost: 0, successProbability: 0.8 },
            { name: "Bribe Officials", cost: 25000, influenceCost: 10, successProbability: 0.6 },
            { name: "Make someone a Scapegoat", cost: 100000, influenceCost: 0, successProbability: 1 },
        ],
      },
    ];
  };  