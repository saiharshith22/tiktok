import styled from "styled-components";

export const NavHeader = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #f3f4f7;
  gap: 0px;
  border: 1px solid #d1d5dc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    padding: 30px 40px;
  }
  @media (min-width: 1024px) {
    padding: 40px 60px;
  }
  @media (min-width: 1440px) {
    padding: 40px 80px;
  }
`;

export const LogoText = styled.div`
  font-family: Inter;
  color: #1f2737;
  font-size: 22px;
  font-weight: 700;
  line-height: 20px;
`;

export const StyledButton = styled.button`
  color: #000;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.014px;
  border-radius: 8px;
  background: #e9eaed;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d1d5dc;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
