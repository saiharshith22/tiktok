import FeedbackForm from "../feedback/Feedback";
import PremiumFeatures from "../premium-features/PremiumFeatures";
import TestimonialCard from "../testimonials/TestimonialCard";
import FAQs from "./faqs/FAQs";
import { MainContent } from "./styled.components";
import TikTokRecovery from "./TickTokRecovery";

const HomePage = () => {
  return (
    <>
      <MainContent>
        <TikTokRecovery />
      </MainContent>
      <PremiumFeatures />
      <TestimonialCard />
      <FAQs />
      <FeedbackForm />
    </>
  );
};

export default HomePage;
