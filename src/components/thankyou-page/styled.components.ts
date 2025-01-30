import styled from "styled-components";

export const ContainerWrapper = styled.div`
  max-width: 713px;
  margin: auto;
  padding: 32px;
  margin-top: 80px;
  margin-bottom: 80px;
  border-radius: 10px;
  background: #fcfcfd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    padding: 25px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Container = styled.div`
  text-align: center;
  border-radius: 10px;
  background: #fff;
`;

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #d1f2d1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 425px) {
    width: 30px;
    height: 30px;
  }
`;

export const Title = styled.h1`
  color: #1f2937;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: 0.08px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 30px;
`;

export const Subtitle = styled.span`
  color: #4b5563;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const OrderDetails = styled.div`
  padding: 32px;
  text-align: left;
  border-radius: 10px;
  background: #e9eaed;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 425px) {
    padding: 15px;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const Label = styled.span`
  color: var(--Primary-Color-Light-Text-1, #4b5363);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const LabelValue = styled.strong`
  color: var(--Primary-Color-Dark-Text-1, #1f2737);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const FooterText = styled.span`
  color: var(--Primary-Color-Light-Text-1, #4b5363);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.014px;
  margin-top: 16px;
  margin-bottom: 12px;
  display: block; /* 👈 Ensures margin works */

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const FooterSubtext = styled.span`
  color: var(--Primary-Color-Light-Text-1, #4b5363);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.014px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 425px) {
    font-size: 10px;
  }
`;

export const SecureBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #2d8f2d;
`;

export const Button = styled.button`
  width: 100%;
  background: black;
  color: white;
  padding: 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 26px;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 12px;
  }

  @media (max-width: 425px) {
    padding: 10px;
    font-size: 10px;
  }
`;

export const ButtonText = styled.span`
  color: #fcfcfd;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
