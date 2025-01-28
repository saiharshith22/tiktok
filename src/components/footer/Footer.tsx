import {
  ContactButton,
  Copyright,
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterSection,
  Logo,
  LogoSection,
  SectionTitle,
  SocialIcon,
  SocialLinks,
  TikTokIcon,
} from "./styled.components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <Logo>
            <TikTokIcon />
            TiktokRecover
          </Logo>
          <ContactButton>Contact Support</ContactButton>
        </LogoSection>

        <FooterSection>
          <SectionTitle>Legal</SectionTitle>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/terms">Terms of Service</FooterLink>
          <FooterLink href="/privacy/do-not-sell">
            Do Not Sell My Personal Information
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialLinks>
            <SocialIcon
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>T</span>
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>IG</span>
            </SocialIcon>
            <SocialIcon
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} TikTokBackup.com All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
}
