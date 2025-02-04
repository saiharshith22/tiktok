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
import TwitterIcon from "../../assets/images/twitter.svg";
import InstagramIcon from "../../assets/images/Instagram.svg";
import TiktokIcon from "../../assets/images/Tiktok.svg";

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
              <img src={TwitterIcon} alt="TwitterIcon" />
            </SocialIcon>
            <SocialIcon
              href={InstagramIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="InstagramIcon" />
            </SocialIcon>
            <SocialIcon
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TiktokIcon} alt="TiktonIcon" />
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
