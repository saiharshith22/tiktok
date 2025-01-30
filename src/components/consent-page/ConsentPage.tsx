import {
  CheckCircle,
  FileText,
  FileWarning,
  Grid,
  HelpCircle,
  Lock,
  ShieldCheck,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  CancelButton,
  CheckboxContainer,
  ComplianceContainer,
  ComplianceItem,
  Container,
  HeadingContainer,
  Icon,
  LableText,
  Paragraph,
  ProceedButton,
  Section,
  SectionContainer,
  Strong,
  SubText,
  Subtitle,
  Text,
  Title,
  CancelButtonText,
  ProceedButtonText,
  InfoContainer,
  InfoText,
  SupportLink,
  FooterContainer,
  FooterItem,
  FooterText,
} from "./styled.components";

const ConsentPage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleOrderPlacement = () => {
    navigate("/thankyou");
  };

  return (
    <Container>
      <HeadingContainer>
        <Title>Download Consent Confirmation</Title>
        <Subtitle>
          Please review and accept your terms before proceeding with your TikTok
          video recovery.
        </Subtitle>
      </HeadingContainer>

      <SectionContainer>
        <Section>
          <Icon>
            <FileText size={20} />
          </Icon>
          <Text>
            <Strong>Consent Message</Strong>
            <Paragraph>
              By proceeding, you confirm that you are the rightful owner of the
              TikTok account and consent to the retrieval of the video content.
              Your data will be securely processed and encrypted during
              recovery.
            </Paragraph>
          </Text>
        </Section>

        <Section>
          <Icon>
            <Lock size={20} />
          </Icon>
          <Text>
            <Strong>Data Privacy</Strong>
            <Paragraph>
              Your data is encrypted and protected using industry-standard
              security measures.
            </Paragraph>
          </Text>
        </Section>

        <Section>
          <Icon>
            <FileWarning size={20} />
          </Icon>
          <Text>
            <Strong>Usage Terms</Strong>
            <Paragraph>
              Downloaded contents must comply with our terms of service and
              applicable laws.
            </Paragraph>
          </Text>
        </Section>

        <Section>
          <Icon>
            <ShieldCheck size={20} />
          </Icon>
          <Text>
            <Strong>User Agreement</Strong>
            <Paragraph>
              By accepting, you acknowledge our data handling practices as
              described in our Privacy Policy.
            </Paragraph>
          </Text>
        </Section>
      </SectionContainer>

      <ComplianceContainer>
        <ComplianceItem>
          <CheckCircle size={18} color="green" />
          <SubText>We do not store or share any recovered videos.</SubText>
        </ComplianceItem>
        <ComplianceItem>
          <CheckCircle size={18} color="green" />
          <SubText>
            This process is fully compliant with GDPR, CCPA, and global data
            privacy laws.
          </SubText>
        </ComplianceItem>
      </ComplianceContainer>

      <CheckboxContainer>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <LableText>
          I have read and agree to the Privacy Policy and Terms of Service
        </LableText>
      </CheckboxContainer>

      <ButtonContainer>
        <ProceedButton onClick={handleOrderPlacement}>
          <ProceedButtonText>Proceed to Order Placement</ProceedButtonText>
        </ProceedButton>

        <CancelButton>
          <CancelButtonText>Cancel & Exit</CancelButtonText>
        </CancelButton>
      </ButtonContainer>
      <InfoContainer>
        <HelpCircle size={16} color="#4b5363" />
        <InfoText>
          Need more information?{" "}
          <SupportLink href="#">Contact Support</SupportLink>
        </InfoText>
      </InfoContainer>

      <FooterContainer>
        <FooterItem>
          <ShieldCheck size={18} color="green" />
          <FooterText>GDPR Compliant</FooterText>
        </FooterItem>
        <FooterItem>
          <Grid size={18} color="green" />
          <FooterText>ISO 27001</FooterText>
        </FooterItem>
        <FooterItem>
          <Lock size={18} color="green" />
          <FooterText>SSL Secured</FooterText>
        </FooterItem>
      </FooterContainer>
    </Container>
  );
};

export default ConsentPage;
