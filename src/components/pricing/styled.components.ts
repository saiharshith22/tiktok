import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  background: linear-gradient(90deg, #7c3aed 0%, #db2777 98.7%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Inter, sans-serif;
  font-size: 47px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 34px;
  }
`;

export const Subtitle = styled.span`
  color: var(--Primary-Color-Light-Text-1, #4b5363);
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 90.909% */
  margin-top: 16px;
  margin-bottom: 50px;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DiscountBanner = styled.div`
  color: #1f2737;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 100% */
  letter-spacing: 0.08px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    line-height: 18px;
    gap: 16px;
  }
`;

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  padding: 16px 32px;
  border-radius: 12px;
  color: white;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    padding: 12px 0;
  }

  @media (max-width: 480px) {
    padding: 8px 0;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: white;
  font-family: system-ui, -apple-system, sans-serif;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const TimeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const TimeBox = styled.div`
  background: white;
  border-radius: 4px;
  padding: 4px 12px;
  color: #ec4899;
  font-weight: 600;
  font-size: 18px;
  min-width: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 4px 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

export const Separator = styled.span`
  color: white;
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Pricing Section
export const PricingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 59px;
  padding: 50px 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 30px 40px;
  }

  @media (max-width: 480px) {
    padding: 20px 20px;
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 15px;
  white-space: nowrap;
  z-index: 1;
  color: #fcfcfd;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 25px;
  border: 0px solid #e5e7eb;
  background: linear-gradient(90deg, #fbbf24 0%, #fb923c 100%);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 10px;
  }
`;

export const PricingCard = styled.div<{ featured?: boolean }>`
  background: #fff;
  border-radius: 10px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;

  ${(props) =>
    props.featured &&
    `
    background: linear-gradient(90deg, #7C3AED 0.11%, #DB2777 99.89%);
    color: white;
    transform: scale(1.05);
    h2, div, p, li, span {
      color: white;
    }
  `}

  &:hover {
    transform: ${(props) => (props.featured ? "scale(1.08)" : "scale(1.03)")};
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const PlanName = styled.h2`
  color: #1e222b;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const VideoCount = styled.span`
  display: inline-block;
  color: #4b5363;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.024px;
  margin-top: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Price = styled.div`
  color: #1e222b;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
export const PriceText = styled.span`
  color: #4b5363;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.024px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const RegularPrice = styled.p`
  color: #6b7280;
  text-decoration: line-through;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.024px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FeatureList = styled.ul`
  text-align: left;
  margin: 2rem 0;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  color: #4b5363;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  gap: 8px;
  font-weight: 400;
  line-height: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Button = styled.button<{ featured?: boolean }>`
  width: 100%;
  transition: opacity 0.2s;
  border: none;
  cursor: pointer;
  display: flex;
  height: 50px;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.024px;

  ${(props) =>
    props.featured
      ? `
    background: white;
    color: #9333ea;
  `
      : `
    background: #9333ea;
    color: white;
  `}

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    height: 45px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    height: 40px;
  }
`;

// Benefits Section
export const BenefitsGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;

export const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div<{ bgColor?: string; shadow?: string }>`
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.bgColor ?? "#fff"};
  box-shadow: ${(props) => props.shadow ?? "0 4px 8px rgba(0, 0, 0, 0.1)"};
  text-align: center;
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: 180px;
  }
`;

export const CardIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CardTitle = styled.span`
  color: #1f2737;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.024px;
  margin-bottom: 4px;
  margin-top: 8px;
`;

export const CardSubtitle = styled.p`
  color: #4b5363;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.014px;
  margin: 0;
`;

export const PaymentMethods = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    gap: 24px;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    gap: 16px;
    margin-top: 20px;
  }
`;
export const SecurePaymentTitle = styled.h2`
  color: #1f2737;
  text-align: center;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 90.909% */
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const PaymentIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

export const IconImage = styled.img`
  width: 40px;
  height: 24px;
`;
