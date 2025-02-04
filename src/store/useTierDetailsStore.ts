import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TierDetails = {
  id: string;
  price: number;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  features: Record<string, string>;
  discounts: string[];
};

type TierStoreState = {
  tiers: TierDetails[];
  setTiers: (data: TierDetails[]) => void;
  selectedTier: TierDetails | null;
  setSelectedTier: (data: TierDetails) => void;
};

export const useTierStore = create<TierStoreState>()(
  devtools((set) => ({
    tiers: [],
    setTiers: (data) => set({ tiers: data }),
    selectedTier: null,
    setSelectedTier: (data) => set({ selectedTier: data }),
  }))
);
export const getVideoCount = (tierId: string) => {
  const videoCounts: Record<string, string> = {
    tier1: "100 videos",
    tier2: "500 videos",
    tier3: "Unlimited",
  };
  return videoCounts[tierId] || "Unknown";
};

export const getRemainingVideos = (tierId: string, selected: number) => {
  const totalVideos: Record<string, number> = {
    tier1: 100,
    tier2: 500,
    tier3: Infinity, // Unlimited case
  };

  const maxVideos = totalVideos[tierId] || 0;
  return maxVideos === Infinity
    ? "Unlimited"
    : Math.max(maxVideos - selected, 0);
};
