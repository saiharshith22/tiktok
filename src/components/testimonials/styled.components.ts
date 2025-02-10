import styled from "styled-components";
import { Star } from "lucide-react";

export const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h2`
  color: #1f2737;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 93.75% */
  letter-spacing: 0.08px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
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

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 40px;
  }
`;

export const Card = styled.div`
  border-radius: 10px;
  border: 0.5px solid #d1d5dc;
  background: #fcfcfd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 32px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 4px;
  }
`;

export const UserMeta = styled.div`
  text-align: left;
`;

export const UserName = styled.h3`
  color: #1f2737;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.08px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const UserHandle = styled.p`
  color: #4b5363;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.035px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const StarsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const StarWrapper = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const FullStar = styled(Star)`
  width: 100%;
  height: 100%;
  fill: #ffb800;
  stroke: #ffb800;

  &.empty-star {
    fill: none;
    stroke: rgb(231, 233, 235);
  }
`;

export const HalfStar = styled(Star)`
  position: absolute;
  width: 100%;
  height: 100%;
  fill: #ffb800;
  stroke: #ffb800;
  clip-path: inset(0 50% 0 0); /* Creates the half-star effect */
`;

export const Testimonial = styled.p`
  color: #4b5363;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.08px;
  text-align: left;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatImg = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StatNumber = styled.span`
  color: #1f2737;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 75% */
  letter-spacing: 0.08px;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 20px;
  }
`;

export const StatLabel = styled.span`
  color: #4b5363;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.04px;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
  }
`;
