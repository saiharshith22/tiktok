import VideoCard from "../../components/video-card/VideoCard";

const Profile = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <VideoCard
        title="Big Buck Bunny"
        views="1.2M"
        timeAgo="2 months ago"
        videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        thumbnailUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      />
    </div>
  );
};

export default Profile;
