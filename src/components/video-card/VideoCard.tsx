"use client";

import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { Play, Pause } from "lucide-react";
import CustomCheckbox from "./CheckboxWrapper";
import { useUsernameStore } from "../../store/useUsernameStore";

const Card = styled.div`
  position: relative;
  background: #fcfcfd;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: translateY(-2px);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  aspect-ratio: 9 / 16;
  background: #000;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px 10px 0px 0px;
`;

const PlayButton = styled.button<{ isPlaying: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.2s;
  opacity: ${(props) => (props.isPlaying ? 0 : 1)};
  &:hover {
    background: white;
  }
`;

const ContentInfo = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #1f2937;
  font-weight: 500;
`;

const MetaData = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

interface VideoCardProps {
  readonly title: string;
  readonly views: string;
  readonly timeAgo: string;
  readonly videoUrl: string;
  readonly toggleVideos: boolean;
}

export default function VideoCard({
  title = "Big Buck Bunny",
  views = "1.2M",
  timeAgo = "2 months ago",
  videoUrl,
  toggleVideos = false,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback(async () => {
    if (!videoRef.current || isLoading) return;

    try {
      setIsLoading(true);

      if (isPlaying) {
        await videoRef.current.pause();
        setIsPlaying(false);
      } else {
        if (videoRef.current.readyState < 2) {
          await new Promise((resolve) => {
            const handleCanPlay = () => {
              videoRef.current?.removeEventListener("canplay", handleCanPlay);
              resolve(true);
            };
            videoRef.current?.addEventListener("canplay", handleCanPlay);
          });
        }

        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Video playback error:", error);
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  }, [isPlaying, isLoading]);

  const handleVideoEnd = useCallback(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleVideoError = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      console.error("Video error:", e);
      setIsPlaying(false);
      setIsLoading(false);
    },
    []
  );

  const { setSelectedVideos, selectedVideos } = useUsernameStore();

  const handleSelect = (videoUrl: string) => {
    setSelectedVideos(videoUrl);
  };

  // Check if the video URL is from TikTok
  const isTikTokVideo = (url: string) => url.includes("tiktok.com");

  // Extract TikTok Video ID
  const getTikTokVideoId = (url: string) => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : null;
  };
  console.log(
    "video",
    `https://www.tiktok.com/embed/${getTikTokVideoId(videoUrl)}`
  );

  return (
    <Card onClick={() => handleSelect(videoUrl)}>
      <CustomCheckbox
        videoUrl={videoUrl}
        selectedCards={selectedVideos}
        toggleVideos={toggleVideos}
      />

      {isTikTokVideo(videoUrl) ? (
        // Embed TikTok video using iframe
        <VideoContainer>
          <Iframe
            src={`https://www.tiktok.com/embed/${getTikTokVideoId(videoUrl)}`}
            allow="autoplay; encrypted-media"
          />
          <PlayButton
            isPlaying={isPlaying}
            disabled={isLoading}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </PlayButton>
        </VideoContainer>
      ) : (
        // Regular MP4 Video Player
        <VideoContainer onClick={togglePlay}>
          <Video
            ref={videoRef}
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            playsInline
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
          <PlayButton
            isPlaying={isPlaying}
            disabled={isLoading}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </PlayButton>
        </VideoContainer>
      )}

      <ContentInfo>
        <Title>{title}</Title>
        <MetaData>
          <span>{views} views</span>
          <span>{timeAgo}</span>
        </MetaData>
      </ContentInfo>
    </Card>
  );
}
