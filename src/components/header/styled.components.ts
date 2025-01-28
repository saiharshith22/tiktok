import styled from "styled-components";

export const NavHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  gap: 0px;
  border: 1px solid #d1d5dc;
  display: flex;
  justify: space-between;
  padding: 20px 20px;
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
