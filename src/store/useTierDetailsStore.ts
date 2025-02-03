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
