import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UsernameState = {
  username: string;
  setUsername: (value: string) => void;
};

export const useUsernameStore = create<UsernameState>()(
  devtools((set) => ({
    username: "",
    setUsername: (value) => set({ username: value }),
  }))
);

// declare userProfileData, setUserProfileData
