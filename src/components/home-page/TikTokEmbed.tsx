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
    // Dynamically load the TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Check if the function exists before calling it
      if (typeof window.tiktokEmbed === "function") {
        window.tiktokEmbed();
      }
    };

    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
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
