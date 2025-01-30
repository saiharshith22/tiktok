// StyledComponents.ts
import styled from "styled-components";

export const Container = styled.div`
  max-width: 831px;
  margin: 80px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;
export const Title = styled.span`
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.0025em;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f2737;
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
`;

export const Section = styled.div`
  background: #e9eaed;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.div`
  font-size: 20px;
  color: green;
`;

export const Text = styled.div`
  flex: 1;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

export const Button = styled.button<{ primary?: boolean }>`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background: ${(props) => (props.primary ? "#000" : "#ddd")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #666;
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
`;

export const Badge = styled.span`
  background: #e3e3e3;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
`;
