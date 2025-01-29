import styled from "styled-components";

export const ProfileCardWrapper = styled.section`
  border-radius: 14px;
  background: #fcfcfd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 70px;
`;

export const ProfileContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const ProfileUsername = styled.div`
  color: #1f2737;
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
`;

export const ProfileName = styled.div`
  color: #4b5363;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.014px;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    gap: 8px;
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    gap: 16px;
  }
`;

export const InfoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background-color: #e9eaed;
  padding: 16px;
  border-radius: 8px;
  min-width: 150px;
  max-width: 230px;

  @media (max-width: 600px) {
    min-width: 80px;
    padding: 8px;
    gap: 2px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    min-width: 100px;
    padding: 8px;
  }

  @media (min-width: 1400px) {
    width: 230px;
  }
`;

export const InfoCardValue = styled.div`
  color: #7c3aed;
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const InfoCardTitle = styled.div`
  color: #4b5363;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.014px;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 769px) {
    font-size: 14px;
  }
`;

export const Bio = styled.div`
  color: #1f2737;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.014px;
  text-align: center;
`;
export const Card = styled.div`
  border-radius: 14px;
  background: #fcfcfd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonGroup = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
  @media (max-width: 600px) {
    display: block;
    button {
      max-width: 100% !important;
    }
    button:first-child {
      margin-bottom: 8px;
    }
  }
`;
