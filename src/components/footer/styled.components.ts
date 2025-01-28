import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1f2737;
  padding: 2rem 5%;
  color: white;

  @media (min-width: 768px) {
    padding: 3rem 5%;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const TikTokIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'/%3E%3C/svg%3E");
`;

export const ContactButton = styled.button`
  background-color: white;
  color: #1f2937;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SectionTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterLink = styled.a`
  color: #9ca2af;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.875rem;

  &:hover {
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const SocialIcon = styled.a`
  color: #9ca2af;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: #9ca2af;
  margin-top: 2rem;
  padding-top: 1rem;
  font-size: 0.75rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
    padding-top: 2rem;
    font-size: 0.875rem;
  }
`;
