import styled from "styled-components";

export const FAQContainer = styled.section`
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding: 0 0.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #1f2737;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AccordionItem = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
`;

export const AccordionButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: white;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  color: #1f2737;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    transition: transform 0.2s;
    transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${(props) => (props.isOpen ? "1rem 1.5rem" : "0 1.5rem")};
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  color: #6b7280;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: ${(props) => (props.isOpen ? "0.75rem 1rem" : "0 1rem")};
  }
`;
