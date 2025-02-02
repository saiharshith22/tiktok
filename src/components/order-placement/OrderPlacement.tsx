import { useNavigate } from "react-router-dom";
import ApplePay from "../../assets/images/ApplePay.svg";
import CheckIcon from "../../assets/images/CheckIcon.svg";
import CreditCard from "../../assets/images/Creditcard.svg";
import DebitCard from "../../assets/images/DebitCard.svg";
import GooglePay from "../../assets/images/Gpay.svg";
import SslEncryptedIcon from "../../assets/images/Lock 1.svg";
import MoneyGuranteeIcon from "../../assets/images/MoneyGuranteeIcon.svg";
import PhonePay from "../../assets/images/PhonePay.svg";
import ShieldCheckIcon from "../../assets/images/ShieldCheckIcon.svg";
import OrganizatinImg from "../../assets/images/image 1.svg";
import Paypal from "../../assets/images/paypalIcon.svg";
import {
  BasicDetails,
  Button,
  CancelButton,
  Card,
  CompleteButton,
  Container,
  ContentRow,
  DisclaimerText,
  Discount,
  DiscountLabel,
  DiscountSection,
  DiscountValue,
  FinalAmount,
  FinalAmountLabel,
  FinalAmountValue,
  Grid,
  HeaderRow,
  Input,
  InputGroup,
  LoyalityContainer,
  LoyaltySection,
  LoyaltyText,
  OrderPlacementButtons,
  PaymentContainer,
  PaymentGrid,
  PaymentIcon,
  PaymentLabel,
  PaymentOption,
  PlanTitle,
  PointsText,
  PriceRow,
  PriceRowHeading,
  PriceRowValue,
  PricingDetails,
  Progress,
  ProgressBar,
  ProgressContainer,
  RedeemLink,
  RedeemLinkContainer,
  RefundBadge,
  SectionTitle,
  SecurityBadge,
  SecurityBadges,
  SmallText,
  StatLabel,
  StatNumber,
  Title,
  TitleContainer,
  TrustBadges,
  TrustSection,
  TrustText,
  VideoCount,
  VideoDetails,
  VideoStats,
} from "./styled.components";
const OrderPlacement = () => {
  const navigate = useNavigate();
  const handleNavigateThankyou = () => {
    navigate("/thankyou");
  };
  return (
    <Container>
      <TitleContainer>
        <Title>Confirm Your Order</Title>
      </TitleContainer>
      <Grid>
        <div>
          <SectionTitle>Order Summary</SectionTitle>
          <Card>
            <BasicDetails>
              <PlanTitle>
                Basic Plan
                <VideoCount>100 videos</VideoCount>
              </PlanTitle>
              <ProgressBar>
                <Progress />
              </ProgressBar>
              <ProgressContainer>
                <VideoStats>
                  <VideoDetails>
                    <StatLabel>Videos Selected</StatLabel>
                    <StatNumber>10</StatNumber>
                  </VideoDetails>
                  <VideoDetails>
                    <StatLabel>Remaining videos</StatLabel>
                    <StatNumber>90</StatNumber>
                  </VideoDetails>
                </VideoStats>
              </ProgressContainer>
            </BasicDetails>

            <PricingDetails>
              <PriceRow>
                <PriceRowHeading>Regular price (10 x $0.10)</PriceRowHeading>
                <PriceRowValue>$1.00</PriceRowValue>
              </PriceRow>
              <Discount>
                <DiscountLabel>30% Early Bird Discount</DiscountLabel>
                <DiscountValue>-$0.70</DiscountValue>
              </Discount>
              <SmallText>(Only $0.07 per video) You save $0.30 !</SmallText>

              <FinalAmount>
                <FinalAmountLabel>Final Amount</FinalAmountLabel>
                <FinalAmountValue>$0.3</FinalAmountValue>
              </FinalAmount>
            </PricingDetails>
          </Card>

          <DiscountSection>
            <InputGroup>
              <Input placeholder="Enter discount code" />
              <Button>Apply Code</Button>
            </InputGroup>
          </DiscountSection>
          <LoyaltySection>
            <LoyalityContainer>
              <HeaderRow>
                <img src={CheckIcon} alt="" />
                <LoyaltyText>Available Loyalty Awards</LoyaltyText>
              </HeaderRow>
              <ContentRow>
                <PointsText>
                  You have 100 loyalty points available. Use them to get
                  additional discounts
                </PointsText>
              </ContentRow>
            </LoyalityContainer>
            <RedeemLinkContainer>
              <RedeemLink href="#">Redeem Now</RedeemLink>
            </RedeemLinkContainer>
          </LoyaltySection>
        </div>

        <div>
          <PaymentContainer>
            <SectionTitle>Payment Method</SectionTitle>
            <PaymentGrid>
              <PaymentOption>
                <PaymentIcon src={CreditCard} alt="" />
                <PaymentLabel>Credit Card</PaymentLabel>
              </PaymentOption>
              <PaymentOption>
                <PaymentIcon src={Paypal} alt="" />
                <PaymentLabel>PayPal</PaymentLabel>
              </PaymentOption>
              <PaymentOption>
                <PaymentIcon src={GooglePay} alt="" />
                <PaymentLabel>Google Pay</PaymentLabel>
              </PaymentOption>
              <PaymentOption>
                <PaymentIcon src={PhonePay} alt="" />
                <PaymentLabel>Phone Pay</PaymentLabel>
              </PaymentOption>
              <PaymentOption>
                <PaymentIcon src={ApplePay} alt="" />
                <PaymentLabel>Apple Pay</PaymentLabel>
              </PaymentOption>
              <PaymentOption>
                <PaymentIcon src={DebitCard} alt="" />
                <PaymentLabel>Debit Card</PaymentLabel>
              </PaymentOption>
            </PaymentGrid>
            <SecurityBadges>
              <SecurityBadge>
                <img src={ShieldCheckIcon} alt="" /> Secure Checkout
              </SecurityBadge>
              <SecurityBadge>
                <img src={MoneyGuranteeIcon} alt="" /> Money Back Guarantee
              </SecurityBadge>
              <SecurityBadge>
                <img src={SslEncryptedIcon} alt="" /> SSL Encrypted
              </SecurityBadge>
            </SecurityBadges>
            <OrderPlacementButtons>
              <CompleteButton onClick={handleNavigateThankyou}>
                Complete Payment
              </CompleteButton>
              <CancelButton>Cancel & Go Back</CancelButton>
            </OrderPlacementButtons>

            <DisclaimerText>
              By completing this payment, you agree to our Terms of Service and
              Privacy Policy. Your videos will be processed securely
            </DisclaimerText>
            <RefundBadge>
              <img src={CheckIcon} alt="" />
              100% Refund if videos aren't recovered
            </RefundBadge>
            <TrustSection>
              <TrustBadges>
                <img src={OrganizatinImg} alt="" />
              </TrustBadges>
              <TrustText>Trusted by 100,000+ users worldwide</TrustText>
            </TrustSection>
          </PaymentContainer>
        </div>
      </Grid>
    </Container>
  );
};

export default OrderPlacement;
