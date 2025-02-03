import { useNavigate } from "react-router-dom";
import CheckIcon from "../../assets/images/Frame.svg";
import ShieldCheckIcon from "../../assets/images/ShieldCheckIcon.svg";
import {
  Button,
  ButtonText,
  Container,
  ContainerWrapper,
  DetailRow,
  FooterSubtext,
  FooterText,
  HeadingWrapper,
  IconWrapper,
  Label,
  LabelValue,
  OrderDetails,
  SecureBadge,
  Subtitle,
  Title,
} from "./styled.components";

const ThankyouPage: React.FC = () => {
  const navigate = useNavigate();
  const handleNavigateToDashboard = () => {
    navigate("/");
  };

  return (
    <ContainerWrapper>
      <Container>
        <IconWrapper>
          <img src={CheckIcon} alt="Check Icon" />
        </IconWrapper>
        <HeadingWrapper>
          <Title>Thank You for Your Order!</Title>
          <Subtitle>Your videos are being recovered.</Subtitle>
        </HeadingWrapper>

        <OrderDetails>
          <DetailRow>
            <Label>Order ID:</Label>
            <LabelValue>#TK2025789</LabelValue>
          </DetailRow>
          <DetailRow>
            <Label>Receipt sent to:</Label>
            <LabelValue>dancingstar@gmail.com</LabelValue>
          </DetailRow>
          <DetailRow>
            <Label>Estimated recovery time:</Label>
            <LabelValue>15-20 minutes</LabelValue>
          </DetailRow>
          <DetailRow>
            <Label>Amount Paid:</Label>
            <LabelValue>$159.89</LabelValue>
          </DetailRow>
        </OrderDetails>

        <FooterText>
          Your download link will be available in your dashboard
        </FooterText>
        <SecureBadge>
          <img src={ShieldCheckIcon} alt="Shield Check Icon" />
          <FooterSubtext>All data is encrypted and secure</FooterSubtext>
        </SecureBadge>

        <Button onClick={handleNavigateToDashboard}>
          <ButtonText>Go to Dashboard</ButtonText>
        </Button>
      </Container>
    </ContainerWrapper>
  );
};

export default ThankyouPage;
