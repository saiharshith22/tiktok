import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h2`
  color: #1f2737;
  text-align: center;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.08px;
  padding: 1.5rem;
  @media (max-width: 768px) {
    font-size: 28px; /* Tablet */
  }

  @media (max-width: 480px) {
    font-size: 22px; /* Mobile */
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

export const Card = styled.div`
  border-radius: 10px;
  background: linear-gradient(180deg, #e8dafb 0%, #fdedf3 100%);
  box-shadow: 0px 122px 34px 0px rgba(0, 0, 0, 0),
    0px 78px 31px 0px rgba(0, 0, 0, 0.01), 0px 44px 26px 0px rgba(0, 0, 0, 0.05),
    0px 19px 19px 0px rgba(0, 0, 0, 0.09), 0px 5px 11px 0px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem; /* Tablet */
  }

  @media (max-width: 480px) {
    padding: 0.75rem; /* Mobile */
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  color: #9333ea;
  margin-bottom: 1rem;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.03px;
  color: #1f2737;

  @media (max-width: 768px) {
    font-size: 18px; /* Tablet */
  }

  @media (max-width: 480px) {
    font-size: 16px; /* Mobile */
  }
`;

export const CardDescription = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.08px;
  color: #4b5363;

  @media (max-width: 768px) {
    font-size: 14px; /* Tablet */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Mobile */
  }
`;
