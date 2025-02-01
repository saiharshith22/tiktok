import PremiumFeatures from "../premium-features/PremiumFeatures";
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
      <FAQs />
    </>
  );
};

export default HomePage;
