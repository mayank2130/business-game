import { useBusinessContext } from "@/lib/context";
import { LegalTrouble } from "./TroubleTypes";

export const getLegalTroubles = ({
  influence,
  bankerInfluence,
  mafiaInfluence,
}: {
  influence: number;
  bankerInfluence: number;
  mafiaInfluence: number;
}): Omit<LegalTrouble, "createdAt">[] => {
  const adjustProbability = (
    baseProbability: number,
    influenceType: number,
    option: string
  ): number => {
    let modifier = 0;

    if (influenceType <= 10) modifier = -0.2;
    else if (influenceType <= 25) modifier = -0.1;
    else if (influenceType <= 50) modifier = 0;
    else if (influenceType <= 75) modifier = 0.1;
    else modifier = 0.2;

    // Specific adjustments based on the option
    if (option === "Bribe Officials" && mafiaInfluence > 50) modifier += 0.1;
    if (option === "Hire Top Lawyers" && bankerInfluence > 50) modifier += 0.1;

    return Math.min(Math.max(baseProbability + modifier, 0), 1);
  };

  return [
    {
      id: "1",
      name: "Tax Audit",
      description:
        "The IRS is auditing your businesses due to suspicious financial activities.",
      cost: 10000000,
      influenceCost: 10,
      probability: 0.1,
      resolutionOptions: [
        {
          name: "Hire Top Lawyers",
          cost: 500000,
          influenceCost: 0,
          successProbability: adjustProbability(
            0.8,
            bankerInfluence,
            "Hire Top Lawyers"
          ),
        },
        {
          name: "Bribe Officials",
          cost: 250000,
          influenceCost: 10,
          successProbability: adjustProbability(
            0.6,
            mafiaInfluence,
            "Bribe Officials"
          ),
        },
        {
          name: "Comply and Pay Fines",
          cost: 2000000,
          influenceCost: 0,
          successProbability: 1,
        },
      ],
    },
    {
      id: "2",
      name: "Environmental Scandal",
      description:
        "One of your properties is accused of severe environmental violations.",
      cost: 5000000,
      influenceCost: 15,
      probability: 0.05,
      resolutionOptions: [
        {
          name: "Launch PR Campaign",
          cost: 100000,
          influenceCost: 5,
          successProbability: adjustProbability(
            0.7,
            influence,
            "Launch PR Campaign"
          ),
        },
        {
          name: "Silence Whistleblowers",
          cost: 50000,
          influenceCost: 20,
          successProbability: adjustProbability(
            0.5,
            mafiaInfluence,
            "Silence Whistleblowers"
          ),
        },
        {
          name: "Clean Up and Compensate",
          cost: 200000,
          influenceCost: 0,
          successProbability: 0.9,
        },
      ],
    },
    {
      id: "3",
      name: "Labor Union Strike",
      description:
        "Workers at one of your businesses are on strike, demanding better conditions.",
      cost: 30000000,
      influenceCost: 10,
      probability: 0.08,
      resolutionOptions: [
        {
          name: "Negotiate with Union",
          cost: 200000,
          influenceCost: 5,
          successProbability: adjustProbability(
            0.75,
            influence,
            "Negotiate with Union"
          ),
        },
        {
          name: "Hire Replacement Workers",
          cost: 30000,
          influenceCost: 15,
          successProbability: adjustProbability(
            0.6,
            mafiaInfluence,
            "Hire Replacement Workers"
          ),
        },
        {
          name: "Improve Working Conditions",
          cost: 350000,
          influenceCost: 0,
          successProbability: 0.95,
        },
      ],
    },
    {
      id: "4",
      name: "Securities Fraud",
      description:
        "Your companies can face lawsuits for misleading investors, manipulating stock prices, or insider trading.",
      cost: 10000000,
      influenceCost: 15,
      probability: 0.08,
      resolutionOptions: [
        {
          name: "Hire Top Lawyers",
          cost: 500000,
          influenceCost: 0,
          successProbability: adjustProbability(
            0.8,
            bankerInfluence,
            "Hire Top Lawyers"
          ),
        },
        {
          name: "Bribe Officials",
          cost: 250000,
          influenceCost: 10,
          successProbability: adjustProbability(
            0.6,
            mafiaInfluence,
            "Bribe Officials"
          ),
        },
        {
          name: "Make someone a Scapegoat",
          cost: 100000,
          influenceCost: 0,
          successProbability: adjustProbability(
            1,
            influence,
            "Make someone a Scapegoat"
          ),
        },
      ],
    },
  ];
};
