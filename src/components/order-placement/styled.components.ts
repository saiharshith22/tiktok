import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  background-color: #f8f9fc;
  min-height: 100vh;
`;
export const TitleContainer = styled.div`
  margin-bottom: 40px;
`;
export const Title = styled.text`
  color: #1f2737;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
  letter-spacing: 0.08px;
  text-align: left;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const BasicDetails = styled.div`
  border-radius: 10px;
  background: #eeeff1;
  padding: 24px;
`;

export const SectionTitle = styled.span`
  color: #1f2737;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 109.091% */
`;

export const Card = styled.div`
  border-radius: 10px;
  background: #fcfcfd;
  padding: 32px;
  margin-top: 32px;
`;

export const PlanTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #1f2737;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.024px;
`;

export const VideoCount = styled.span`
  color: v #1f2737;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.014px;
`;

export const ProgressContainer = styled.div`
  margin: 0px 0;
`;

export const ProgressBar = styled.div`
  background: #fff;
  border-radius: 12px;
  height: 6px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const Progress = styled.div`
  background: #8e59ff;
  height: 100%;
  width: 10%;
  border-radius: 12px;
`;

export const VideoStats = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const StatNumber = styled.div`
  color: #1f2737;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 109.091% */
  letter-spacing: 0.022px;
`;

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StatLabel = styled.div`
  color: #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.014px;
`;

export const PricingDetails = styled.div`
  border-radius: 10px;
  padding: 24px 24px 0px 24px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;
export const PriceRowHeading = styled.div`
  color: #4b5363;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.024px;
`;
export const PriceRowValue = styled(PriceRowHeading)`
  color: #1f2737;
`;

export const Discount = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DiscountLabel = styled(PriceRowHeading)`
  color: #16a34a;
  font-family: Inter;
  line-height: normal;
`;
export const DiscountValue = styled(PriceRowValue)`
  line-height: 24px; /* 150% */
  color: #16a34a;
`;

export const SmallText = styled.div`
  border-radius: 10px;
  background: #f2fdf6;
  padding: 16px;
  color: #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.014px;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const FinalAmount = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d1d5dc;
  padding-top: 16px;
`;
export const FinalAmountLabel = styled.span`
  color: #1f2737;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const FinalAmountValue = styled(FinalAmountLabel)`
  line-height: 24px; /* 120% */
`;

export const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6f767e;
`;

export const DiscountSection = styled.div`
  margin-top: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 20px 8px 20px 16px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fcfcfd;
  font-size: 14px;

  &::placeholder {
    color: #8f96a3;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.08px;
  }
`;

export const Button = styled.button`
  padding: 16px;
  border-radius: 8px;
  background: #1e222b;
  color: #fcfcfd;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.175px;
  cursor: pointer;
`;

export const LoyaltySection = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
  gap: 44px;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

export const CheckIcon = styled.span`
  color: #22c55e;
  font-size: 20px;
`;
export const LoyalityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const RedeemLinkContainer = styled.div`
  display: flex;
  align-items: end;
`;
export const LoyaltyText = styled.h2`
  margin: 0;
  color: #1f2737;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.014px;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PointsText = styled.p`
  margin: 0;
  color: #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.014px;
`;

export const RedeemLink = styled.a`
  text-decoration: none;
  color: #7c3aed;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.014px;

  &:hover {
    text-decoration: underline;
  }
`;

export const PaymentContainer = styled.div`
  // width: 100%;
  // max-width: 400px;
  margin: 0 auto;
`;

export const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
  margin-top: 32px;
`;

export const PaymentOption = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: white;
  border-radius: 10px;
  border: 1px solid #d1d5dc;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #302d2df2;
  }
`;

export const PaymentIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

export const PaymentLabel = styled.span`
  color: #4b5363;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.024px;
`;

export const SecurityBadges = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 24px 0;
`;

export const SecurityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.014px;
`;

export const CompleteButton = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: #1e222b;
  color: #fcfcfd;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  cursor: pointer;
`;

export const CancelButton = styled(CompleteButton)`
  border-radius: 8px;
  border: 1px solid #d1d5dc;
  color: #4b5363;
  background: #f3f4f7;
`;
export const OrderPlacementButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const TrustSection = styled.div`
  margin-top: 44px;
  text-align: center;
`;

export const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;


export const TrustText = styled.p`
  color: #4b5363;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.014px;
  margin: 0;
`;

export const DisclaimerText = styled.p`
  color: #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.014px;
  margin-top: 16px;
`;

export const RefundBadge = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 24px;
  justify-content: center;
  text-align: center;
  color: #16a34a;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.014px;
`;
