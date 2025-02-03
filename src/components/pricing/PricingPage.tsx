import { Check, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ApplePayCard from "../../assets/images/ApplePayCard.svg";
import RewardIcon from "../../assets/images/GiftIcon.svg";
import Gpay from "../../assets/images/Gpay.svg";
import InstantIcon from "../../assets/images/InstantAccess.svg";
import MasterCard from "../../assets/images/materCard.svg";
import PaypalCard from "../../assets/images/PayPalCard.svg";
import PremiumIcon from "../../assets/images/Premium.svg";
import ShieldCheckIcon from "../../assets/images/ShieldCheckIcon.svg";
import VisaCard from "../../assets/images/VisaIcon.svg";
import { TierDetails, useTierStore } from "../../store/useTierDetailsStore";
import {
  Banner,
  BenefitsGrid,
  Button,
  Card,
  CardIcon,
  CardSubtitle,
  CardTitle,
  Container,
  DiscountBanner,
  Feature,
  FeatureList,
  Features,
  IconImage,
  LeftSection,
  PaymentIcons,
  PaymentMethods,
  PlanName,
  PopularBadge,
  Price,
  PricingCard,
  PricingContainer,
  RegularPrice,
  SecurePaymentTitle,
  Separator,
  Subtitle,
  Text,
  TimeBox,
  TimeSection,
  Title,
  VideoCount,
} from "./styled.components";

const PricingPage = () => {
  const { tiers, setSelectedTier } = useTierStore();

  const navigate = useNavigate();
  const handlePlaceOrder = (tier: TierDetails) => {
    setSelectedTier(tier);
    navigate("/orderplacement");
  };
  return (
    <Container>
      <Title>Recover Your Precious TikTok Memories</Title>
      <Subtitle>
        Join 100,000+ satisfied users who've already recovered their content
      </Subtitle>

      <DiscountBanner>
        Save 30% on all plans today, for first 100 customers
        <Banner>
          <LeftSection>
            <Clock size={20} />
            <Text>Limited Time Offer Ends In:</Text>
          </LeftSection>
          <TimeSection>
            <TimeBox>02</TimeBox>
            <Separator>:</Separator>
            <TimeBox>34</TimeBox>
            <Separator>:</Separator>
            <TimeBox>21</TimeBox>
          </TimeSection>
        </Banner>
      </DiscountBanner>

      <PricingContainer>
        <PricingCard>
          <PlanName>{tiers[0]?.description ?? "Basic Plan"}</PlanName>
          <VideoCount>100 videos</VideoCount>
          <Price>
            {tiers[0]?.price ?? "100"}
            <span>/video</span>
          </Price>
          <RegularPrice>Regular $0.15</RegularPrice>
          <FeatureList>
            <Feature>
              <Check size={16} color="#10B981" /> 2 free downloads
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> Recover upto 100 videos
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> Basic Support
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> Standard Quality
            </Feature>
          </FeatureList>
          <Button onClick={() => handlePlaceOrder(tiers[0])}>
            Choose Plan
          </Button>
        </PricingCard>

        <PricingCard featured>
          <PopularBadge>Most Popular</PopularBadge>
          <PlanName>{tiers[1]?.description ?? "Standard Plan"}</PlanName>
          <VideoCount>500 videos</VideoCount>
          <Price>
            {tiers[1]?.price ?? "200"} <span>/video</span>
          </Price>
          <RegularPrice>Regular $0.15</RegularPrice>
          <FeatureList>
            <Feature>
              <Check size={16} color="#ffffff" /> 5 free downloads
            </Feature>
            <Feature>
              <Check size={16} color="#ffffff" /> Recover upto 500 videos
            </Feature>
            <Feature>
              <Check size={16} color="#ffffff" /> Priority Support
            </Feature>
            <Feature>
              <Check size={16} color="#ffffff" /> HD Quality
            </Feature>
            <Feature>
              <Check size={16} color="#ffffff" /> 10% off on future upgrades
            </Feature>
            <Feature>
              <Check size={16} color="#ffffff" /> Batch Processing
            </Feature>
          </FeatureList>
          <Button featured onClick={() => handlePlaceOrder(tiers[1])}>
            Choose Plan
          </Button>
        </PricingCard>

        <PricingCard>
          <PlanName>{tiers[2]?.description ?? "Premium Plan"}</PlanName>
          <VideoCount>Unlimited</VideoCount>
          <Price>
            {tiers[2]?.price ?? "300"} <span>/video</span>
          </Price>
          <RegularPrice>Regular $0.17</RegularPrice>
          <FeatureList>
            <Feature>
              <Check size={16} color="#10B981" /> 10 free downloads
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> Unlimited recovery
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> 24/7 Premium Support
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> 4K Quality
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> $10 referral bonus
            </Feature>
            <Feature>
              <Check size={16} color="#10B981" /> Priority recovery
            </Feature>
          </FeatureList>
          <Button onClick={() => handlePlaceOrder(tiers[2])}>
            Choose Plan
          </Button>
        </PricingCard>
      </PricingContainer>

      <BenefitsGrid>
        <Features>
          <Card
            bgColor="#F5F3FF"
            shadow=" 0px 23.333px 46.667px 0px rgba(49, 49, 51, 0.24), 0px -7.259px 7.259px 0px #E3E1EC inset, 0px 7.259px 7.259px 0px #FFF inset"
          >
            <CardIcon src={RewardIcon} alt="" />
            <CardTitle>Loyalty Rewards</CardTitle>
            <CardSubtitle>Earn points for discounts</CardSubtitle>
          </Card>
          <Card
            bgColor="#EFF6FF"
            shadow="0px 23.333px 46.667px 0px rgba(48, 49, 51, 0.24), 0px -7.259px 7.259px 0px #DDE4EC inset, 0px 7.259px 7.259px 0px #FDFFFF inset"
          >
            <CardIcon src={PremiumIcon} alt="" />
            <CardTitle>Premium Features</CardTitle>
            <CardSubtitle>Early access to new tools</CardSubtitle>
          </Card>
          <Card
            bgColor="#ECFDF5"
            shadow="0px 23.333px 46.667px 0px rgba(47, 51, 49, 0.24), 0px -7.259px 7.259px 0px #DAEAE3 inset, 0px 7.259px 7.259px 0px #FAFFFF inset"
          >
            <CardIcon src={ShieldCheckIcon} alt="" />
            <CardTitle>Secure Process</CardTitle>
            <CardSubtitle>Encrypted Recovery</CardSubtitle>
          </Card>
          <Card
            bgColor="#FFF7ED"
            shadow="0px 23.333px 46.667px 0px rgba(51, 49, 47, 0.24), 0px -7.259px 7.259px 0px #ECE4DB inset, 0px 7.259px 7.259px 0px #FFFFFB inset"
          >
            <CardIcon src={InstantIcon} alt="" />
            <CardTitle>Instant Access</CardTitle>
            <CardSubtitle>No waiting time</CardSubtitle>
          </Card>
        </Features>

        <PaymentMethods>
          <SecurePaymentTitle>Secure Payment Methods</SecurePaymentTitle>
          <PaymentIcons>
            <IconImage src={VisaCard} alt="Visa Card" />
            <IconImage src={MasterCard} alt="Master Card" />
            <IconImage src={PaypalCard} alt="Paypal Card" />
            <IconImage src={ApplePayCard} alt="Apple Pay Card" />
            <IconImage src={Gpay} alt="Google Pay" />
          </PaymentIcons>
        </PaymentMethods>
      </BenefitsGrid>
    </Container>
  );
};
export default PricingPage;
