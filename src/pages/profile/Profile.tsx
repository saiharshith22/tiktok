import styled from "styled-components";
import ProfileCard from "../../components/profile-card/ProfileCard";
import VideoCard from "../../components/video-card/VideoCard";
import VideoHeader from "../../components/video-card/VideoHeader";
import { useUsernameStore } from "../../store/useUsernameStore";
import { useRef, useState } from "react";
import IconButton from "../../components/icon-button/IconButton";

const Profile = () => {
  const {
    userProfileData: { videos },
  } = useUsernameStore();

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

  return (
    <div style={{ padding: "2rem" }} ref={divRef}>
      <ProfileCard />
      <VideoHeader />
      <VideoGrid>
        {videos?.map((video, i) => (
          <VideoCard
            key={i}
            title="Big Buck Bunny"
            views="1.2M"
            timeAgo="2 months ago"
            videoUrl={video.video_url}
            toggleVideos={toggleRecoverVideos}
          />
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
