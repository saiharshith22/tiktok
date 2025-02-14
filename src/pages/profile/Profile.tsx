import { useRef, useState } from "react";
import { TikTokEmbed } from "react-social-media-embed";
import styled from "styled-components";
import IconButton from "../../components/icon-button/IconButton";
import ProfileCard from "../../components/profile-card/ProfileCard";
import VideoHeader from "../../components/video-card/VideoHeader";
// import { useUsernameStore } from "../../store/useUsernameStore";

const Profile = () => {
  // const {
  //   userProfileData: { videos },
  // } = useUsernameStore();

  // const sampleVideos = [
  //   "https://videos.pexels.com/video-files/6853337/6853337-uhd_1440_2732_25fps.mp4",
  //   "https://videos.pexels.com/video-files/8113104/8113104-hd_1080_1920_30fps.mp4",
  //   "https://videos.pexels.com/video-files/4727536/4727536-uhd_1440_2560_25fps.mp4",
  //   "https://videos.pexels.com/video-files/6193112/6193112-hd_1080_1920_30fps.mp4",
  //   "https://videos.pexels.com/video-files/6003997/6003997-uhd_1440_2560_30fps.mp4",
  //   "https://videos.pexels.com/video-files/5198956/5198956-uhd_1440_2732_25fps.mp4",
  //   "https://videos.pexels.com/video-files/6853337/6853337-uhd_1440_2732_25fps.mp4",
  //   "https://videos.pexels.com/video-files/8113104/8113104-hd_1080_1920_30fps.mp4",
  //   "https://videos.pexels.com/video-files/6193112/6193112-hd_1080_1920_30fps.mp4",
  //   "https://videos.pexels.com/video-files/6003997/6003997-uhd_1440_2560_30fps.mp4",
  //   "https://videos.pexels.com/video-files/5198956/5198956-uhd_1440_2732_25fps.mp4",
  //   "https://videos.pexels.com/video-files/4727536/4727536-uhd_1440_2560_25fps.mp4",
  // ];

  const [toggleRecoverVideos, setToggleRecoverVideos] =
    useState<boolean>(false);

  const divRef = useRef<HTMLDivElement>(null);

  const handleRecoverVideos = () => {
    setToggleRecoverVideos((toggle) => !toggle);
    if (divRef.current && !toggleRecoverVideos) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videos = [
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468864000026086687",
      image: "",
      desc: "whitening teeth with Pam spray and Salt!",
      stats: "",
      statsV2: "",
      comment: 1,
      share: 0,
      play: 129,
      digg: 3,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468863987078270238",
      image: "",
      desc: "whitening teeth with Pam spray and Salt!",
      stats: "",
      statsV2: "",
      comment: 4,
      share: 0,
      play: 544,
      digg: 9,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468861981924035871",
      image: "",
      desc: "Look what happens when she turns it on...",
      stats: "",
      statsV2: "",
      comment: 1,
      share: 0,
      play: 120,
      digg: 1,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468861956099804447",
      image: "",
      desc: "Look what happens when she turns it on...",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 0,
      play: 32,
      digg: 0,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468495145910979870",
      image: "",
      desc: "Watch what happen when they pull the last string\u2026 \ud83d\ude2f",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 0,
      play: 204,
      digg: 1,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468494940251639071",
      image: "",
      desc: "Watch what happen when they pull the last string\u2026 \ud83d\ude2f",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 0,
      play: 189,
      digg: 0,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468494601666448670",
      image: "",
      desc: "This pizza delivery prank made her scream ! \ud83d\ude02",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 0,
      play: 190,
      digg: 1,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468494563984952606",
      image: "",
      desc: "This pizza delivery prank made her scream ! \ud83d\ude02",
      stats: "",
      statsV2: "",
      comment: 3,
      share: 1,
      play: 882,
      digg: 27,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468125221116054814",
      image: "",
      desc: "When The Cops open The Evidence Bag",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 2,
      play: 642,
      digg: 8,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468125228023958815",
      image: "",
      desc: "When The Cops open The Evidence Bag",
      stats: "",
      statsV2: "",
      comment: 4,
      share: 1,
      play: 1461,
      digg: 8,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468124622068763934",
      image: "",
      desc: "The shocking impact this habit has on your health.",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 0,
      play: 475,
      digg: 0,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7468124637260451103",
      image: "",
      desc: "The shocking impact this habit has on your health.",
      stats: "",
      statsV2: "",
      comment: 1,
      share: 0,
      play: 768,
      digg: 2,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467745801700232478",
      image: "",
      desc: "THAT was in his eye\uff1f",
      stats: "",
      statsV2: "",
      comment: 20,
      share: 30,
      play: 14649,
      digg: 126,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467745811506498847",
      image: "",
      desc: "THAT was in his eye\uff1f",
      stats: "",
      statsV2: "",
      comment: 16,
      share: 20,
      play: 16768,
      digg: 80,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467744490078391582",
      image: "",
      desc: "That popped so loud",
      stats: "",
      statsV2: "",
      comment: 241,
      share: 3841,
      play: 155247,
      digg: 12310,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467744413205237022",
      image: "",
      desc: "That popped so loud",
      stats: "",
      statsV2: "",
      comment: 36,
      share: 220,
      play: 61545,
      digg: 937,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467034029582241054",
      image: "",
      desc: "That turned out amazing",
      stats: "",
      statsV2: "",
      comment: 13,
      share: 0,
      play: 2485,
      digg: 22,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467034018588970270",
      image: "",
      desc: "That turned out amazing",
      stats: "",
      statsV2: "",
      comment: 3,
      share: 0,
      play: 1884,
      digg: 13,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467029090025983263",
      image: "",
      desc: "SHE GOT IT RIGHT IN THE FACE \ud83e\udd23",
      stats: "",
      statsV2: "",
      comment: 2,
      share: 5,
      play: 1365,
      digg: 77,
    },
    {
      id: "",
      link: "",
      video_url:
        "https://www.tiktok.com/@riccardoo669/video/7467027998542138654",
      image: "",
      desc: "SHE GOT IT RIGHT IN THE FACE \ud83e\udd23",
      stats: "",
      statsV2: "",
      comment: 0,
      share: 0,
      play: 1358,
      digg: 37,
    },
  ];

  return (
    <div style={{ padding: "2rem" }} ref={divRef}>
      <ProfileCard />
      <VideoHeader />
      <VideoGrid>
        {videos?.map((video) => (
          // <VideoCard
          //   key={i}
          //   title="Big Buck Bunny"
          //   views="1.2M"
          //   timeAgo="2 months ago"
          //   videoUrl={video.video_url}
          //   toggleVideos={toggleRecoverVideos}
          // />
          <div
            style={{ display: "flex", justifyContent: "center" }}
            key={video.video_url}
          >
            <TikTokEmbed
              url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
              width={325}
            />
          </div>
        ))}
      </VideoGrid>
      <IconButton
        onClick={handleRecoverVideos}
        label={`${
          toggleRecoverVideos ? "Proceed" : "Select Videos to recover"
        }`}
        backgroundColor="#1E222B"
        color="#FCFCFD"
        styles={{
          marginTop: "6.32rem",
          borderRadius: 8,
          textAlign: "center",
          font: "500 16px/normal Inter",
          letterSpacing: "0.024px",
          width: "100%",
          padding: "16px",
        }}
      />
      <IconButton
        label={"View More Videos"}
        backgroundColor="#FFFFFF"
        color="#4B5363"
        styles={{
          borderRadius: 8,
          marginTop: "24px",
          border: "1px solid #4B5363",
          textAlign: "center",
          font: "500 16px/normal Inter",
          letterSpacing: "0.024px",
          width: "100%",
          padding: "16px",
        }}
      />
    </div>
  );
};

export default Profile;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(264px, 1fr)
  ); // Default for larger screens
  gap: 16px; // Gap between video cards
  justify-items: center;
  padding: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(180px, 1fr)
    ); // Mobile-friendly columns
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(
      auto-fill,
      minmax(150px, 1fr)
    ); // Adjusting for very small screens
  }
`;
