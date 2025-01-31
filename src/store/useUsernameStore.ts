import { create } from "zustand";
import { devtools } from "zustand/middleware";

type UserProfileData = {
  username: string;
  uniqueId: string;
  nickname: string;
  avatarThumb: string;
  followerCount: number;
  followingCount: number;
  heartCount: number;
  videoCount: number;
  videos: string[];
  count: number;
  bio?: string;
};

type UsernameState = {
  username: string;
  setUsername: (value: string) => void;
  userProfileData: UserProfileData;
  setUserProfileData: (data: UserProfileData) => void;
};

export const useUsernameStore = create<UsernameState>()(
  devtools((set) => ({
    username: "",
    setUsername: (value) => set({ username: value }),
    userProfileData: {},
    setUserProfileData: (data) => set({ userProfileData: data }),
  }))
);

// declare userProfileData, setUserProfileData
