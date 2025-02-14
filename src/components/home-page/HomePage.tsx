import FeedbackForm from "../feedback/Feedback";
import PremiumFeatures from "../premium-features/PremiumFeatures";
import TestimonialCard from "../testimonials/TestimonialCard";
import FAQs from "./faqs/FAQs";
import { MainContent } from "./styled.components";
import TikTokRecovery from "./TickTokRecovery";
import TikTokEmbed from "./TikTokEmbed";

const HomePage = () => {
  const video = {
    id: "",
    link: "",
    video_url: "https://www.tiktok.com/@riccardoo669/video/7468861981924035871",
    image: "",
    desc: "Look what happens when she turns it on...",
    stats: "",
    statsV2: "",
    comment: 1,
    share: 0,
    play: 120,
    digg: 1,
  };
  return (
    <>
      <MainContent>
        <TikTokRecovery />
        <br />
        <div className="card">
          <TikTokEmbed videoUrl={video.video_url} />
          <div className="card-body">
            <p>{video.desc}</p>
          </div>
        </div>
      </MainContent>
      <PremiumFeatures />
      <TestimonialCard />
      <FAQs />
      <FeedbackForm />
    </>
  );
};

export default HomePage;
