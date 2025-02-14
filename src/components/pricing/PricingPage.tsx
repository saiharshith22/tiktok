import { Check, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  getVideoCount,
  TierDetails,
  useTierStore,
} from "../../store/useTierDetailsStore";
import {
  Banner,
  Button,
  Container,
  DiscountBanner,
  Feature,
  FeatureList,
  LeftSection,
  PlanName,
  PopularBadge,
  Price,
  PriceText,
  PricingCard,
  PricingContainer,
  RegularPrice,
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
        {tiers.map((tier, index) => (
          <PricingCard key={tier.id} featured={index === 1}>
            {index === 1 && <PopularBadge>Most Popular</PopularBadge>}
            <PlanName>{tier.description}</PlanName>
            <VideoCount>
              <VideoCount>{getVideoCount(tier.id)}</VideoCount>
            </VideoCount>
            <Price>
              {tier.price} <PriceText>/video</PriceText>
            </Price>
            <RegularPrice>Regular $0.15</RegularPrice>

            <FeatureList>
              {Object.values(tier.features).map((feature, i) => (
                <Feature key={i}>
                  <Check
                    size={16}
                    color={index === 1 ? "#ffffff" : "#10B981"}
                  />{" "}
                  {feature}
                </Feature>
              ))}
            </FeatureList>

            <Button
              featured={index === 1}
              onClick={() => handlePlaceOrder(tier)}
            >
              Choose Plan
            </Button>
          </PricingCard>
        ))}
      </PricingContainer>
    </Container>
  );
};

export default PricingPage;
