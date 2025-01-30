import styled from "styled-components";

export const Container = styled.div`
  max-width: 831px;
  margin: 80px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 40px auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin: 20px auto;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.span`
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.0025em;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f2737;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.text`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.0015em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #4b5363;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Section = styled.div`
  background: #e9eaed;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    gap: 6px;
  }
`;

export const Icon = styled.div`
  font-size: 20px;
  color: green;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 16px;
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;

  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 12px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    margin-top: 10px;
  }
`;

export const Badge = styled.span`
  background: #e3e3e3;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 8px;
  }
`;

export const Strong = styled.strong`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f2737;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Paragraph = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.005em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #4b5363;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ComplianceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 12px;
    margin-bottom: 18px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin-top: 8px;
    margin-bottom: 12px;
  }
`;

export const ComplianceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #333;

  @media (max-width: 768px) {
    gap: 6px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    font-size: 10px;
  }
`;

export const SubText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.001em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #4b5363;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const LableText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.001em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f2737;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const ProceedButtonText = styled.span`
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

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ProceedButton = styled.button`
  border-radius: 8px;
  background: #1e222b;
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    padding: 14px;
    margin-bottom: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    margin-bottom: 12px;
  }
`;

export const CancelButton = styled.button`
  border-radius: 8px;
  border: 1px solid #d1d5dc;
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 14px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const CancelButtonText = styled.span`
  color:  #4b5363;
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

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 8px;
  margin-top: 22px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-top: 18px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin-top: 14px;
  }
`;

export const InfoText = styled.span`
  color:  #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.014px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const SupportLink = styled.a`
  color: #7c3aed;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.014px;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 30px;
  }
`;

export const FooterItem = styled.div`
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

export const FooterText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.014px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
