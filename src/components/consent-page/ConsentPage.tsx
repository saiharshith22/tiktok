// DownloadConsent.tsx
import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  Section,
  Icon,
  Text,
  CheckboxContainer,
  Footer,
  BadgeContainer,
  Badge,
} from "./styled.components";
import {
  CheckCircle,
  Lock,
  FileText,
  FileWarning,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import IconButton from "../icon-button/IconButton";
import { useNavigate } from "react-router-dom";

const ConsentPage: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const handleOrderPlacement = () => {
    navigate("/thankyou");
  };

  return (
    <Container>
      <Title>Download Consent Confirmation</Title>
      <Subtitle>
        Please review and accept your terms before proceeding with your TikTok
        video recovery.
      </Subtitle>

      <Section>
        <Icon>
          <FileText size={20} />
        </Icon>
        <Text>
          <strong>Consent Message</strong>
          <p>
            By proceeding, you confirm that you are the rightful owner of the
            TikTok account and consent to the retrieval of the video content.
            Your data will be securely processed and encrypted during recovery.
          </p>
        </Text>
      </Section>

      <Section>
        <Icon>
          <Lock size={20} />
        </Icon>
        <Text>
          <strong>Data Privacy</strong>
          <p>
            Your data is encrypted and protected using industry-standard
            security measures.
          </p>
        </Text>
      </Section>

      <Section>
        <Icon>
          <FileWarning size={20} />
        </Icon>
        <Text>
          <strong>Usage Terms</strong>
          <p>
            Downloaded contents must comply with our terms of service and
            applicable laws.
          </p>
        </Text>
      </Section>

      <Section>
        <Icon>
          <ShieldCheck size={20} />
        </Icon>
        <Text>
          <strong>User Agreement</strong>
          <p>
            By accepting, you acknowledge our data handling practices as
            described in our Privacy Policy.
          </p>
        </Text>
      </Section>

      <CheckboxContainer>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label>
          I have read and agree to the Privacy Policy and Terms of Service
        </label>
      </CheckboxContainer>

      <IconButton
        icon={<CheckCircle size={18} />}
        label="Proceed to Order Placement"
        iconPosition="start"
        onClick={handleOrderPlacement}
        backgroundColor={checked ? "#2662d9" : "#ccc"}
        color="white"
        size="large"
        styles={{ width: "100%", marginTop: "10px" }}
      />

      <IconButton
        icon={<XCircle size={18} />}
        label="Cancel & Exit"
        iconPosition="start"
        onClick={() => alert("Exiting")}
        backgroundColor="#e74c3c"
        color="white"
        size="large"
        styles={{ width: "100%", marginTop: "10px" }}
      />

      <Footer>
        Need more information? <a href="#">Contact Support</a>
      </Footer>

      <BadgeContainer>
        <Badge>GDPR Compliant</Badge>
        <Badge>ISO 27001</Badge>
        <Badge>SSL Secured</Badge>
      </BadgeContainer>
    </Container>
  );
};

export default ConsentPage;
