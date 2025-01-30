import {
  Container,
  Input,
  SearchButton,
  SearchContainer,
  SecurityNotice,
  Subtitle,
  Title,
} from "./styled.components";
import { useNavigate } from "react-router-dom";

export default function TikTokRecovery() {
  const navigate = useNavigate(); 

  const handleSearch = () => {
    navigate("/profile");
  };

  return (
    <Container>
      <Title>Recover Your TikTok Videos</Title>
      <Subtitle>
        Lost your favourite TikTok videos? We can help you recover them quickly
        and securely.
      </Subtitle>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Enter your TikTok username to recover videos"
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>
      <SecurityNotice>
        This service is secure and compliant with all applicable regulations
      </SecurityNotice>
    </Container>
  );
}
