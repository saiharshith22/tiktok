import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
`;

export const Card = styled.div`
  max-width: 450px;
  padding: 2rem;
  margin: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    font-weight: bold;
  }

  p {
    color: #6c757d;
    font-size: 0.9rem;
    margin: 0;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  background-color: #ffffff;
  color: #000000;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #ffffff;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const InputContainer = styled.div`
  text-align: left;
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #e9eaea;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }
  }

  small {
    display: block;
    margin-top: 0.5rem;
    font-size: 0.8rem;
    color: #6c757d;
  }
`;

export const Footer = styled.footer`
  margin-top: 1.5rem;
  font-size: 0.8rem;

  a {
    color: #007bff;
    text-decoration: none;
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
  background-color: #f8f9fa;
  padding: 0.8rem;
  font-size: 0.9rem;
  color: #6c757d;
  border-radius: 5px;

  svg {
    color: #28a745;
    font-size: 1.2rem;
  }
`;
