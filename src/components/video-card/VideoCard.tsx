"use client";

import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { Play, Pause } from "lucide-react";

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  background: #000;
  cursor: pointer;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

  ${VideoContainer}:hover & {
    opacity: 1;
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
  gap: 1rem;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

interface VideoCardProps {
  title: string;
  views: string;
  timeAgo: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoCard({
  title = "Big Buck Bunny",
  views = "1.2M",
  timeAgo = "2 months ago",
  videoUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnailUrl = "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
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

  return (
    <Card>
      <VideoContainer onClick={togglePlay}>
        <Video
          ref={videoRef}
          poster={thumbnailUrl}
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
