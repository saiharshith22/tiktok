import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Video = {
  id: string;
  link: string;
  video_url: string;
  image: string;
  desc: string;
  stats: string;
  statsV2: string;
  comment: number;
  share: number;
  play: number;
  digg: number;
};

type UserProfileData = {
  username: string;
  uniqueId: string;
  nickname: string;
  avatarThumb: string;
  followerCount: number;
  followingCount: number;
  heartCount: number;
  videoCount: number;
  videos: Video[];
  count: number;
  bio?: string;
};

type UsernameState = {
  username: string;
  setUsername: (value: string) => void;
  userProfileData: UserProfileData;
  setUserProfileData: (data: UserProfileData) => void;
  selectedVideos: string[];
  setSelectedVideos: (data: string) => void;
};

export const useUsernameStore = create<UsernameState>()(
  devtools((set) => ({
    username: "",
    setUsername: (value) => set({ username: value }),
    userProfileData: {} as UserProfileData,
    setUserProfileData: (data) => set({ userProfileData: data }),

    selectedVideos: [],
    noOfVideosSelected: 0,
    setSelectedVideos: (videoUrl: string) =>
      set((state) => {
        const { selectedVideos } = state;
        const newSelectedVideos = selectedVideos.includes(videoUrl)
          ? selectedVideos.filter((url) => url !== videoUrl)
          : [...selectedVideos, videoUrl];
        return {
          selectedVideos: newSelectedVideos,
          noOfVideosSelected: newSelectedVideos.length,
        };
      }),
  }))
);

// declare userProfileData, setUserProfileData
