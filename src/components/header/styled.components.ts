import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NavInfo = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

export const NavButtons = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: none;
  font-size: 0.85rem;
  cursor: pointer;
`;
