import styled from "styled-components";
import { Star } from "lucide-react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

export const FormCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 658px;

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  color: #1f2737;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: 0.08px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  color: #4b5363;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.08px;
  margin-top: 16px;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  letter-spacing: 0.014px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  border: 1px solid #d1d4dc;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #666;
  }

  &::placeholder {
    color: #8f96a3;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    letter-spacing: 0.024px;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  border: 1px solid #d1d4dc;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.2s;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.024px;

  &:focus {
    outline: none;
    border-color: #666;
  }

  &::placeholder {
    color: #8f96a3;
  }

  @media (max-width: 480px) {
    padding: 16px 12px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StarIcon = styled(Star)<{ $active: boolean }>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: ${(props) => (props.$active ? "#ffd700" : "none")};
  stroke: ${(props) => (props.$active ? "#ffd700" : "#999")};
  transition: all 0.2s;

  &:hover {
    fill: #ffd700;
    stroke: #ffd700;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.label`
  font-size: 14px;
  color: #666;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;
  max-width: 180px;
  padding: 12px;
  background-color: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 480px) {
    max-width: 50%;
  }
`;
