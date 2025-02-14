import React, { useEffect } from "react";

declare global {
  interface Window {
    tiktokEmbed?: () => void;
  }
}

interface TikTokEmbedProps {
  videoUrl: string;
}

const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ videoUrl }) => {
  useEffect(() => {
    // When the component mounts, the TikTok embed script should process the blockquote
    if (window.tiktokEmbed) {
      window.tiktokEmbed();
    }
  }, [videoUrl]);

  // Extract video id using regex (adjust as needed)
  const videoIdMatch = videoUrl.match(/video\/(\d+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : "";

  return (
    <blockquote
      className="tiktok-embed"
      cite={videoUrl}
      data-video-id={videoId}
      style={{ maxWidth: "605px", minWidth: "325px" }}
    >
      <section></section>
    </blockquote>
  );
};

export default TikTokEmbed;
